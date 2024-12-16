import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    city: "",
    state: "",
    country: "",
    preferredLanguage: "English",
    preferredContact: "Phone Call",
    preferredTime: "",
    marketingConsent: false,
    termsConsent: false,
    privacyConsent: false,
  });

  const [passwordStrength, setPasswordStrength] = useState("");
  const [files, setFiles] = useState([]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "password") {
      const strength = value.length > 8 ? "Strong" : value.length > 5 ? "Medium" : "Weak";
      setPasswordStrength(strength);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.termsConsent || !formData.privacyConsent) {
      alert("You must agree to the Terms & Conditions and Privacy Policy.");
      return;
    }

    localStorage.setItem("signUpData", JSON.stringify(formData)); // Save to local storage
    alert("Form data saved successfully!");
    console.log("Saved Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <form
        className="bg-white shadow-md rounded-md p-6 max-w-2xl w-full"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>

        {/* Basic Information */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              className="border rounded w-full px-3 py-2"
              required
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className="block font-medium mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              className="border rounded w-full px-3 py-2"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            className="border rounded w-full px-3 py-2"
            required
            placeholder="+1 123-456-7890"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            className="border rounded w-full px-3 py-2"
            required
            placeholder="example@mail.com"
            onChange={handleInputChange}
          />
        </div>

        {/* Password Fields in Two Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              className="border rounded w-full px-3 py-2"
              required
              onChange={handleInputChange}
            />
            <p className="text-sm mt-1">
              Password Strength: <span className="font-medium">{passwordStrength}</span>
            </p>
          </div>
          <div>
            <label className="block font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              className="border rounded w-full px-3 py-2"
              required
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Appointment Preferences */}
        <h2 className="text-xl font-semibold mt-6 mb-4">Appointment Preferences</h2>
        <div className="mb-4">
          <label className="block font-medium mb-1">Preferred Language</label>
          <select
            name="preferredLanguage"
            className="border rounded w-full px-3 py-2"
            onChange={handleInputChange}
          >
            <option>English</option>
            <option>Arabic</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Preferred Contact Method</label>
          <div className="flex gap-4">
            <label>
              <input
                type="radio"
                name="preferredContact"
                value="Phone Call"
                className="mr-2"
                checked={formData.preferredContact === "Phone Call"}
                onChange={handleInputChange}
              />
              Phone Call
            </label>
            <label>
              <input
                type="radio"
                name="preferredContact"
                value="SMS"
                className="mr-2"
                onChange={handleInputChange}
              />
              SMS
            </label>
            <label>
              <input
                type="radio"
                name="preferredContact"
                value="Email"
                className="mr-2"
                onChange={handleInputChange}
              />
              Email
            </label>
          </div>
        </div>

        {/* Consent */}
        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              name="marketingConsent"
              className="mr-2"
              onChange={handleInputChange}
            />
            Subscribe to Newsletter
          </label>
        </div>
        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              name="termsConsent"
              required
              className="mr-2"
              onChange={handleInputChange}
            />
            I agree to the <a href="/terms" className="text-blue-600 underline">Terms & Conditions</a>
          </label>
        </div>
        <div className="mb-4">
          <label>
            <input
              type="checkbox"
              name="privacyConsent"
              required
              className="mr-2"
              onChange={handleInputChange}
            />
            I agree to the <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default SignUp;