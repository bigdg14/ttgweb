"use client";

import { Target, Shield, Heart, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Mission() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#947ac0] to-black opacity-90 dark:from-black dark:to-[#947ac0]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Mission"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold text-[#e5c888] mb-4">
            Our Mission
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Empowering people through strategic financial guidance and
            innovative solutions
          </p>
        </div>
      </section>

      {/* Mission Details */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-[#947ac0] mb-6">
                Our Purpose
              </h2>
              <p className="text-gray-600 mb-4">
                At TTG, our mission is to empower people with the financial
                expertise and strategic guidance they need to thrive in today's
                dynamic market environment.
              </p>
              <p className="text-gray-600">
                We are committed to delivering innovative financial solutions
                that drive sustainable growth, create lasting value, and help
                our clients achieve their financial objectives.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#947ac0] mb-6">
                Our Vision
              </h2>
              <p className="text-gray-600 mb-4">
                We envision a future where everyone has access to the financial
                expertise and resources they need to succeed. Our goal is to be
                the catalyst for this transformation.
              </p>
              <p className="text-gray-600">
                Through continuous innovation and dedication to excellence, we
                strive to set new standards in financial services and create
                positive impact for our clients and communities.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="p-6 border-[#e5c888]">
              <CardContent className="text-center">
                <Target className="h-12 w-12 text-[#947ac0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#947ac0] mb-2">
                  Excellence
                </h3>
                <p className="text-gray-600">
                  Committed to delivering the highest quality financial services
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 border-[#e5c888]">
              <CardContent className="text-center">
                <Shield className="h-12 w-12 text-[#947ac0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#947ac0] mb-2">
                  Integrity
                </h3>
                <p className="text-gray-600">
                  Operating with transparency and ethical principles
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 border-[#e5c888]">
              <CardContent className="text-center">
                <Heart className="h-12 w-12 text-[#947ac0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#947ac0] mb-2">
                  Client Focus
                </h3>
                <p className="text-gray-600">
                  Putting our clients' success at the heart of everything we do
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 border-[#e5c888]">
              <CardContent className="text-center">
                <Lightbulb className="h-12 w-12 text-[#947ac0] mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-[#947ac0] mb-2">
                  Innovation
                </h3>
                <p className="text-gray-600">
                  Continuously evolving to meet tomorrow's challenges
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}