
import { Card, CardContent } from "@/components/ui/card";

const PartnerLogos = () => {
  const partners = [
    { name: "Jubilee General Insurance", logo: "JGI" },
    { name: "Adamjee Insurance", logo: "AI" },
    { name: "EFU General Insurance", logo: "EFU" },
    { name: "IGI Insurance", logo: "IGI" },
    { name: "TPL Insurance", logo: "TPL" },
    { name: "Pak Qatar Takaful", logo: "PQT" },
    { name: "Askari General Insurance", logo: "AGI" },
    { name: "UBL Insurance", logo: "UBL" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Our Trusted Insurance Partners
          </h2>
          <p className="text-lg text-slate-600">
            We work with Pakistan's leading insurers to bring you the best coverage options
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {partners.map((partner, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow duration-300 border border-slate-200">
              <CardContent className="p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-sm">{partner.logo}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-medium">{partner.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
