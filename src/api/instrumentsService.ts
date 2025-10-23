
import { postQuery } from "./apiClient";
import type { Instrument } from "../types/types";

export async function fetchInstruments(): Promise<Instrument[]> {
  const payload = { query: "fintrabit.instruments" };
  const res = await postQuery(payload);

  const items = res.data || res.result || [];

  return items.map((item: any) => ({
    id: item.id,
    name: item.name,
    feedingName: item.feeding_name,
    tradingName: item.trading_name,
    icon: item.icon,
    staticCategoryId: item.static_category_id,
    overnightMarginTime: item.overnight_margin_time,
    currency: item.currency,
    timings: item.timings,
    staticData: {
      contractSize: item.static_data?.contract_size ?? 0,
      pip: item.static_data?.pip ?? 0,
      tickSize: item.static_data?.tick_size ?? 0,
    },
  }));
}
