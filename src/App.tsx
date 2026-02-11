import { useState } from 'react';
import { Play, DollarSign, Shield, Zap, Check, Mail, MessageCircle } from 'lucide-react';

function App() {
  const [selectedDiscount, setSelectedDiscount] = useState<70 | 80>(70);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    platform: '',
    title: '',
    message: ''
  });

  const platforms = [
    { name: 'Amazon', color: 'from-orange-500 to-yellow-500' },
    { name: 'Prime Video', color: 'from-blue-600 to-cyan-500' },
    { name: 'Google Play', color: 'from-green-500 to-emerald-500' },
    { name: 'iTunes', color: 'from-pink-500 to-rose-500' }
  ];

  const pricingExamples = [
    { original: 5.99, title: 'Movie Rental' },
    { original: 14.99, title: 'Season Pass' },
    { original: 19.99, title: 'Premium Content' }
  ];

  const calculateDiscount = (price: number, discount: 70 | 80) => {
    return (price * discount / 100).toFixed(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Play className="w-8 h-8 text-blue-600 fill-blue-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                StreamSaver
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#pricing" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Pricing</a>
              <a href="#how-it-works" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">How It Works</a>
              <a href="#contact" className="text-slate-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </div>
            <a href="#contact" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105 font-medium shadow-lg shadow-blue-600/30">
              Get Started
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                Save up to 30% on all rentals
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Rent Your Favorite
              <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Movies & Shows
              </span>
              <span className="block">For Less</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Access premium content on Amazon, Prime Video, Google Play, and iTunes
              at 70-80% of the original price. Quality service, incredible savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-semibold text-lg shadow-xl">
                Start Saving Now
              </a>
              <a href="#how-it-works" className="bg-white text-slate-700 px-8 py-4 rounded-full hover:shadow-lg transition-all border-2 border-slate-200 font-semibold text-lg">
                Learn More
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-blue-600 mb-2">70-80%</div>
              <div className="text-slate-600 font-medium">Original Price</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-cyan-600 mb-2">4+</div>
              <div className="text-slate-600 font-medium">Platforms</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-slate-600 font-medium">Support</div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-slate-600 font-medium">Secure</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Supported Platforms
            </h2>
            <p className="text-xl text-slate-600">
              Rent from your favorite streaming services at unbeatable prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <div key={platform.name} className="group">
                <div className={`bg-gradient-to-br ${platform.color} rounded-2xl p-8 text-white text-center transform hover:scale-105 transition-all shadow-xl hover:shadow-2xl`}>
                  <Play className="w-16 h-16 mx-auto mb-4 fill-white" />
                  <h3 className="text-2xl font-bold">{platform.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              See how much you can save with our service
            </p>

            {/* Discount Toggle */}
            <div className="inline-flex bg-white rounded-full p-2 shadow-lg">
              <button
                onClick={() => setSelectedDiscount(70)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  selectedDiscount === 70
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                70% Plan
              </button>
              <button
                onClick={() => setSelectedDiscount(80)}
                className={`px-8 py-3 rounded-full font-semibold transition-all ${
                  selectedDiscount === 80
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                80% Plan
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingExamples.map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{item.title}</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Original Price:</span>
                    <span className="text-slate-400 line-through font-semibold">${item.original}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Your Price:</span>
                    <span className="text-3xl font-bold text-blue-600">
                      ${calculateDiscount(item.original, selectedDiscount)}
                    </span>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-center font-semibold">
                      Save ${(item.original - Number(calculateDiscount(item.original, selectedDiscount))).toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-500 to-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">1. Contact Us</h3>
              <p className="text-slate-600 leading-relaxed">
                Fill out the contact form with the content you want to rent and your preferred platform
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-emerald-500 to-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <DollarSign className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">2. Pay Discounted Price</h3>
              <p className="text-slate-600 leading-relaxed">
                Pay only 70-80% of the original rental price through our secure payment process
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Play className="w-10 h-10 text-white fill-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">3. Enjoy Content</h3>
              <p className="text-slate-600 leading-relaxed">
                Receive access and start watching your favorite movies and shows immediately
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Why Choose Us?
              </h2>
              <p className="text-xl text-blue-100">
                Experience the best in overseas rental services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Genuine Service</h3>
                  <p className="text-blue-100">100% authentic rentals from official platforms</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
                  <p className="text-blue-100">Your payment information is always protected</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Instant Access</h3>
                  <p className="text-blue-100">Get your rentals processed within hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                  <DollarSign className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Best Prices</h3>
                  <p className="text-blue-100">Guaranteed lowest prices on all rentals</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
                  <p className="text-blue-100">Always here to help with any questions</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-3 rounded-lg flex-shrink-0">
                  <Play className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">All Platforms</h3>
                  <p className="text-blue-100">Support for major streaming services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-slate-600">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-slate-700 font-semibold mb-2">Platform</label>
              <select
                required
                value={formData.platform}
                onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
              >
                <option value="">Select a platform</option>
                <option value="amazon">Amazon</option>
                <option value="primevideo">Prime Video</option>
                <option value="googleplay">Google Play</option>
                <option value="itunes">iTunes</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-slate-700 font-semibold mb-2">Content Title</label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                placeholder="Movie or show name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-slate-700 font-semibold mb-2">Additional Details</label>
              <textarea
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                placeholder="Tell us what you'd like to rent and any other details..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Send Request</span>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Play className="w-8 h-8 fill-blue-500 text-blue-500" />
            <span className="text-2xl font-bold">StreamSaver</span>
          </div>
          <p className="text-slate-400 mb-4">
            Your trusted partner for overseas content rentals at unbeatable prices
          </p>
          <p className="text-slate-500 text-sm">
            © 2026 StreamSaver. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
