import { IconSearch } from "@tabler/icons-react";
import Link from "next/link";
import UserNavigation from "../../components/user-navigation";
import Carousel from "../../components/announcement/carousel";
import Facilities from "../../components/facilities/facilities";
import LogoutButton from "../../components/logout-button";
import Security from "../../components/security/security";

export default function Index() {
  return (
    <main className="flex flex-col items-center justify-between h-screen">
      <div className="p-8 rounded-lg w-full max-w-md py-1.5">
        <div>
          <LogoutButton />
        </div>
        <div>
          <h1 className="text-center mt-5 text-xl">
            Welcome to ParkRidge Estate
          </h1>
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
          <Facilities />
        </div>
        <div>
          <Security />
        </div>
      </div>

      <div className="fixed bottom-0 flex rounded-lg w-full max-w-md py-1.5 justify-between">
        <div className="">
          <UserNavigation />
        </div>
      </div>
    </main>
  );
}
