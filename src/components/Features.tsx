import React from 'react';
import { Users, Share2, Database, Palette } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Interactive Tree Builder',
    description: 'Easily add and connect family members with our intuitive drag-and-drop interface.'
  },
  {
    icon: Share2,
    title: 'Share Your History',
    description: 'Generate shareable links or export your family tree for printing and sharing.'
  },
  {
    icon: Database,
    title: 'Data Import',
    description: 'Import existing genealogy data from GEDCOM files to start your tree instantly.'
  },
  {
    icon: Palette,
    title: 'Customization',
    description: 'Personalize your family tree with custom themes, colors, and relationship types.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Powerful Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}