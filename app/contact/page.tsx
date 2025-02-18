"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-[#947ac0] to-black opacity-90 dark:from-black dark:to-[#947ac0]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Contact"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl font-bold text-[#947ac0] dark:text-[#e5c888] mb-4">Contact Us</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Get in touch with our team of financial experts
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-white dark:bg-background">
        <div className="container mx-auto px-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#947ac0] dark:text-[#e5c888] mb-8">
                Get in Touch
              </h2>
              <div className="grid grid-cols-1 gap-6">
                <Card className="p-6 border-[#e5c888]">
                  <CardContent className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#947ac0] dark:text-[#e5c888]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#947ac0] dark:text-[#e5c888]">
                        Email
                      </h3>
                      <p className="text-gray-600">contact@ttgfinance.com</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="p-6 border-[#e5c888]">
                  <CardContent className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#947ac0] dark:text-[#e5c888]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#947ac0] dark:text-[#e5c888]">
                        Phone
                      </h3>
                      <p className="text-gray-600">1-800-FINANCE</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="p-6 border-[#e5c888]">
                  <CardContent className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#947ac0] dark:text-[#e5c888]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#947ac0] dark:text-[#e5c888]">
                        Address
                      </h3>
                      <p className="text-gray-600">
                        123 Financial District
                        <br />
                        College Park, MD 20740
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="p-6 border-[#e5c888]">
                  <CardContent className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-[#947ac0] dark:text-[#e5c888]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#947ac0] dark:text-[#e5c888]">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#947ac0] dark:text-[#e5c888] mb-8">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <Input className="border-[#e5c888] focus:border-[#947ac0]" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <Input className="border-[#e5c888] focus:border-[#947ac0]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    type="email"
                    className="border-[#e5c888] focus:border-[#947ac0]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    className="border-[#e5c888] focus:border-[#947ac0]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <Textarea className="border-[#e5c888] focus:border-[#947ac0] min-h-[150px]" />
                </div>
                <Button className="w-full bg-[#947ac0] hover:bg-[#8369ab] text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}