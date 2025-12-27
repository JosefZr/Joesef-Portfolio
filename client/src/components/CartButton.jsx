import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartButton() {
  const [itemCount, setItemCount] = useState(0); // Replace with actual cart item count logic
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/cart')}
      className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
    >
      <ShoppingCart className="w-5 h-5 text-gray-300" />
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white"
          >
            {itemCount}
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}