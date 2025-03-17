import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Define the inventory item type based on the actual database schema
export type InventoryItem = {
  id: string | number;
  code: string; // Product code
  size: string; // Size code
  stock: number; // Available quantity
  name?: string; // Product name
  quantity?: number; // Alternative name for quantity
  updated_at?: string;
  created_at?: string;
};

// Helper function to get all inventory items
export async function getAllInventory() {
  try {
    // Log the raw SQL query for debugging
    console.log('Fetching all inventory with query:', 
      `${supabaseUrl}/rest/v1/inventory?select=*`);
    
    const { data, error } = await supabase
      .from('inventory')
      .select('*');
    
    if (error) throw error;
    console.log('All inventory data:', data);
    
    // Log each item individually for better debugging
    if (data && data.length > 0) {
      console.log('Inventory items breakdown:');
      data.forEach(item => {
        console.log(`Item: code=${item.code}, size=${item.size}, quantity=${item.quantity || item.stock}`);
      });
    } else {
      console.log('No inventory items found');
    }
    
    return data || [];
  } catch (error) {
    console.error('Error fetching all inventory:', error);
    return [];
  }
}

// Helper function to get inventory for a specific product
export async function getProductInventory(productId: string) {
  try {
    console.log(`Fetching inventory for product ID: ${productId}`);
    
    // Get all inventory and filter client-side for case-insensitive match
    const { data, error } = await supabase
      .from('inventory')
      .select('*');
    
    if (error) throw error;
    
    // Filter for the specific product code (case-insensitive)
    const filteredData = data?.filter(item => 
      item.code.toLowerCase() === productId.toLowerCase()
    ) || [];
    
    console.log(`Inventory for ${productId} (case-insensitive match):`, filteredData);
    return filteredData;
  } catch (error) {
    console.error(`Error fetching inventory for product ${productId}:`, error);
    return [];
  }
}

// Check stock by code and size - removed .single() to avoid errors
export async function checkStockByCodeAndSize(code: string, size: string): Promise<{
  inStock: boolean;
  quantity: number;
  productName?: string;
}> {
  try {
    console.log(`Checking stock for code: ${code}, size: ${size}`);
    
    // Get all inventory and filter client-side for case-insensitive match
    const { data, error } = await supabase
      .from('inventory')
      .select('*');
    
    if (error) throw error;
    
    // Find the matching item (case-insensitive)
    const item = data?.find(item => 
      item.code.toLowerCase() === code.toLowerCase() && 
      item.size.toLowerCase() === size.toLowerCase()
    );
    
    if (item) {
      const quantity = item.quantity || item.stock || 0;
      console.log(`Found item via case-insensitive match:`, item);
      return {
        inStock: quantity > 0,
        quantity: quantity,
        productName: item.name
      };
    }
    
    console.log(`No inventory found for ${code}/${size}`);
    return { inStock: false, quantity: 0 };
  } catch (error) {
    console.error(`Error checking stock for ${code}/${size}:`, error);
    return { inStock: false, quantity: 0 };
  }
}

// Helper function to group inventory by product ID
export function groupInventoryByProduct(items: InventoryItem[]) {
  const grouped: Record<string, InventoryItem[]> = {};
  
  items.forEach(item => {
    // Ensure code is treated as string and normalized to lowercase for consistency
    const productId = String(item.code).toLowerCase();
    
    if (productId) {
      if (!grouped[productId]) {
        grouped[productId] = [];
      }
      
      // Normalize the item to ensure quantity is available
      const normalizedItem = {
        ...item,
        quantity: item.quantity || item.stock || 0
      };
      
      grouped[productId].push(normalizedItem);
    }
  });
  
  console.log('Grouped inventory (normalized):', grouped);
  
  // Create a version with original product IDs for the UI
  const uiGrouped: Record<string, InventoryItem[]> = {};
  
  // Map from normalized keys to original product IDs in our UI
  const productIds = ['pants-1', 'hoodie-1', 'bag-1', 'tshirt-1'];
  
  productIds.forEach(id => {
    const normalizedId = id.toLowerCase();
    if (grouped[normalizedId]) {
      uiGrouped[id] = grouped[normalizedId];
    }
  });
  
  console.log('UI-ready grouped inventory:', uiGrouped);
  return uiGrouped;
}

// Helper function to check if a specific size is in stock
export function isSizeInStock(inventory: InventoryItem[], size: string): boolean {
  // Case-insensitive size comparison
  const sizeItem = inventory.find(item => 
    item.size.toLowerCase() === size.toLowerCase()
  );
  return !!sizeItem && (sizeItem.quantity || sizeItem.stock || 0) > 0;
}

// Helper function to get quantity for a specific size
export function getSizeQuantity(inventory: InventoryItem[], size: string): number {
  // Case-insensitive size comparison
  const sizeItem = inventory.find(item => 
    item.size.toLowerCase() === size.toLowerCase()
  );
  return sizeItem ? (sizeItem.quantity || sizeItem.stock || 0) : 0;
}

// Helper function to get all available sizes with stock information
export function getAvailableSizes(inventory: InventoryItem[]) {
  // Sort sizes in a logical order (S, M, L, XL)
  const sizeOrder = { 'xs': 0, 's': 1, 'm': 2, 'l': 3, 'xl': 4, 'xxl': 5 };
  
  return inventory
    .map(item => ({
      size: item.size,
      inStock: (item.quantity || item.stock || 0) > 0,
      quantity: item.quantity || item.stock || 0
    }))
    .sort((a, b) => {
      const aOrder = sizeOrder[a.size.toLowerCase()] || 99;
      const bOrder = sizeOrder[b.size.toLowerCase()] || 99;
      return aOrder - bOrder;
    });
}