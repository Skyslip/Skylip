import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1582738412145-b69b54767335?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-serif text-white mb-6">
            Discover Your Roots
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Create, preserve, and share your family's legacy through beautifully crafted family trees.
            Uncover the stories that make your heritage unique.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg flex items-center space-x-2 transition-colors">
            <span>Start Your Family Tree</span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}