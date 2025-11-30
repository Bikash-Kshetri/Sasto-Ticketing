import React, { useState } from "react";

const countryCodes = [
    { code: "+1", country: "USA / Canada" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+64", country: "New Zealand" },
    { code: "+91", country: "India" },
    { code: "+92", country: "Pakistan" },
    { code: "+971", country: "UAE" },
    { code: "+974", country: "Qatar" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+977", country: "Nepal" },
    { code: "+880", country: "Bangladesh" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+82", country: "South Korea" },
];

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        inquiryType: "",
        departureCity: "",
        destinationCity: "",
        departureDate: "",
        returnDate: "",
        passengers: "",
        email: "",
        phoneCode: "+977",
        phone: "",
        leadSource: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error" | null; message: string }>({
        type: null,
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: "" });

        const finalData = {
            ...formData,
            phone: `${formData.phoneCode}${formData.phone}`,
        };

        try {
            const res = await fetch("http://localhost:5005/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(finalData),
            });

            if (!res.ok) throw new Error("Failed to submit");

            setSubmitStatus({ type: "success", message: "Your inquiry has been submitted successfully!" });

            setFormData({
                name: "",
                inquiryType: "",
                departureCity: "",
                destinationCity: "",
                departureDate: "",
                returnDate: "",
                passengers: "",
                email: "",
                phoneCode: "+977",
                phone: "",
                leadSource: "",
                message: "",
            });
        } catch (error) {
            setSubmitStatus({ type: "error", message: "Something went wrong. Please try again!" });
        }

        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-white pt-24 pb-16 px-4 sm:px-6 lg:px-12 xl:px-20">
            <div className="w-full lg:max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Travel Inquiry Form</h2>

                <form onSubmit={handleSubmit} className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Full Name */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange}
                            required className="w-full px-4 py-3 border rounded-lg" placeholder="John Doe" />
                    </div>

                    {/* Inquiry Type */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Inquiry Type *</label>
                        <select name="inquiryType" value={formData.inquiryType} onChange={handleChange}
                            required className="w-full px-4 py-3 border rounded-lg">
                            <option value="">Select Inquiry Type</option>
                            <option value="urgent_ticket">Urgent Ticket</option>
                            <option value="customer_support">Customer Support</option>
                            <option value="date_change">Date Change</option>
                            <option value="hotel_booking">Hotel Booking</option>
                            <option value="new_lead">New Lead</option>
                            <option value="others">Others</option>
                            <option value="request_price">Request Price</option>
                            <option value="ticket_booking">Ticket Booking</option>
                        </select>
                    </div>

                    {/* Departure City */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Departure City *</label>
                        <input type="text" name="departureCity" value={formData.departureCity}
                            onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg"
                            placeholder="Kathmandu" />
                    </div>

                    {/* Destination City */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Destination City *</label>
                        <input type="text" name="destinationCity" value={formData.destinationCity}
                            onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg"
                            placeholder="Dubai" />
                    </div>

                    {/* Departure Date */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Departure Date *</label>
                        <input type="date" name="departureDate" value={formData.departureDate}
                            onChange={handleChange} required className="w-full px-4 py-3 border rounded-lg" />
                    </div>

                    {/* Return Date */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Return Date</label>
                        <input type="date" name="returnDate" value={formData.returnDate}
                            onChange={handleChange} className="w-full px-4 py-3 border rounded-lg" />
                    </div>

                    {/* Passengers */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Number of Passengers *</label>
                        <input type="number" name="passengers" value={formData.passengers} onChange={handleChange}
                            required className="w-full px-4 py-3 border rounded-lg" />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Contact Email *</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange}
                            required className="w-full px-4 py-3 border rounded-lg" placeholder="example@mail.com" />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Contact Phone *</label>

                        <div className="flex gap-2">
                            <select name="phoneCode" value={formData.phoneCode} onChange={handleChange}
                                className="px-3 py-3 border rounded-lg bg-gray-50">
                                {countryCodes.map((item) => (
                                    <option key={item.code} value={item.code}>
                                        {item.code} ({item.country})
                                    </option>
                                ))}
                            </select>

                            <input type="number" name="phone" value={formData.phone} onChange={handleChange}
                                required className="w-full px-4 py-3 border rounded-lg" placeholder="9800000000" />
                        </div>
                    </div>

                    {/* Lead Source */}
                    <div>
                        <label className="block text-sm font-medium mb-2">Lead Source *</label>
                        <select name="leadSource" value={formData.leadSource} onChange={handleChange}
                            required className="w-full px-4 py-3 border rounded-lg">
                            <option value="">Select Lead Source</option>
                            <option value="facebook">Facebook</option>
                            <option value="instagram">Instagram</option>
                            <option value="google">Google</option>
                            <option value="website">Website</option>
                            <option value="referral">Referral</option>
                            <option value="tiktok">TikTok</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">Message (Optional)</label>
                        <textarea name="message" value={formData.message} onChange={handleChange}
                            rows={5} className="w-full px-4 py-3 border rounded-lg resize-none"
                            placeholder="Write your message..." />
                    </div>

                    {/* Status */}
                    {submitStatus.type && (
                        <div className={`md:col-span-2 p-4 rounded-lg ${
                            submitStatus.type === "success"
                                ? "bg-green-50 text-green-800"
                                : "bg-red-50 text-red-800"
                        }`}>
                            {submitStatus.message}
                        </div>
                    )}

                    {/* Button */}
                    <div className="md:col-span-2">
                        <button type="submit" disabled={isSubmitting}
                            className="w-full bg-[#54766c] hover:bg-[#289675] text-white font-semibold py-3 px-6 rounded-lg disabled:opacity-50">
                            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Contact;
