import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:781646336" className="hover:text-blue-400">781 646 336</a>
              </p>
              <p className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:meble.zibi@wp.pl" className="hover:text-blue-400">
                  meble.zibi@wp.pl
                </a>
              </p>
              <p className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Bochenka 3, Trzebnica</span>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Obszar działania</h3>
            <p>Wrocław i okolice</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">O nas</h3>
            <p>Od 28 lat zajmuję się montażem i produkcją mebli, łącząc rzemiosło, precyzję i nowoczesne technologie, by tworzyć trwałe i funkcjonalne rozwiązania.</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Meble na wymiar. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
}