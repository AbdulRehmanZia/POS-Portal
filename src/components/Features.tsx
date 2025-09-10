import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Scan,
  FileText,
  Shield,
  CreditCard 
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "User Authentication",
    description: "Robust role-based access control with admin management and team permissions for secure operations."
  },
  {
    icon: Package,
    title: "Product Management", 
    description: "Add, edit, and organize products into categories while tracking real-time inventory levels."
  },
  {
    icon: ShoppingCart,
    title: "Sales Management",
    description: "Seamless product selection with multiple payment options and detailed sales history tracking."
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Insightful daily sales charts and category-wise distribution for data-driven decisions."
  },
  {
    icon: Scan,
    title: "Barcode Scanning",
    description: "Integrated barcode scanning ensures quick and accurate product lookup and inventory management."
  },
  {
    icon: FileText,
    title: "PDF Invoices",
    description: "Generate professional, downloadable PDF invoices with customizable templates and branding."
  },
  {
    icon: CreditCard,
    title: "Payment Processing",
    description: "Support for multiple payment methods including cash, card, and digital payments."
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Manage staff accounts, permissions, and monitor individual performance metrics."
  }
];

const Features = () => {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Powerful Features for Modern Retail
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Our comprehensive POS system includes everything you need to manage 
            your retail business efficiently and effectively.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-feature transition-all duration-300 md:hover:scale-105 border-border/50 h-full"
            >
              <CardContent className="p-5 sm:p-6 text-center flex flex-col items-center">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-feature rounded-2xl mb-4 group-hover:bg-gradient-hero transition-all duration-300">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;