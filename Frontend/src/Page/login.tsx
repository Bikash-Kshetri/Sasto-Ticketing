import React, { useState } from "react";
import { Mail, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await axios.post(
        "http://localhost:5005/api/admin/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      // ✅ Save token
      localStorage.setItem("adminToken", response.data.token);

      setSubmitStatus({
        type: "success",
        message: "Login successful! Redirecting...",
      });

      // ✅ Redirect to dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 800);
    } catch (error: any) {
      setSubmitStatus({
        type: "error",
        message:
          error.response?.data?.message || "Invalid email or password",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl w-full max-w-4xl flex overflow-hidden">
          
          {/* LEFT SECTION */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-600 mb-6">Admin login only</p>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* EMAIL */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Admin Email"
                  required
                  className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10 outline-none focus:ring-2 focus:ring-green-500"
                />
                <Mail className="absolute right-3 top-2.5 text-gray-400 w-5 h-5" />
              </div>

              {/* PASSWORD */}
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
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>

              {/* REMEMBER */}
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
              </div>

              {/* STATUS MESSAGE */}
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

              {/* BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-full transition disabled:opacity-50"
              >
                {isSubmitting ? "Logging in..." : "Log in"}
              </button>
            </form>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:block w-1/2">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPggUAoxlq4k7NjJmNyINotj3n28QpxPyCZHIke=s1360-w1360-h1020-rw"
              alt="Login"
              className="h-full w-full object-cover rounded-r-3xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
