const FeaturesSection = () => {
    const features = [
      {
        icon: "🚀",
        title: "High Performance",
        description: "Experience smooth and lag-free VR interactions."
      },
      {
        icon: "👀",
        title: "Crystal Clear Display",
        description:
          "See every detail with our high-resolution VR display technology."
      },
      {
        icon: "🎮",
        title: "Intuitive Controls",
        description:
          "Effortlessly navigate virtual worlds with our easy-to-use controls."
      },
      {
        icon: "💽",
        title: "Cutting edge hardware",
        description: "Custom made processor and vision processing unit"
      }
    ];
  
    return (
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Key Features
          </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-4 border rounded-md">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;
  