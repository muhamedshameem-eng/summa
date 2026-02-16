
function About() {


  return (
 <div className="pt-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">Crafting Confidence From the Ground Up</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            We are more than just a shoe store. We are a collective of dreamers, designers, and athletes dedicated to movement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative h-[600px] overflow-hidden rounded-2xl shadow-2xl">
            <img 
              src="https://picsum.photos/seed/about_shoe_craft/800/1000" 
              alt="Shoe Craftsmanship" 
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" 
            />
          </div>
          <div className="space-y-8">
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Our Story</span>
              <h3 className="text-3xl font-serif font-bold text-gray-900 mt-2 mb-4">Founded in 2026</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                At Sole & Soul, we believe that the right pair of shoes can change your entire day. 
                Our mission is to bridge the gap between high-performance athletic wear 
                and everyday luxury.
              </p>
            </div>
            
            <p className="text-gray-600 leading-relaxed text-lg">
              Every stitch is intentional, every material selected for durability and comfort. 
              Whether you're running a marathon or running a meeting, we support your journey.
              We work with artisanal factories that value fair wages and sustainable practices.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
               <div>
                  <h4 className="text-4xl font-bold text-gray-900 mb-1">2k+</h4>
                  <p className="text-gray-500">Happy Customers</p>
               </div>
               <div>
                  <h4 className="text-4xl font-bold text-gray-900 mb-1">30+</h4>
                  <p className="text-gray-500">Unique Designs</p>
               </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-gray-100 rounded-3xl p-12 md:p-10">
          <h2 className="text-3xl font-serif font-bold text-gray-1200 mb-12 text-center underline">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-bold mb-4">Innovation First</h4>
              <p className="text-gray-600">We constantly experiment with new materials and ergonomic designs to push the boundaries of footwear.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Sustainable Future</h4>
              <p className="text-gray-600">We are committed to reducing our carbon footprint and using recycled materials whenever possible.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Customer Obsession</h4>
              <p className="text-gray-600">Your comfort is our priority. We listen to feedback and continuously improve our products.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}
export default About