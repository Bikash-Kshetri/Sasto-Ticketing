import { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import axios from "axios";

export default function Booknow() {
  const [formData, setFormData] = useState({
    departureLocation: "",
    returnLocation: "",
    departureDate: "",
    returnDate: "",
    passportNumber: "",
  });
  const [passportImage, setpassportImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Validation
    if (
      !formData.departureLocation ||
      !formData.returnLocation ||
      !formData.departureDate ||
      !formData.returnDate ||
      !formData.passportNumber
    ) {
      setSubmitStatus({
        type: "error",
        message: "Please fill in all required fields",
      });
      setIsSubmitting(false);
      return;
    }

    if (!passportImage) {
      setSubmitStatus({
        type: "error",
        message: "Please upload your passport image",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Convert image to base64 for sending
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64Image = reader.result as string;

        const bookingData = {
          ...formData,
          passportImage: base64Image,
          planeName: "Nepal Airlines",
          price: 8848,
        };

        const response = await axios.post(
          "http://localhost:5005/api/booking",
          bookingData
        );

        if (response.data.success) {
          setSubmitStatus({
            type: "success",
            message: "Booking confirmed successfully!",
          });
          // Reset form
          setFormData({
            departureLocation: "",
            returnLocation: "",
            departureDate: "",
            returnDate: "",
            passportNumber: "",
          });
          setpassportImage(null);
        }
        setIsSubmitting(false);
      };
      reader.readAsDataURL(passportImage);
    } catch (error: unknown) {
      console.error("Booking error:", error);
      let errorMessage = "Failed to create booking. Please try again.";
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }
      setSubmitStatus({
        type: "error",
        message: errorMessage,
      });
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-6 py-10 lg:px-24 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT SECTION — Plane Details */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow p-6">
          {/* Plane Image */}
          <img
            src="/assets/plane.jpg"
            className="rounded-xl w-full h-[350px] object-cover"
            alt="Plane"
          />

          {/* Title + Price */}
          <div className="flex justify-between items-center mt-6">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">
                Nepal Airlines
              </h1>
              <p className="text-gray-500"></p>
            </div>

            <div className="text-right">
              <p className="text-3xl font-bold text-red-600">Rs. 848</p>
              <p className="text-gray-600 text-sm">per day</p>
            </div>
          </div>

          <hr className="my-6" />

          {/* About Plane */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              About Plane
            </h2>
            <p className="text-gray-600">
              Alias alias perferendis reprehenderit voluptatem, suscipit
              impedit.
            </p>
          </div>

          {/* Specifications */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              Specifications
            </h2>

            <ul className="grid grid-cols-2 gap-4 text-gray-700">
              <li>• Automatic</li>
              <li>• Petrol</li>
              <li>• 5 Seater</li>
              <li>• Air Condition</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION — Booking Form */}
        <div className="bg-white rounded-xl shadow p-6 h-fit">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Book This Plane
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* departure Location */}
            <div>
              <label className="text-sm font-semibold">
                departure Location *
              </label>
              <select
                name="departureLocation"
                value={formData.departureLocation}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg"
                required
              >
                <option value="">Select departure City</option>
                <option value="Kathmandu">Kathmandu</option>
                <option value="Pokhara">Pokhara</option>
                <option value="Biratnagar">Biratnagar</option>
                <option value="Bharatpur">Bharatpur</option>
                <option value="Lalitpur">Lalitpur</option>
              </select>
            </div>

            {/* Return Location */}
            <div>
              <label className="text-sm font-semibold">Return Location *</label>
              <select
                name="returnLocation"
                value={formData.returnLocation}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg"
                required
              >
                <option value="">Select Return City</option>
                <option value="Kathmandu">Kathmandu</option>
                <option value="Pokhara">Pokhara</option>
                <option value="Biratnagar">Biratnagar</option>
                <option value="Bharatpur">Bharatpur</option>
                <option value="Lalitpur">Lalitpur</option>
              </select>
            </div>

            {/* Dates */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">
                  departure Date *
                </label>
                <input
                  type="date"
                  name="departureDate"
                  value={formData.departureDate}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold">Return Date *</label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border rounded-lg"
                  required
                />
              </div>
            </div>

            {/* passport Verification */}
            <div className="mt-4">
              <h3 className="text-lg font-bold">passport Verification</h3>
              <p className="text-red-500 text-sm">Required*</p>

              {/* passport Input */}
              <input
                type="text"
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleChange}
                placeholder="Enter passport Number"
                className="w-full mt-2 px-4 py-2 border rounded-lg"
                required
              />

              {/* Image Upload */}
              <label className="mt-3 flex flex-col items-center justify-center border border-dashed border-gray-400 rounded-lg py-6 cursor-pointer text-gray-600">
                <FiUploadCloud className="text-3xl mb-2" />
                <span>Upload your passport image</span>
                <span className="text-xs text-gray-500">
                  JPG or PNG, up to 5MB
                </span>

                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setpassportImage(file);
                    }
                  }}
                />
              </label>

              {passportImage && (
                <p className="text-green-600 text-sm mt-2">
                  {passportImage.name} uploaded successfully ✔
                </p>
              )}
            </div>

            {/* Status Message */}
            {submitStatus.type && (
              <div
                className={`mt-4 p-3 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 bg-red-600 hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-lg transition-colors"
            >
              {isSubmitting ? "Processing..." : "Confirm Booking"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
