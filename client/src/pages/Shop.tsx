import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import Cart from '../components/Cart';
import { X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

const sampleProducts: Product[] = [
  {
    id: 1,
    name: "Premium T-Shirt",
    price: 29.99,
    description: "High-quality cotton t-shirt with a comfortable fit. Perfect for everyday wear.",
    imageUrl: "/images/tshirt.jpg"
  },
  {
    id: 2,
    name: "Designer Hoodie",
    price: 59.99,
    description: "Comfortable and stylish hoodie made from premium materials. Features a kangaroo pocket and adjustable drawstrings.",
    imageUrl: "/images/hoodie.jpg"
  },
  {
    id: 3,
    name: "Classic Cap",
    price: 24.99,
    description: "Adjustable baseball cap with a curved brim. Available in multiple colors.",
    imageUrl: "/images/cap.jpg"
  },
  {
    id: 4,
    name: "Slim Fit Jeans",
    price: 49.99,
    description: "Modern slim fit jeans with a comfortable stretch. Perfect for any casual occasion.",
    imageUrl: "/images/jeans.jpg"
  },
  {
    id: 5,
    name: "Leather Wallet",
    price: 39.99,
    description: "Genuine leather wallet with multiple card slots and a coin pocket.",
    imageUrl: "/images/wallet.jpg"
  },
  {
    id: 6,
    name: "Smart Watch",
    price: 199.99,
    description: "Feature-rich smartwatch with fitness tracking and notifications.",
    imageUrl: "/images/watch.jpg"
  }
];

const Shop: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center">Our Shop</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div 
                className="aspect-w-16 aspect-h-9 bg-gray-200 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full p-6 relative">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  className="w-full md:w-1/2 h-64 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">{selectedProduct.name}</h2>
                  <p className="text-gray-600 mb-4">{selectedProduct.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${selectedProduct.price}</span>
                    <button
                      onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <Cart />
      </motion.div>
    </div>
  );
};

export default Shop; 