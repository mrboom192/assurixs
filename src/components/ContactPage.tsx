import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Label } from "@/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import { Card, CardContent } from "@/components/card";
import { toast } from "sonner";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const industries = [
    "Pharmacy",
    "Medical/Dental Practice",
    "Life Science/Research",
    "Restaurant/Food Service",
    "Commercial Real Estate",
    "Professional Services",
    "Other",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create mailto link with form data
    const subject = `Quote Request from ${formData.name} - ${formData.company}`;
    const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Industry: ${formData.industry}

Message:
${formData.message}
    `.trim();

    const mailtoLink = `mailto:ains@assurix.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open mailto link
    window.location.href = mailtoLink;

    // Show success message
    setTimeout(() => {
      toast.success(
        "Quote request prepared! Your email client should open shortly."
      );
      setIsSubmitting(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        industry: "",
        message: "",
      });
    }, 1000);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#2B2E4A] via-[#2C4A7C] to-[#5A9F3F] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMCAyNGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl mb-6">Get Your Free Quote</h1>
            <p className="text-xl text-blue-100">
              Let&apos;s discuss your insurance needs and find the best coverage
              at the right price
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="mb-6">Contact Information</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#C9A227] to-[#5A9F3F] text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="mb-1">Phone</h3>
                        <a
                          href="tel:714-729-0500"
                          className="text-primary hover:underline"
                        >
                          714-729-0500
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          24/7 Support Available
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#5A9F3F] to-[#2C4A7C] text-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="mb-1">Email</h3>
                        <a
                          href="mailto:ains@assurix.com"
                          className="text-primary hover:underline break-all"
                        >
                          ains@assurix.com
                        </a>
                        <p className="text-sm text-muted-foreground mt-1">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="mb-1">Location</h3>
                        <p className="text-muted-foreground">
                          3333 S. Brea Canyon Rd., Suite 116
                          <br />
                          Diamond Bar, CA 91765
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-100 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="mb-1">Support Hours</h3>
                        <p className="text-muted-foreground">
                          Available 24/7
                          <br />
                          We&apos;re here when you need us
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-8">
                  <h2 className="mb-6">Request a Quote</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleChange("email", e.target.value)
                          }
                          required
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleChange("phone", e.target.value)
                          }
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) =>
                            handleChange("company", e.target.value)
                          }
                          required
                          placeholder="Your Company LLC"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="industry">Industry *</Label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) =>
                          handleChange("industry", value)
                        }
                        required
                      >
                        <SelectTrigger id="industry">
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          {industries.map((industry) => (
                            <SelectItem key={industry} value={industry}>
                              {industry}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message">
                        Tell Us About Your Insurance Needs
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleChange("message", e.target.value)
                        }
                        placeholder="Please describe your current coverage, what you're looking for, or any specific concerns..."
                        rows={6}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {isSubmitting ? "Preparing..." : "Request Quote"}
                    </Button>

                    <p className="text-sm text-muted-foreground text-center">
                      By submitting this form, you agree to be contacted by
                      Assurix Insurance Services regarding your quote request.
                      We respect your privacy and will never share your
                      information.
                    </p>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="mb-3">What Happens Next?</h3>
                <ol className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">1.</span>
                    <span>
                      We&apos;ll review your information and reach out within 24
                      hours
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">2.</span>
                    <span>
                      Schedule a brief consultation to understand your specific
                      needs
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">3.</span>
                    <span>Receive customized quotes from A-rated carriers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-semibold text-primary">4.</span>
                    <span>
                      Compare options and finalize coverage that fits your
                      budget
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
