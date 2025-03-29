import React from 'react';
import { Shield, PenTool as Tool, Clock, Award, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  const scrollToCategory = (category: string) => {
    navigate('/realizacje', { state: { scrollTo: category } });
  };

  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-center h-[600px]" 
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Meble na wymiar
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              28 lat doświadczenia w tworzeniu wyjątkowych mebli
            </p>
            <a
              href="/kontakt"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Zapytaj o wycenę
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Dlaczego warto nam zaufać?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-blue-600" />}
              title="28 lat doświadczenia"
              description="Wieloletnie doświadczenie w produkcji i montażu mebli"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-blue-600" />}
              title="Gwarancja jakości"
              description="Najwyższa jakość wykonania i materiałów"
            />
            <FeatureCard
              icon={<Tool className="h-8 w-8 text-blue-600" />}
              title="Profesjonalny montaż"
              description="Fachowy montaż mebli i dodatków"
            />
            <FeatureCard
              icon={<Award className="h-8 w-8 text-blue-600" />}
              title="Zadowoleni klienci"
              description="Setki zadowolonych klientów w regionie"
            />
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nasze projekty
            </h2>
            <p className="text-xl text-gray-600">
              Zobacz przykłady naszych realizacji
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => scrollToCategory('Kuchnie')}
            >
              <img
                src="https://i.imgur.com/0UIu0yV.jpeg"
                alt="Meble kuchenne"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Meble kuchenne</h3>
                  <p>Nowoczesne i funkcjonalne kuchnie na wymiar</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => scrollToCategory('Szafy')}
            >
              <img
                src="https://i.imgur.com/L2FP2ku.png"
                alt="Szafy na wymiar"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Szafy na wymiar</h3>
                  <p>Pojemne szafy i garderoby</p>
                </div>
              </div>
            </div>

            <div 
              className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
              onClick={() => scrollToCategory('Łazienki')}
            >
              <img
                src="https://i.imgur.com/Kw54NTz.jpeg"
                alt="Meble łazienkowe"
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Meble łazienkowe</h3>
                  <p>Eleganckie meble łazienkowe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Opinie naszych klientów
            </h2>
            <p className="text-xl text-gray-600">
              Co mówią o nas zadowoleni klienci
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              text="Profesjonalna obsługa od początku do końca. Kuchnia wykonana perfekcyjnie, zgodnie z projektem. Polecam!"
              author="Anna"
              location="Wrocław"
            />
            <TestimonialCard
              text="Świetna jakość wykonania szafy w sypialni. Materiały najwyższej jakości, a montaż przeprowadzony bardzo sprawnie."
              author="Marek"
              location="Trzebnica"
            />
            <TestimonialCard
              text="Meble łazienkowe wykonane perfekcyjnie. Świetny kontakt i profesjonalne podejście do klienta. Zdecydowanie polecam!"
              author="Katarzyna"
              location="Wrocław"
            />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                O naszej firmie
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  Specjalizujemy się w projektowaniu i wykonaniu mebli na wymiar, dostosowanych do indywidualnych potrzeb klientów. Tworzymy:
                </p>
                <ul className="space-y-2 text-lg text-gray-600">
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span> Kuchnie
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span> Szafy i garderoby
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span> Meble łazienkowe
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 mr-2">✔</span> Zabudowy nietypowe
                  </li>
                </ul>

                <p className="text-lg text-gray-600">
                  Dzięki współpracy z wieloma producentami płyt zapewniamy szeroki wybór kolorów i wzorów, co pozwala na pełną personalizację zamówienia.
                </p>

                <div>
                  <p className="text-lg text-gray-600 mb-2">Stosujemy wysokiej jakości fronty:</p>
                  <ul className="space-y-2 text-lg text-gray-600">
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">🔹</span> Lakierowane (wysoki połysk, mat, półmat)
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">🔹</span> Frezowane, foliowane
                    </li>
                    <li className="flex items-center">
                      <span className="text-blue-600 mr-2">🔹</span> Blaty z litego drewna, fornirowane i inne
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-600">
                  Wszystkie zawiasy i prowadnice szuflad oferujemy w standardzie z cichym domykiem od renomowanych producentów, takich jak Blum, Hettich, Hafele i inni. Okucia posiadają dożywotnią gwarancję producenta.
                </p>

                <div>
                  <p className="text-lg text-gray-600 mb-2">Kompleksowa usługa obejmuje:</p>
                  <ul className="space-y-2 text-lg text-gray-600">
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✅</span> Bezpłatne doradztwo
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✅</span> Wycena i pomiar
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✅</span> Dokładny i czytelny projekt (możliwość wizualizacji na życzenie)
                    </li>
                    <li className="flex items-center">
                      <span className="text-green-600 mr-2">✅</span> Profesjonalny montaż
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-gray-600">
                  Po zakończeniu montażu zapewniamy gwarancję jakości i satysfakcję nawet najbardziej wymagających klientów. Nasza konkurencyjna oferta i profesjonalne podejście sprawiają, że jesteśmy najlepszym wyborem na rynku.
                </p>
              </div>
            </div>
            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-8">
              <img
                src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                alt="Warsztat stolarski"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TestimonialCard({ text, author, location }: { text: string; author: string; location: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-center mb-4">
        <Star className="h-8 w-8 text-yellow-400" />
        <Star className="h-8 w-8 text-yellow-400" />
        <Star className="h-8 w-8 text-yellow-400" />
        <Star className="h-8 w-8 text-yellow-400" />
        <Star className="h-8 w-8 text-yellow-400" />
      </div>
      <p className="text-gray-600 mb-4 italic">"{text}"</p>
      <div className="text-right">
        <p className="text-gray-900 font-semibold">{author}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
}