import React from 'react';
import { Twitch as Kitchen, Bath, DoorClosed, Truck, Hammer, Frame } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Kitchen className="h-12 w-12 text-blue-600" />,
      title: 'Meble kuchenne',
      description: 'Projektujemy i wykonujemy funkcjonalne meble kuchenne dostosowane do Twoich potrzeb i przestrzeni.'
    },
    {
      icon: <Bath className="h-12 w-12 text-blue-600" />,
      title: 'Meble łazienkowe',
      description: 'Tworzymy praktyczne i estetyczne meble łazienkowe, maksymalnie wykorzystując dostępną przestrzeń.'
    },
    {
      icon: <DoorClosed className="h-12 w-12 text-blue-600" />,
      title: 'Szafy na wymiar',
      description: 'Projektujemy szafy i garderoby idealnie dopasowane do Twoich potrzeb i wnętrza.'
    },
    {
      icon: <Hammer className="h-12 w-12 text-blue-600" />,
      title: 'Montaż mebli',
      description: 'Świadczymy profesjonalne usługi montażu mebli z paczek oraz od innych producentów.'
    },
    {
      icon: <Frame className="h-12 w-12 text-blue-600" />,
      title: 'Montaż dodatków',
      description: 'Montujemy karnisze, obrazy i inne elementy wyposażenia wnętrz.'
    },
    {
      icon: <Truck className="h-12 w-12 text-blue-600" />,
      title: 'Przeprowadzki',
      description: 'Oferujemy usługi przeprowadzki mebli, AGD, RTV i innych przedmiotów.'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nasze usługi
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Oferujemy kompleksowe usługi w zakresie mebli na wymiar i nie tylko
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Obszar działania
          </h2>
          <p className="text-lg text-gray-600 text-center">
            Świadczymy usługi na terenie Wrocławia i okolic. Zapewniamy profesjonalną obsługę
            i terminową realizację wszystkich zleceń.
          </p>
        </div>
      </div>
    </div>
  );
}