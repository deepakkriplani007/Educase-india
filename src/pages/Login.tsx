import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle authentication
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
            Signin to your PopX account
          </h1>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 pt-6">
          <InputField
            id="email"
            name="email"
            type="email"
            label="Email Address"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <InputField
            id="password"
            name="password"
            type="password"
            label="Password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <div className="pt-4">
            <Button
              type="submit"
              fullWidth
              className="bg-gray-300 text-white hover:bg-gray-400"
              disabled={!formData.email || !formData.password}
            >
              Login
            </Button>
          </div>
        </form>
      </motion.div>
    </AuthLayout>
  );
};

export default Login;
