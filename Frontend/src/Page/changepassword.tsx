import React, { useState } from "react";

interface ChangePasswordProps {
  username: string; // comes from auth state
}

const ChangePassword: React.FC<ChangePasswordProps> = ({ username }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError("New Password and Confirm Password must match.");
      return;
    }

    try {
      const res = await fetch("/change-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ oldPassword, newPassword, confirmPassword }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setSuccess(null);
      } else {
        setSuccess(data.success || "Password updated successfully!");
        setError(null);
      }
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-gray-900 text-white font-sans flex flex-col items-center justify-center">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full bg-opacity-80 bg-gray-900 backdrop-blur border-b border-cyan-700 shadow flex items-center justify-between px-8 py-4 mb-12">
        <div className="flex items-center gap-6">
          <a className="text-3xl font-extrabold text-cyan-400 tracking-widest" href="/">
            CYBER<span className="text-white">SEC</span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-base font-medium">Hi, {username}</span>
          <a
            href="/logout"
            className="px-4 py-2 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition shadow"
          >
            Logout
          </a>
        </div>
      </nav>

      {/* MAIN FORM */}
      <main className="flex flex-col items-center justify-center w-full">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-cyan-700 text-center">
          <h2 className="text-3xl font-extrabold mb-6 text-cyan-300">
            Change Password
          </h2>

          {error && <div className="mb-4 text-red-400 font-semibold">{error}</div>}
          {success && (
            <div className="mb-4 text-green-400 font-semibold">{success}</div>
          )}

          <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
            <input
              type="password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Old Password"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-cyan-700 text-white 
                focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-cyan-700 text-white 
                focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm New Password"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-cyan-700 text-white 
                focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-cyan-500 text-white font-bold text-lg 
                hover:bg-cyan-600 transition shadow-lg"
            >
              Update Password
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ChangePassword;
