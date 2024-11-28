import React from 'react';
import { TreePine } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-emerald-800 to-emerald-600 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TreePine size={32} className="text-emerald-200" />
            <h1 className="text-2xl font-serif">FamilyRoots</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#features" className="hover:text-emerald-200 transition-colors">Features</a></li>
              <li><a href="#resources" className="hover:text-emerald-200 transition-colors">Resources</a></li>
              <li><a href="#contact" className="hover:text-emerald-200 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}