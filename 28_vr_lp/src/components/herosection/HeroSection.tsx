
const HeroSection = () => {
  return (
    <section className="bg-blue-700 text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between">
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Experience Virtual Reality Like Never Before
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Immerse yourself in a world of possibilities with our cutting-edge
            VR headset.
          </p>
          <button className="bg-white text-blue-700 py-2 px-6 rounded-full hover:bg-gray-300">
            Learn More
          </button>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <img
            src="https://i.imgur.com/JC2p8tK.jpg"
            alt="VR Headset"
            className="mx-auto md:mx-4 w-full md:w-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;