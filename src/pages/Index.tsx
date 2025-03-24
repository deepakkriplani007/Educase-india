import React from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import Button from "../components/Button";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="flex flex-col justify-center min-h-full">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-left">
            <h1 className="text-2xl font-semibold text-gray-900">
              Welcome to PopX
            </h1>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="space-y-3 pt-4">
            <Button fullWidth onClick={() => navigate("/register")}>
              Create Account
            </Button>
            <Button
              variant="secondary"
              fullWidth
              onClick={() => navigate("/login")}
            >
              Already Registered? Login
            </Button>
          </div>
        </motion.div>
      </div>
    </AuthLayout>
  );
};

export default Index;
