import React from 'react';
import { BookOpen, Video, Archive } from 'lucide-react';

export function Resources() {
  return (
    <section id="resources" className="py-20 bg-emerald-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12">Genealogy Resources</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Video className="w-10 h-10 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Video Tutorials</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Getting Started Guide</li>
              <li>• Advanced Tree Building</li>
              <li>• Research Techniques</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BookOpen className="w-10 h-10 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Research Tips</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• Interview Techniques</li>
              <li>• Document Analysis</li>
              <li>• Historical Context</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Archive className="w-10 h-10 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Public Archives</h3>
            <ul className="space-y-2 text-gray-600">
              <li>• National Archives</li>
              <li>• Census Records</li>
              <li>• Historical Newspapers</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}