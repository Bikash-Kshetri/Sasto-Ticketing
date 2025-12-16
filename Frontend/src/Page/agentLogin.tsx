import React, { useState } from "react";
import { Mail, Eye, EyeOff, ShieldCheck } from "lucide-react";

const AgentLogin: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    setTimeout(() => {
      setIsSubmitting(false);
      if (formData.email && formData.password) {
        setSubmitStatus({
          type: "success",
          message: "Agent login request submitted.",
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: "Please enter your credentials.",
        });
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl flex overflow-hidden border border-slate-200">
        {/* Left Form Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <div className="flex items-center gap-2 text-blue-700 mb-3">
            <ShieldCheck className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Agent Portal
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-2 text-gray-900">
            Agent Login
          </h1>
          <p className="text-gray-600 mb-6">
            Sign in to manage bookings, fares, and client itineraries.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Agent email"
                required
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-10 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <Mail className="absolute right-3 top-3.5 text-gray-400 w-5 h-5" />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full border border-gray-300 rounded-lg py-3 px-4 pr-10 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                className="absolute right-3 top-3.5 text-gray-400"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {submitStatus.type && (
              <div
                className={`p-2 text-center rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-blue-50 text-blue-800 border border-blue-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Logging in..." : "Login as Agent"}
            </button>
          </form>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80"
            alt="Agent portal illustration"
            className="h-full w-full object-cover rounded-r-3xl"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default AgentLogin;

