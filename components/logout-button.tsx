"use client"; // Mark as a Client Component

import { useState } from 'react';
import { supabase } from '../lib/supabaseClient'; 
import { useRouter } from 'next/navigation'; 
import { IconLogout } from '@tabler/icons-react'; 

const LogoutButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const router = useRouter();

  // Function to handle logging out
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push('/'); // Redirect to homepage after logout
    } else {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div className="w-full right-0">
      {/* Logout Icon Button */}
      <button
        className="text-red-600 hover:text-red-800 focus:outline-none flex mt-7 items-end "
        onClick={() => setIsModalOpen(true)} // Open modal on click
      >
        <IconLogout size={24} />
        <span className="ml-2">Logout</span>
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96">
            <h2 className="text-xl font-semibold mb-4">Confirm Logout</h2>
            <p className="mb-6">Are you sure you want to log out?</p>

            <div className="flex justify-between">
              {/* Cancel Button */}
              <button
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
                onClick={() => setIsModalOpen(false)} // Close modal on cancel
              >
                Cancel
              </button>

              {/* Confirm Logout Button */}
              <button
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                onClick={() => {
                  handleLogout();
                  setIsModalOpen(false); // Close modal after logout
                }}
              >
                Confirm Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
