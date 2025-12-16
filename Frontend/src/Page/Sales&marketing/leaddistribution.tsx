import React, { useState, useEffect } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Form, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from "axios";

interface LeadInfo {
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  source?: string;
}

interface TravelInquiryFormProps {
  leadInfo?: LeadInfo;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  departureCity: string;
  destinationCity: string;
  departureDate: string;
  returnDate: string;
  passengers: string;
  passengerNames: string;
  leadSource: string;
  message: string;
  passport: File | null;
}

const TravelInquiryForm: React.FC<TravelInquiryFormProps> = ({ leadInfo }) => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    departureCity: "",
    destinationCity: "",
    departureDate: "",
    returnDate: "",
    passengers: "",
    passengerNames: "",
    leadSource: "",
    message: "",
    passport: null,
  });

  // ✅ Auto-fill safely
  useEffect(() => {
    if (leadInfo) {
      setFormData((prev) => ({
        ...prev,
        name: leadInfo.name ?? "",
        email: leadInfo.email ?? "",
        phone: leadInfo.phone ?? "",
        inquiryType: leadInfo.inquiryType ?? "",
        leadSource: leadInfo.source ?? "",
      }));
    }
  }, [leadInfo]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData((prev) => ({
        ...prev,
        passport: e.target.files![0],
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        data.append(key, value);
      }
    });

    await axios.post("http://localhost:5001/api/inquiries/add", data);

    alert("Travel Inquiry Submitted Successfully");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 shadow rounded mt-5"
      style={{ maxWidth: "650px", margin: "auto" }}
    >
      <h4 className="text-center mb-4">✈️ Travel Inquiry Details</h4>

      <Form onSubmit={handleSubmit}>
        <Form.Control
          className="mb-3"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          required
        />

        <Form.Select
          className="mb-3"
          name="inquiryType"
          value={formData.inquiryType}
          onChange={handleChange}
          required
        >
          <option value="">Select Inquiry Type</option>
          <option value="Flight">Flight</option>
          <option value="Visa">Visa</option>
          <option value="Tour Package">Tour Package</option>
        </Form.Select>

        <Form.Control className="mb-3" name="departureCity" placeholder="Departure City" onChange={handleChange} />
        <Form.Control className="mb-3" name="destinationCity" placeholder="Destination City" onChange={handleChange} />

        <Form.Control className="mb-3" type="date" name="departureDate" onChange={handleChange} />
        <Form.Control className="mb-3" type="date" name="returnDate" onChange={handleChange} />

        <Form.Control className="mb-3" name="passengers" placeholder="No. of Passengers" onChange={handleChange} />
        <Form.Control className="mb-3" name="passengerNames" placeholder="Passenger Names" onChange={handleChange} />

        <Form.Control className="mb-3" type="email" name="email" value={formData.email} readOnly />
        <Form.Control className="mb-3" name="phone" value={formData.phone} readOnly />

        <Form.Control className="mb-3" name="leadSource" placeholder="Lead Source" onChange={handleChange} />

        <Form.Control className="mb-3" type="file" onChange={handleFileChange} />

        <Form.Control
          as="textarea"
          rows={3}
          className="mb-3"
          name="message"
          placeholder="Additional Message"
          onChange={handleChange}
        />

        <Button type="submit" className="w-100" style={{ background: "#5CC9ED", border: "none" }}>
          Submit Inquiry
        </Button>
      </Form>
    </motion.div>
  );
};

export default TravelInquiryForm;
