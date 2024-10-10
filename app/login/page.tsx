"use client"; 

import Link from "next/link";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { IconArrowLeft } from "@tabler/icons-react";

export default function Index() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message); // Set error message if login fails
    } else {
      router.push("/dashboard"); // Navigate to the dashboard on successful login
    }
  };

  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-b from-[#172B4D] to-[#0052CC]">
      <div className="p-8 rounded-lg w-full max-w-md py-1.5">
        {/* Back Icon */}
        <Link
          href="/"
          className="flex items-center mb-4 text-white hover:text-blue-700"
        >
          <IconArrowLeft className="mr-2" />
          <span>Back</span>
        </Link>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-left text-white py-10">
          Log into your account
        </h1>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white pt-3"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border-0 border-b-2 bg-transparent text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required // Mark as required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white pt-3"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border-0 bg-transparent text-white border-b-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              required // Mark as required
            />
          </div>

          {/* Display Error if Login Fails */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {/* Forgot Password */}
          <div className="text-right mb-6 pb-6">
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
            className="w-full bg-blue-600 text-white py-2 rounded-full h-[47px] hover:bg-blue-700 transition-colors"
          >
            Log In
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-sm text-white">
          Don’t have an account?{" "}
          <Link href="/register" className="text-sky-500 hover:text-blue-700">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}
