
export interface Instrument {
  id: string;                          
  pair: string;                      
  symbol?: string;                     
  flag1?: string;                     
  flag2?: string;                      
  price: number;                      
  low: number;                    
  high: number;                    
  change: number | string;            
  changePercent?: number | string;     
  lastTradeTime: string;              
  sparkline?: number[];        
  favourite?: boolean;    
  currency: string;                    
  feeding_name: string;               
  icon: string;                        
  name: string;                      
  overnight_margin_time: string;       
  static_category_id: string;          
  static_data: {
    contract_size: number;           
    pip: number;                      
    tick_size: number;                 
  };
  timings: string;                     
  trading_name: string;              
}


export type TabName = "Favourites" | "Forex" | "Crypto" | "Indices" | "Derivatives";


export type TabData = Record<TabName, Instrument[]>;

