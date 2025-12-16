import React, { useState } from "react";

const VerifyResetCode: React.FC = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^\d{6}$/.test(code)) {
      setError("Code must be 6 digits.");
      return;
    }

    try {
      const res = await fetch("/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();

      if (data.error) {
        setError(data.error);
      } else {
        window.location.href = "/reset-password"; // Redirect after verification
      }
    } catch (err) {
      setError("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-gray-900 flex items-center justify-center text-white font-sans">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 border border-cyan-700 text-center">
        <h2 className="text-3xl font-extrabold mb-2 text-cyan-300">
          Verify Reset Code
        </h2>

        <p className="mb-6 text-cyan-100">
          Enter the 6-digit code sent to your email address.
        </p>

        {error && <div className="mb-4 text-red-400 font-semibold">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={code}
            maxLength={6}
            onChange={(e) => setCode(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-gray-900/80 border border-cyan-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            placeholder="6-digit code"
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-cyan-500 text-white font-bold text-lg hover:bg-cyan-600 transition shadow-lg"
          >
            Verify
          </button>
        </form>

        <a href="/login" className="block mt-6 text-cyan-300 hover:underline">
          &larr; Back to Login
        </a>
      </div>
    </div>
  );
};

export default VerifyResetCode;
