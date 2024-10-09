import Link from "next/link";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default async function Index() {
  return (
    <>
      <main className="grid h-full grid-rows-[70%_min-content_auto]">
        <div className="ml-20 bg-gradient-to-b from-[#172B4D] to-[#0052CC] text-white grid place-content-end rounded-l-[40px] rounded-tr-[40px] p-5 pb-[40px] justify-start">
          <div className="grid gap-5">
            <img
              src="https://placehold.co/100x100"
              alt=""
              className="rounded-full"
            />
            <h1 className="font-bold text-5xl">Parkridge Estate</h1>
            <div>
              <p className="text-xl">Effortless Property Management,</p>
              <p className="text-xl">Simplified for You.</p>
            </div>
          </div>
        </div>
        <div className="ml-20 bg-[#0052CC]">
          <Link href="/login">
            <button
              type="button"
              className="text-2xl bg-white font-bold p-5 pr-16 rounded-r-full"
            >
              Get Started →
            </button>{" "}
          </Link>
        </div>
        <div>
          <div className="h-full ml-40 bg-gradient-to-t from-[#172B4D] to-[#0052CC] text-white grid place-content-end rounded-l-[40px]">
            <div className="w-full flex items-center justify-center mx-auto text-center text-xs gap-8 py-1">
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
