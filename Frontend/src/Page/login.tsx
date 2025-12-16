import React, { useState } from "react";
import { Mail, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom"; // 👉 added

const LoginPage: React.FC = () => {
  const navigate = useNavigate(); // 👉 navigation hook

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
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
      if (
        formData.email === "user@example.com" &&
        formData.password === "123456"
      ) {
        setSubmitStatus({ type: "success", message: "Login successful!" });
      } else {
        setSubmitStatus({
          type: "error",
          message: "Invalid email or password.",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl flex overflow-hidden">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-gray-600 mb-6">Please enter your details.</p>

          <button className="flex items-center justify-center border border-gray-300 rounded-full py-2 mb-4 hover:bg-gray-100 transition">
            <span className="mr-2 text-xl"></span> Login with Apple
          </button>

          <div className="flex items-center my-4">
            <hr className="grow border-gray-300" />
            <span className="mx-2 text-gray-400">or</span>
            <hr className="grow border-gray-300" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 outline-none focus:ring-2 focus:ring-green-500"
              />
              <Mail className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="button"
                className="absolute right-3 top-2.5 text-gray-400"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-500">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-green-500"
                />
                <span>Remember</span>
              </label>
              <a href="#" className="hover:underline">forgot password?</a>
            </div>

            {submitStatus.type && (
              <div
                className={`p-2 text-center rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Logging in..." : "Log in"}
            </button>
          </form>

          {/* Sign Up Button Integrated */}
          <p className="text-center text-gray-500 mt-4">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="font-semibold text-gray-800 hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:block w-1/2">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipPggUAoxlq4k7NjJmNyINotj3n28QpxPyCZHIke=s1360-w1360-h1020-rw"
            alt="Login Illustration"
            className="h-full w-full object-cover rounded-r-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
