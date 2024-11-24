
const Pricing = () => {
  const plans = [
    {
      title: "Hobby",
      price: "$5",
      subtitle: "For hobbyist developers looking to showcase their side projects.",
      features: [
        "Resource usage - Includes $5 of usage monthly",
        "8 GB RAM / 8 vCPU per service",
        "Single developer workspace",
        "Community support",
        "7-day log history",
        "US-West region",
      ],
      buttonText: "Sign Up for Gist",
      buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
    },
    {
      title: "Pro",
      price: "$20",
      subtitle:
        "For professional developers and teams shipping to production.",
      features: [
        "Resource usage",
        "All Hobby plan features and:",
        "32 GB RAM / 32 vCPU per service",
        "Multiple developer workspace",
        "Gist Support (1 Business Day)",
        "30-day log history",
        "Global regions",
      ],
      buttonText: "Deploy with Pro",
      buttonStyle: "bg-green-600 hover:bg-green-700 text-white",
    },
    {
      title: "Enterprise",
      price: "Custom Pricing",
      subtitle:
        "For businesses with large instance, SLA, and/or compliance needs.",
      features: [
        "Starting at $1,000 per month",
        "All Hobby and Pro plan features and:",
        "Up to 2 TB RAM / 112 vCPU per service",
        "Unlimited team seats included",
        "Support SLAs available",
        "90-day log history available",
        "HIPAA compliance available",
      ],
      buttonText: "Contact Us",
      buttonStyle: "bg-yellow-600 hover:bg-yellow-700 text-white",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <div className="text-center py-20 px-8 text-white">
        <h1 className="text-4xl font-bold mb-4">
          Plans that empower you and your team to ship without friction.
        </h1>
        <p className="text-gray-400">
          Choose a plan that works best for your needs, from hobbyist projects
          to enterprise-level solutions.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transform transition-all"
          >
            <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
            <h3 className="text-3xl font-bold mb-2">{plan.price}</h3>
            <p className="text-gray-400 mb-6">{plan.subtitle}</p>
            <ul className="mb-6 space-y-3">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-gray-300"
                >
                  <span className="text-blue-500">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 px-4 rounded-lg ${plan.buttonStyle}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Usage Pricing */}
      <div className="mt-16 max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Usage Pricing
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Pick a plan, then pay for the resources you use.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Memory</h3>
            <p className="text-gray-300">$10 Per GB / month</p>
            <p className="text-gray-400 text-sm">$0.000231 / GB / minute</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">CPU</h3>
            <p className="text-gray-300">$20 Per vCPU core / month</p>
            <p className="text-gray-400 text-sm">$0.000463 / vCPU / minute</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">Network Egress</h3>
            <p className="text-gray-300">$0.10 Per GB used</p>
            <p className="text-gray-400 text-sm">$0.000000095367432 / KB</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 py-8 px-4">
        <p className="text-gray-400">
          Goodbye, over-provisioning! On Gist, usage-based pricing means you
          only pay for the compute you need.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
