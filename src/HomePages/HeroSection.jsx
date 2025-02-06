import React from 'react';

function HeroSection() {
  return (
    <section 
      className="relative h-96 bg-cover bg-center" 
      style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/020/484/779/large_2x/banner-with-happy-multiracial-families-with-kids-flat-illustration-international-family-day-and-people-diversity-concept-multi-ethnic-family-of-parents-and-children-free-vector.jpg)', backgroundSize: 'cover' }}
    >
      {/* Overlay to improve text visibility */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center text-white py-32 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to Our Adoption Center</h1>
        <p className="text-xl mb-6">Find your perfect companion and create a forever family.</p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
          Start Your Journey
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
