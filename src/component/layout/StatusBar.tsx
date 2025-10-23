import { HiWifi } from "react-icons/hi";
import { CiBatteryFull } from "react-icons/ci";

const StatusBar = () => {
  return (
     <div className="fixed top-0 left-0 right-0 w-full z-50 bg-black max-w-7xl mx-auto flex justify-between items-center px-6 py-3 text-white">
      <div className="font-mono">12:45 PM</div>
      <div className="flex items-center gap-2">
        <HiWifi className="w-4 h-4" />
        <CiBatteryFull className="w-4 h-4" />
        <span>85%</span>
      </div>
    </div>
  );
};

export default StatusBar;
