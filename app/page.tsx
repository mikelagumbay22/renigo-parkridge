import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default async function Index() {
  return (
    <>
      <main className="grid h-svh grid-rows-[67.8%_7.7%_19%]">
        <div className="ml-20 mt-20 bg-gradient-to-b from-[#172B4D] to-[#0052CC] text-white grid place-content-end rounded-l-[40px] rounded-tr-[40px] p-5 pb-[40px] justify-start">
          <div>
            <img src="https://placehold.co/100x100" alt="" />
            <h1 className="font-bold text-3xl">Parkridge Estate</h1>
            <p>Effortless Property Management,</p>
            <p>Simplified for You.</p>
          </div>
        </div>
        <div className="ml-20 relative">
          <button
            type="button"
            className="text-2xl bg-white font-bold p-5 pr-16 rounded-r-[50px] relative z-20"
          >
            Get Started →
          </button>
          <div className="bg-[#0052CC] h-full w-full absolute r-[50%] z-10 top-0"></div>
        </div>
        <div>
          <div className="h-full ml-40 bg-gradient-to-t from-[#172B4D] to-[#0052CC] text-white grid place-content-end rounded-l-[40px]"></div>
          <div>
            {" "}
            <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-1">
              <p>
                Powered by{" "}
                <a
                  href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                  target="_blank"
                  className="font-bold hover:underline"
                  rel="noreferrer"
                >
                  RENIGO
                </a>
              </p>
              <ThemeSwitcher />
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}
