import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Resources } from './components/Resources';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Resources />
        <Contact />
      </main>
      <footer className="bg-emerald-900 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} FamilyRoots. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;