const User = require("../models/User");
const OTP = require("../models/OTP");
const mailSender = require("../utils/mailSender");
const passwordUpdated= require("../mail/templates/passwordUpdate")
const bcrypt = require("bcrypt");

exports.resetPassword = async (req, res) => {
	try {
		const { password, confirmPassword, otp, email } = req.body;

		if(!otp|| !password || !confirmPassword)
			return res.status(401).json({
				success: false,
				message: "Fill all required fields",
			});

		if (confirmPassword !== password) {
			return res.status(401).json({
				success: false,
				message: "Password and Confirm Password does not match",
			});
		}
		const userDetails = await User.findOne({ email: email });

		if (!userDetails) {
			return res.status(404).json({
				success: false,
				message: "User is not registered",
			});
		}

		const fetchedOtp = await OTP.findOne({ email: email });

		if(otp!= fetchedOtp.otp)
			return res.status(401).json({
				success: false,
				message: "Invalid OTP",
			});
	
		const encryptedPassword = await bcrypt.hash(password, 10);
		
		userDetails.password=encryptedPassword;
		await userDetails.save();
		await mailSender(email,"Password updated successfully",passwordUpdated(email,userDetails.firstName));

		res.json({
			success: true,
			message: `Password Reset Successful`,
		});
	} catch (error) {
		return res.status(500).json({
			error: error.message,
			success: false,
			message: `Error while updating the Password`,
		});
	}
};