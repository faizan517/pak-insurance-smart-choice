import React, { useState } from 'react';
import { ArrowLeft, Info, Building2, Calendar, Shield, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const PlanDetails = () => {
  const navigate = useNavigate();
  const [maternityCover, setMaternityCover] = useState(false);

  const planData = {
    provider: "EFU Life",
    planName: "Sehat Shield - Bronze",
    hospitalizationCover: "Rs. 1.5 lac per person",
    roomType: "Semi-Pvt",
    hospitals: "290 Hospitals",
    dailyRoomLimit: "Semi-Pvt",
    cashlessOptions: "290 Hospitals",
    sitTests: "3 SIT",
    daycareSurgeries: "49 Daycare",
    premium: "Rs. 13,642",
    periodicity: "Premium/Year"
  };

  const medicalBenefits = [
    { title: "ICU / CCU", status: "Covered", info: true },
    { title: "Ambulance Services Coverage", status: "Covered", info: true },
    { title: "Additional Limits for Accidental Emergencies", status: "Covered", info: true },
    { title: "Day Care Procedures", status: "Covered", info: true },
    { title: "Maternity", status: "Pay additional Rs 15,800 and get covered for up to Rs 100,000", info: true },
    { title: "Freelook Period", status: "14 days", info: true },
    { title: "Waiting Period", status: "15 days", info: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-white">
        <div className="container mx-auto px-4 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => navigate(-1)}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to plans
          </Button>
        </div>
      </div>

      {/* Plan Overview */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Plan Details */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  {/* Company Logo */}
                  <div className="w-16 h-16 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold">
                    <span className="text-xs">EFU<br/>LIFE</span>
                  </div>
                  
                  {/* Plan Info */}
                  <div className="flex-1">
                    <h1 className="text-xl font-bold text-foreground mb-2">
                      {planData.planName}
                    </h1>
                    
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground mb-1">
                          <span>Hospitalization Cover</span>
                          <Info className="h-3 w-3" />
                        </div>
                        <div className="font-medium">{planData.hospitalizationCover}</div>
                        <div className="text-muted-foreground">{planData.roomType}</div>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground mb-1">
                          <span>Daily Room & Board Limit</span>
                          <Info className="h-3 w-3" />
                        </div>
                        <div className="font-medium">{planData.dailyRoomLimit}</div>
                      </div>
                      
                      <div>
                        <div className="flex items-center gap-1 text-muted-foreground mb-1">
                          <span>Cashless Treatment at</span>
                          <Info className="h-3 w-3" />
                        </div>
                        <div className="font-medium">{planData.hospitals}</div>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
                      <div>
                        <div className="text-muted-foreground">Special Investigation Tests</div>
                        <div className="font-medium">{planData.sitTests}</div>
                      </div>
                      
                      <div>
                        <div className="text-muted-foreground">Daycare Surgeries</div>
                        <div className="font-medium">{planData.daycareSurgeries}</div>
                      </div>
                    </div>
                    
                    {/* Add-on Option */}
                    <div className="mt-4 p-3 bg-muted rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Checkbox 
                          id="maternity"
                          checked={maternityCover}
                          onCheckedChange={(checked) => setMaternityCover(checked === true)}
                        />
                        <label htmlFor="maternity" className="text-sm font-medium">
                          Add Maternity Cover for Rs. 15600
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tabs Section */}
            <Tabs defaultValue="benefits" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="benefits">Medical Benefits</TabsTrigger>
                <TabsTrigger value="documents">Policy Documents</TabsTrigger>
                <TabsTrigger value="claims">Claim Process</TabsTrigger>
                <TabsTrigger value="features">More Features</TabsTrigger>
              </TabsList>

              <TabsContent value="benefits" className="mt-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {medicalBenefits.map((benefit, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-sm">{benefit.title}</h3>
                            {benefit.info && <Info className="h-3 w-3 text-muted-foreground" />}
                          </div>
                          <div className="mt-1">
                            {benefit.status === "Covered" ? (
                              <Badge variant="secondary" className="bg-green-100 text-green-800">
                                Covered
                              </Badge>
                            ) : (
                              <div className="text-sm text-muted-foreground">
                                {benefit.status}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="documents" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-8">
                      <Building2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">Policy Documents</h3>
                      <p className="text-muted-foreground">
                        All policy documents will be available after purchase.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="claims" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-8">
                      <Shield className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">Claim Process</h3>
                      <p className="text-muted-foreground">
                        Easy claim process with 24/7 support and cashless facility.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-8">
                      <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">Additional Features</h3>
                      <p className="text-muted-foreground">
                        Explore additional features and benefits of this plan.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Purchase Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {planData.premium}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {planData.periodicity}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  Buy
                </Button>
                <Button variant="outline" className="w-full" size="lg">
                  Enquire Now
                </Button>
                
                <div className="pt-4 border-t space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>Call us: +92-111-123-456</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span>support@ezeeinsure.com</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PlanDetails;