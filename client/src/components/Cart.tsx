import React from 'react';
import { useCart } from '../context/CartContext';
import { X } from 'lucide-react';

const Cart: React.FC = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    totalItems,
    totalPrice,
    clearCart,
  } = useCart();

  const handleCheckout = () => {
    alert('Thank you for your purchase! This is a mock checkout.');
    clearCart();
  };

  if (totalItems === 0) {
    return (
      <div className="fixed right-4 top-4 bg-white p-4 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">Your Cart</h2>
        <p className="text-gray-500">Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className="fixed right-4 top-4 bg-white p-4 rounded-lg shadow-lg w-80">
      <h2 className="text-xl font-bold mb-4">Your Cart ({totalItems} items)</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center space-x-4">
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:text-red-700"
            >
              <X size={20} />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between font-bold">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button
          onClick={handleCheckout}
          className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart; 