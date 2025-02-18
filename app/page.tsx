"use client";

import { Calendar, ChartBar, Users, MessageSquare, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  const reviews = [
    {
      name: "Sarah Johnson",
      company: "Tech Solutions Inc.",
      content: "Outstanding financial guidance that helped us scale our business efficiently.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Growth Ventures",
      content: "Their strategic approach to financial planning transformed our operations.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Innovation Labs",
      content: "Exceptional service and attention to detail. Highly recommended!",
      rating: 5,
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-[#947ac0] to-black opacity-90 dark:from-black dark:to-[#947ac0]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Financial District"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold text-[#e5c888] dark:text-[#e5c888] mb-4">
            Transform Your Financial Future
          </h1>
          <p className="text-xl text-white mb-8 dark:text-gray-300 max-w-3xl mx-auto">
            Expert financial guidance tailored to your needs
          </p>
          <Button
            size="lg"
            className="bg-[#e5c888] hover:bg-[#947ac0] text-black hover:text-white dark:bg-[#947ac0] dark:hover:bg-[#e5c888] dark:text-white dark:hover:text-black"
          >
            Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white  dark:bg-background ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#947ac0]">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-[#e5c888] hover:border-[#947ac0] transition-colors">
              <CardContent className="space-y-4">
                <ChartBar className="h-12 w-12 text-[#947ac0]" />
                <h3 className="text-xl font-semibold text-[#947ac0]">
                  Financial Analysis
                </h3>
                <p className="text-gray-600">
                  Comprehensive analysis of your financial data to drive
                  informed decisions
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 border-[#e5c888] hover:border-[#947ac0] transition-colors">
              <CardContent className="space-y-4">
                <Users className="h-12 w-12 text-[#947ac0]" />
                <h3 className="text-xl font-semibold text-[#947ac0]">
                  Investment Strategy
                </h3>
                <p className="text-gray-600">
                  Tailored investment solutions to maximize your returns
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 border-[#e5c888] hover:border-[#947ac0] transition-colors">
              <CardContent className="space-y-4">
                <Building2 className="h-12 w-12 text-[#947ac0]" />
                <h3 className="text-xl font-semibold text-[#947ac0]">
                  Financial Planning
                </h3>
                <p className="text-gray-600">
                  Strategic planning to help your achieve your goals
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-[#947ac0] bg-opacity-10 dark:bg-black modern-pattern">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#947ac0]">
            Customer Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="p-6 border-[#e5c888] hover:border-[#947ac0] transition-colors dark:!bg-zinc-900/[100%]"
              >
                <CardContent className=" dark:!bg-zinc-900/[100]">
                  <div className="flex items-center mb-4">
                    <div className="ml-3">
                      <p className="font-semibold text-[#947ac0]">
                        {review.name}
                      </p>
                      <p className="text-sm text-gray-600">{review.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.content}</p>
                  <div className="flex mt-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-5 w-5 text-[#e5c888]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#947ac0] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Transform Your Finances?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a meeting with our financial experts and take the first
            step towards your financial success.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#e5c888] hover:bg-[#d4b87d] text-black"
            >
              <Calendar className="mr-2 h-5 w-5" /> Schedule Meeting
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#e5c888] text-[#e5c888] hover:bg-[#e5c888] hover:text-black"
            >
              <MessageSquare className="mr-2 h-5 w-5" /> Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}