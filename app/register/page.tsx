"use client";
import Link from "next/link";
import { useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { IconArrowLeft } from "@tabler/icons-react";
import { SubmitButton } from "@/components/submit-button";


const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); // Changed here
  const [success, setSuccess] = useState(false);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    const { error } = await supabase.auth.signUp({ email, password });

    if (error) {
      setError(error.message); // This is now allowed
    } else {
      setSuccess(true);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen bg-gradient-to-b from-[#172B4D] to-[#0052CC]">
 <div className="p-8 rounded-lg w-full max-w-md py-1.5">
        <Link
          href="/login"
          className="flex items-center mb-4 text-white hover:text-blue-700"
        >
          <IconArrowLeft className="mr-2 text-white" />
          <span className="text-white">Back</span>
        </Link>
        <div>
          <h1 className="text-4xl font-bold mb-6 text-left text-white py-10">
            Register
          </h1>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          {success && (
            <p className="text-green-500 mb-4 text-center">
              Registration successful! Please check your email to confirm your
              account.
            </p>
          )}
          <form onSubmit={handleRegister} className="space-y-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white pt-3"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border-0 border-b-2 bg-transparent text-white"
              required
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
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full p-2 border-0 bg-transparent text-white border-b-2 focus:ring-blue-500 focus:border-blue-500 mb-11"
              required
            />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white shadow hover:bg-green-700 rounded-full"
            >
              Register
            </button>
          </form>
        </div>
        </div>
    </main>
  );
};

export default Register;
