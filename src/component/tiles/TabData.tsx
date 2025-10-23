import React, { useState, useEffect } from "react";
import type { TabName } from "../../types/types";
import SkeletonCard from "./SkeletonCard";


const tabData: Record<TabName, any[]> = {
  Favourites: [],
  Forex: [
    {
      time: "15:00:00",
      name: "EUR/GBP",
      change: {
        value: "+30",
        percentage: "+23.2%",
      },
      flags: {
        flag1: "https://countrygonecrazy.com/cdn/shop/products/AM019_67e396ec-56d4-4b50-9bfc-45cf20cc4c36_500x500.png?v=1677896467",
        flag2: "https://t3.ftcdn.net/jpg/15/83/78/18/360_F_1583781817_0h17HenFp2Orlz6NR0ps08d9mVuAcwXk.jpg",
      },
      values: {
        low: {
          value: 1478.256369,
          L: 235698,
        },
        high: {
          value: 1478.256369,
          H: 25.3659,
        },
      },
    },
    {
      time: "15:00:00",
      name: "EUR/GBP",
      change: {
        value: "+30",
        percentage: "+23.2%",
      },
      flags: {
        flag1: "https://countrygonecrazy.com/cdn/shop/products/AM019_67e396ec-56d4-4b50-9bfc-45cf20cc4c36_500x500.png?v=1677896467",
        flag2: "https://t3.ftcdn.net/jpg/15/83/78/18/360_F_1583781817_0h17HenFp2Orlz6NR0ps08d9mVuAcwXk.jpg",
      },
      values: {
        low: {
          value: 1478.256369,
          L: 235698,
        },
        high: {
          value: 1478.256369,
          H: 25.3659,
        },
      },
    },
    {
      time: "15:00:00",
      name: "EUR/GBP",
      change: {
        value: "+30",
        percentage: "+23.2%",
      },
      flags: {
        flag1: "https://countrygonecrazy.com/cdn/shop/products/AM019_67e396ec-56d4-4b50-9bfc-45cf20cc4c36_500x500.png?v=1677896467",
        flag2: "https://t3.ftcdn.net/jpg/15/83/78/18/360_F_1583781817_0h17HenFp2Orlz6NR0ps08d9mVuAcwXk.jpg",
      },
      values: {
        low: {
          value: 1478.256369,
          L: 235698,
        },
        high: {
          value: 1478.256369,
          H: 25.3659,
        },
      },
    },
     {
      time: "15:00:00",
      name: "EUR/GBP",
      change: {
        value: "+30",
        percentage: "+23.2%",
      },
      flags: {
        flag1: "https://countrygonecrazy.com/cdn/shop/products/AM019_67e396ec-56d4-4b50-9bfc-45cf20cc4c36_500x500.png?v=1677896467",
        flag2: "https://t3.ftcdn.net/jpg/15/83/78/18/360_F_1583781817_0h17HenFp2Orlz6NR0ps08d9mVuAcwXk.jpg",
      },
      values: {
        low: {
          value: 1478.256369,
          L: 235698,
        },
        high: {
          value: 1478.256369,
          H: 25.3659,
        },
      },
    },
     {
      time: "15:00:00",
      name: "EUR/GBP",
      change: {
        value: "+30",
        percentage: "+23.2%",
      },
      flags: {
        flag1: "https://countrygonecrazy.com/cdn/shop/products/AM019_67e396ec-56d4-4b50-9bfc-45cf20cc4c36_500x500.png?v=1677896467",
        flag2: "https://t3.ftcdn.net/jpg/15/83/78/18/360_F_1583781817_0h17HenFp2Orlz6NR0ps08d9mVuAcwXk.jpg",
      },
      values: {
        low: {
          value: 1478.256369,
          L: 235698,
        },
        high: {
          value: 1478.256369,
          H: 25.3659,
        },
      },
    },
     {
      time: "15:00:00",
      name: "EUR/GBP",
      change: {
        value: "+30",
        percentage: "+23.2%",
      },
      flags: {
        flag1: "https://countrygonecrazy.com/cdn/shop/products/AM019_67e396ec-56d4-4b50-9bfc-45cf20cc4c36_500x500.png?v=1677896467",
        flag2: "https://t3.ftcdn.net/jpg/15/83/78/18/360_F_1583781817_0h17HenFp2Orlz6NR0ps08d9mVuAcwXk.jpg",
      },
      values: {
        low: {
          value: 1478.256369,
          L: 235698,
        },
        high: {
          value: 1478.256369,
          H: 25.3659,
        },
      },
    },
       {
      time: "15:00:00",
      name: "EUR/GBP",
      change: {
        value: "+30",
        percentage: "+23.2%",
      },
      flags: {
        flag1: "https://countrygonecrazy.com/cdn/shop/products/AM019_67e396ec-56d4-4b50-9bfc-45cf20cc4c36_500x500.png?v=1677896467",
        flag2: "https://t3.ftcdn.net/jpg/15/83/78/18/360_F_1583781817_0h17HenFp2Orlz6NR0ps08d9mVuAcwXk.jpg",
      },
      values: {
        low: {
          value: 1478.256369,
          L: 235698,
        },
        high: {
          value: 1478.256369,
          H: 25.3659,
        },
      },
    },
       {
      time: "15:00:00",
      name: "EUR/GBP",
      change: {
        value: "+30",
        percentage: "+23.2%",
      },
      flags: {
        flag1: "https://countrygonecrazy.com/cdn/shop/products/AM019_67e396ec-56d4-4b50-9bfc-45cf20cc4c36_500x500.png?v=1677896467",
        flag2: "https://t3.ftcdn.net/jpg/15/83/78/18/360_F_1583781817_0h17HenFp2Orlz6NR0ps08d9mVuAcwXk.jpg",
      },
      values: {
        low: {
          value: 1478.256369,
          L: 235698,
        },
        high: {
          value: 1478.256369,
          H: 25.3659,
        },
      },
    },
       {
      time: "15:00:00",
      name: "EUR/GBP",
      change: {
        value: "+30",
        percentage: "+23.2%",
      },
      flags: {
        flag1: "https://countrygonecrazy.com/cdn/shop/products/AM019_67e396ec-56d4-4b50-9bfc-45cf20cc4c36_500x500.png?v=1677896467",
        flag2: "https://t3.ftcdn.net/jpg/15/83/78/18/360_F_1583781817_0h17HenFp2Orlz6NR0ps08d9mVuAcwXk.jpg",
      },
      values: {
        low: {
          value: 1478.256369,
          L: 235698,
        },
        high: {
          value: 1478.256369,
          H: 25.3659,
        },
      },
    },
       {
      time: "15:00:00",
      name: "EUR/GBP",
      change: {
        value: "+30",
        percentage: "+23.2%",
      },
      flags: {
        flag1: "https://countrygonecrazy.com/cdn/shop/products/AM019_67e396ec-56d4-4b50-9bfc-45cf20cc4c36_500x500.png?v=1677896467",
        flag2: "https://t3.ftcdn.net/jpg/15/83/78/18/360_F_1583781817_0h17HenFp2Orlz6NR0ps08d9mVuAcwXk.jpg",
      },
      values: {
        low: {
          value: 1478.256369,
          L: 235698,
        },
        high: {
          value: 1478.256369,
          H: 25.3659,
        },
      },
    },
       {
      time: "15:00:00",
      name: "EUR/GBP",
      change: {
        value: "+30",
        percentage: "+23.2%",
      },
      flags: {
        flag1: "https://countrygonecrazy.com/cdn/shop/products/AM019_67e396ec-56d4-4b50-9bfc-45cf20cc4c36_500x500.png?v=1677896467",
        flag2: "https://t3.ftcdn.net/jpg/15/83/78/18/360_F_1583781817_0h17HenFp2Orlz6NR0ps08d9mVuAcwXk.jpg",
      },
      values: {
        low: {
          value: 1478.256369,
          L: 235698,
        },
        high: {
          value: 1478.256369,
          H: 25.3659,
        },
      },
    },


  ],
  Crypto: [],
  Indices: [],
  Derivatives: [],
};


