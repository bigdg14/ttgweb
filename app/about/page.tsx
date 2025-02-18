import { Award, Users, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function About() {
  const ceoPhotos = [
    {
      src: "/ricarda3.png",
      alt: "CEO in professional business attire",
      caption: "Leading with Vision",
      desc: "Bringing over two decades of financial expertise to guide businesses toward success",
    },
    {
      src: "/ricarda5.png",
      alt: "CEO in modern office setting",
      caption: "Strategic Innovation",
      desc: "Pioneering new approaches to financial services and business growth",
    },
    {
      src: "/ricarda4.png",
      alt: "CEO in business casual setting",
      caption: "Client Partnership",
      desc: "Building lasting relationships through personalized financial guidance",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#947ac0] to-black opacity-90 dark:from-black dark:to-[#947ac0]">
        <div className="absolute inset-0">
          <Image
            src="/boardroom.jpg"
            alt="CEO Leadership"
            width={1920} // Intrinsic width of the image (or an approximation)
            height={1080}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold text-[#e5c888] mb-4">
            Meet Our CEO
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Transforming futures through strategic financial leadership
          </p>
        </div>
      </section>

      {/* CEO Profile Section */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-[#947ac0] dark:text-[#e5c888] mb-6">
              Leadership & Vision
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              As the founder and CEO of TTG Financial Services, our leader
              brings a unique blend of expertise, innovation, and personal
              dedication to every client relationship. With a proven track
              record of helping people achieve their financial goals, she
              continues to drive our company's mission of delivering excellence
              in financial services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {ceoPhotos.map((photo, index) => (
              <Card
                key={index}
                className="overflow-hidden border-[#e5c888] hover:border-[#947ac0] transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative h-[500px]">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                      <h3 className="text-[#e5c888] text-xl font-semibold mb-1">
                        {photo.caption}
                      </h3>
                      <p className="text-white text-sm">{photo.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Executive Summary */}
          <div className="bg-[#947ac0] bg-opacity-5 rounded-lg p-8 mb-16">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-[#947ac0] dark:text-[#e5c888] mb-4">
                Executive Profile
              </h3>
              <div className="space-y-4 text-gray-600">
                <p>
                  With an extensive background in financial services and
                  strategy, our CEO has established herself as a trusted advisor
                  to consumers across multiple industries. Her approach combines
                  deep financial expertise with a genuine commitment to
                  understanding each client's unique needs.
                </p>
                <p>
                  Under her leadership, TTG has grown from a local consultancy
                  to a comprehensive financial services firm serving clients
                  nationwide. Her vision continues to drive innovation in how we
                  deliver value to our clients.
                </p>
              </div>
            </div>
          </div>

          {/* Achievement Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-6 border-[#e5c888] hover:border-[#947ac0] transition-colors">
              <CardContent className="text-center">
                <Users className="h-8 w-8 text-[#947ac0] dark:text-[#e5c888] mx-auto mb-2" />
                <h3 className="text-xl font-semibold text-[#947ac0] dark:text-[#e5c888]">
                  500+
                </h3>
                <p className="text-gray-600">Clients Served</p>
              </CardContent>
            </Card>
            <Card className="p-6 border-[#e5c888] hover:border-[#947ac0] transition-colors">
              <CardContent className="text-center">
                <Award className="h-8 w-8 text-[#947ac0] dark:text-[#e5c888] mx-auto mb-2" />
                <h3 className="text-xl font-semibold text-[#947ac0] dark:text-[#e5c888]">
                  20+
                </h3>
                <p className="text-gray-600">Combined Years Experience</p>
              </CardContent>
            </Card>
            <Card className="p-6 border-[#e5c888] hover:border-[#947ac0] transition-colors">
              <CardContent className="text-center">
                <Globe className="h-8 w-8 text-[#947ac0] dark:text-[#e5c888] mx-auto mb-2" />
                <h3 className="text-xl font-semibold text-[#947ac0] dark:text-[#e5c888]">
                  30+
                </h3>
                <p className="text-gray-600">Markets Served</p>
              </CardContent>
            </Card>
            <Card className="p-6 border-[#e5c888] hover:border-[#947ac0] transition-colors">
              <CardContent className="text-center">
                <TrendingUp className="h-8 w-8 text-[#947ac0] dark:text-[#e5c888] mx-auto mb-2" />
                <h3 className="text-xl font-semibold text-[#947ac0] dark:text-[#e5c888]">
                  95%
                </h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
