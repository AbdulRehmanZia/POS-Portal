import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "5,000",
      products: "Up to 100",
      categories: "Up to 10",
      members: "Up to 3",
      features: ["Products + Categories", "Basic Reports"],
      highlighted: false,
    },
    {
      name: "Standard",
      price: "10,000",
      products: "Up to 1,000",
      categories: "Up to 100",
      members: "Up to 7",
      features: [
        "Products + Categories",
        "Members Management",
        "Advanced Reporting",
        "Payment Processing",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "15,000",
      products: "Unlimited",
      categories: "Unlimited",
      members: "Unlimited",
      features: [
        "All Standard features",
        "Advanced Analytics",
        "Priority Support",
        "Custom Integrations",
      ],
      highlighted: false,
    },
  ];

  return (
    <section className="py-16 bg-card/20" id="pricing">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3 tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your business. All plans include
            our core POS features, with no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-md border transition-all duration-300
                ${
                  plan.highlighted
                    ? "border-primary/50 bg-card ring-2 ring-primary/20"
                    : "border-border/50 bg-background"
                }
                hover:shadow-lg hover:shadow-primary/5`}
            >
              <div
                className={`p-6 text-center border-b ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-muted/50 text-foreground border-border"
                }`}
              >
                <h3 className="text-xl font-bold mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center mb-1">
                  <span className="text-3xl font-bold">₨{plan.price}</span>
                </div>
                <p className="text-xs opacity-80">/month</p>
              </div>
              
              <div className="p-6">
                <div className="mb-2 text-sm text-muted-foreground text-center">
                  Perfect for {plan.name.toLowerCase()} businesses
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Products: {plan.products}</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Categories: {plan.categories}</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                    <span>Members: {plan.members}</span>
                  </li>
                  
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                  size="sm"
                >
                  <a href="#contact" className="flex items-center justify-center text-sm">
                    Get Started <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm">
            Need a custom plan?{" "}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;