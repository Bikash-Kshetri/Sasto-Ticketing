const Contact = require("../models/contact");

exports.submitInquiry = async (req, res) => {
    try {
        console.log("Received Data:", req.body);

        const newInquiry = new Contact(req.body);
        await newInquiry.save();

        return res.status(201).json({
            success: true,
            message: "Inquiry submitted successfully",
        });
    } catch (error) {
        console.error("Submit Error:", error);
        return res.status(500).json({
            success: false,
            message: "Server error while submitting inquiry",
        });
    }
};
