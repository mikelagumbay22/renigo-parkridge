import { useState, useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import { IconSearch } from "@tabler/icons-react";

export default function Index() {
  return (
    <main className="flex flex-col items-center justify-top h-screen">
      <div className="p-8 rounded-lg w-full max-w-md py-1.5">
        <div>
          <h1 className=" text-center mt-11 ">Welcome to ParkRidge Estate</h1>
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
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-full focus:ring-blue-500 focus:border-blue-500 text-center"
              />
            </div>
          </div>
        </div>
        <div>
          <h1 className="font-extrabold text-2xl pt-2.5 text-left">Announcements</h1>
        </div>
        <div>
          <h1 className="font-bold text-1  text-right">View all</h1>
        </div>
      </div>
      <div></div>
    </main>
  );
}
