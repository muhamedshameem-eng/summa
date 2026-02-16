import Carousel1 from '../components/Carousel'
import { Link } from 'react-router'
function Home() {


  return (
    <div>
     
      {/* <div className='hero'>
         <Carousel1 />
      </div> */}

      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden bg-gray-900">
        <img 
          src="https://picsum.photos/seed/picsum/1920/1080 " 
          alt="Hero background" 
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center text-center px-4">
          <div className="max-w-4xl space-y-8">
            <span className="inline-block py-2 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs tracking-widest uppercase font-semibold animate-in fade-in slide-in-from-bottom-5 duration-1000">
              New Collection 2026
            </span>
            <h2 className="text-5xl md:text-8xl font-serif font-bold text-white tracking-tight animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100">
              Walk Your Path.
            </h2>
            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
              Discover the perfect blend of comfort, style, and performance. 
              Engineered for those who never stop moving.
            </p>
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Link 
                to="/product"
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-1000 transition-colors" style={{ textDecoration: 'none' }}
              >
                Shop Collection
              </Link>
              <Link 
                to="/about"
                className="px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors" style={{ textDecoration: 'none' }}
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-serif font-bold text-gray-900">Why Sole & Soul?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto text-3xl mb-6">🚚</div>
              <h4 className="font-bold text-xl mb-3">Free Worldwide Shipping</h4>
              <p className="text-gray-500 leading-relaxed">On all orders over ₹1000. Track your shipment in real-time with our advanced logistics partners.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto text-3xl mb-6">🛡️</div>
              <h4 className="font-bold text-xl mb-3">30-Day Guarantee</h4>
              <p className="text-gray-500 leading-relaxed">Try them on at home. Not happy? Return it within 30 days for a full refund, no questions asked.</p>
            </div>
            <div className="p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mx-auto text-3xl mb-6">🌱</div>
              <h4 className="font-bold text-xl mb-3">Sustainable Materials</h4>
              <p className="text-gray-500 leading-relaxed">We plant a tree for every pair sold. Our packaging is 100% recyclable. Walk with a lighter footprint.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-black text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
             <img src="https://picsum.photos/seed/texture/1000/1000" className="w-full h-full object-cover grayscale" />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Ready to upgrade your step?</h3>
          <p className="text-xl text-gray-400 mb-8">Join thousands of satisfied customers walking on clouds.</p>
          <Link to="/products" className="inline-block px-10 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform " style={{ textDecoration: 'none' }}>
            View All Products
          </Link>
        </div>
      </section>
      
    </div>
  )

}
export default Home