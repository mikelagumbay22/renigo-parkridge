import Link from "next/link";
// Assuming you're using Tabler Icons

export default function Index() {
  return (
    <>
      <main className="flex items-center justify-center h-screen bg-gradient-to-b from-[#172B4D] to-[#0052CC] ">
        <div className=" p-8 rounded-lg  w-full max-w-md py-1.5">
          {/* Back Icon */}
          <Link href="/" className="flex items-center mb-4 text-white pb-10">
            <span>Back</span>
          </Link>

          {/* Heading */}
          <h1 className="text-4xl font-bold mb-6 text-left text-white py-10">
            Log into your account
          </h1>

          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full p-2 border-0 border-white border-b-2 bg-transparent "
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full p-2 border-0 bg-inherit  border-white border-b-2 "
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-6">
            <Link
              href="/forgot-password"
              className="text-sm text-white hover:text-blue-700"
            >
              Forgot password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-sky-950 text-white py-2 rounded-full h-[47px] hover:bg-blue-600 transition-colors"
          >
            Log In
          </button>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm text-slate-300">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:text-blue-700">
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
