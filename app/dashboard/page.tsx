import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import UserNavigation from "../../components/user-navigation";
import Carousel from "../../components/announcement/Dashboard-Carousel";

export default function Index() {
  return (
    <main className="flex flex-col items-center justify-between h-screen"> 
      <div className="p-8 rounded-lg w-full max-w-md py-1.5">
        <div>
          <h1 className="text-center mt-14 text-xl">Welcome to ParkRidge Estate</h1>
        </div>
        <div>
          <div className="flex items-center justify-top py-4">
            <div className="relative w-full max-w-sm">
              {/* Icon */}
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <IconSearch className="text-gray-500" />
              </span>
              {/* Input */}
              <input
                type="text"
                name="text"
                placeholder="Search"
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 text-center shadow-md"
              />
            </div>
          </div>
        </div>
        <div>
          <Carousel />
        </div>
        <div>
          <h1 className="font-extrabold text-3xl pt-2.5 text-left">Facilities</h1>
        </div>
      </div>
      <div className="w-96">
      <UserNavigation /> 
      </div>
      
    </main>
  );
}
