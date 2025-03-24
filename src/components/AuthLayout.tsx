import React from "react";
import { motion } from "framer-motion";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-full bg-gray-50 flex flex-col">
      <motion.div
        className="flex-1 flex flex-col max-w-md w-full mx-auto p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AuthLayout;
