import React, { useState } from "react";

interface ResetPasswordProps {
  code: string; // the code from URL param
}

const ResetPassword: React.FC<ResetPasswordProps> = ({ code }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`/reset/${code}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
        setSuccess(null);
      } else {
        setSuccess("Password changed successfully!");
        setError(null);
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
      }
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-gray-900 flex items-center justify-center text-white font-sans">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-cyan-700 text-center">
        <h2 className="text-3xl font-extrabold mb-6 text-cyan-300">
          Reset Password
        </h2>

        {error && <div className="mb-4 text-red-400 font-semibold">{error}</div>}
        {success && (
          <div className="mb-4 text-green-400 font-semibold">{success}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="New Password"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-cyan-500 text-white font-bold text-lg hover:bg-cyan-600 transition shadow-lg"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
