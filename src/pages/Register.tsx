import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import RadioButton from "../components/RadioButton";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle registration
    navigate("/account");
  };

  return (
    <AuthLayout>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <div className="text-left">
          <h1 className="text-2xl font-semibold text-gray-900">
            Create your PopX account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <InputField
            id="fullName"
            name="fullName"
            label="Full Name"
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <InputField
            id="phoneNumber"
            name="phoneNumber"
            label="Phone number"
            placeholder="Marry Doe"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />

          <InputField
            id="email"
            name="email"
            type="email"
            label="Email address"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <InputField
            id="password"
            name="password"
            type="password"
            label="Password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <InputField
            id="companyName"
            name="companyName"
            label="Company name"
            placeholder="Marry Doe"
            value={formData.companyName}
            onChange={handleChange}
          />

          <div className="mt-4">
            <label className="input-label">
              Are you an Agency?
              <span className="text-purple">*</span>
            </label>
            <div className="radio-container">
              <RadioButton
                id="agency-yes"
                name="isAgency"
                value="yes"
                label="Yes"
                checked={formData.isAgency === "yes"}
                onChange={handleChange}
              />
              <RadioButton
                id="agency-no"
                name="isAgency"
                value="no"
                label="No"
                checked={formData.isAgency === "no"}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="pt-6">
            <Button type="submit" fullWidth>
              Create Account
            </Button>
          </div>
        </form>
      </motion.div>
    </AuthLayout>
  );
};

export default Register;
