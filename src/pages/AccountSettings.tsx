import React from "react";
import AuthLayout from "../components/AuthLayout";
import { motion } from "framer-motion";

const AccountSettings: React.FC = () => {
  return (
    <AuthLayout>
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        <h1 className="text-xl font-semibold text-gray-900">
          Account Settings
        </h1>

        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="p-4 flex items-start gap-4">
            <div className="relative">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 bg-purple rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-3 h-3"
                >
                  <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="font-medium text-gray-900">Marry Doe</h2>
              <p className="text-sm text-gray-500">Marry@Gmail.Com</p>
            </div>
          </div>

          <div className="p-4 text-sm text-gray-600">
            <p>
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
          </div>
        </div>
      </motion.div>
    </AuthLayout>
  );
};

export default AccountSettings;