const Tabs: React.FC = () => {
  const tabs: TabName[] = ["Favourites", "Forex", "Crypto", "Indices", "Derivatives"];
  const [activeTab, setActiveTab] = useState<TabName>("Forex");
  const [loading, setLoading] = useState(true);


  //  Show const SkeletonCard
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="max-w-7xl mx-auto sm:px-6 mt-20">
      {/* Tabs */}
      <div className="flex justify-center overflow-x-auto scrollbar-hide pl-16 sm:pl-0 ">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium whitespace-nowrap ${activeTab === tab
                ? "text-white "
                : "text-gray-400"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {loading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : tabData[activeTab].length === 0 ? (
          <p className="text-gray-400 text-center col-span-full">No data available</p>
        ) : (
          tabData[activeTab].map((item: any, index: number) => (
            <div
              key={index}
              className="px-3 grid grid-cols-4 gap-2 items-center border-b border-[#443f3f] sm:border sm:border-[#443f3f] sm:rounded-xl py-3"
            >
              <div className="relative w-14 h-12">
                <img
                  src={item.flags.flag1}
                  alt=""
                  className="w-12 h-12 rounded-full absolute left-0 top-0 border border-white"
                />
                <img
                  src={item.flags.flag2}
                  alt=""
                  className="w-12 h-12 rounded-full absolute left-4 top-1 border border-white"
                />
              </div>

              <div className="flex flex-col text-white">
                <p className="text-gray-400 text-[11px] sm:text-xs">{item.time}</p>
                <p className="font-semibold text-sm sm:text-base">{item.name}</p>
                <span
                  className={`text-[12px] sm:text-[13px] font-semibold ${item.change.value.startsWith("+") ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {item.change.value} ({item.change.percentage})
                </span>
              </div>

              <div className="flex flex-col justify-center items-center text-white text-[12px] sm:text-sm">
                <p>{item.values.low.value}</p>
                <p className="text-gray-400">L: {item.values.low.L}</p>
              </div>

              <div className="flex flex-col justify-center items-center text-white text-[12px] sm:text-sm">
                <span>{item.values.high.value}</span>
                <span className="text-gray-400">H: {item.values.high.H}</span>
              </div>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default Tabs;
