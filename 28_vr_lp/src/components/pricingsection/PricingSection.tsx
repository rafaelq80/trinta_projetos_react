const PricingSection = () => {
    const pricingPlans = [
      {
        name: "Basic",
        price: 49.99,
        features: ["VR Experience", "Limited Content"]
      },
      {
        name: "Standard",
        price: 79.99,
        features: ["Full Content Access", "Interactive Games"]
      },
      {
        name: "Premium",
        price: 129.99,
        features: ["Exclusive Content", "Priority Support"]
      }
    ];
    return (
      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
            Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="p-4 border rounded-md">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-3xl font-bold mb-4">${plan.price}</p>
                <ul className="text-center">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-700 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-600">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PricingSection;