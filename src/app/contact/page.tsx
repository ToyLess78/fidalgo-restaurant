import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MailIcon, MapPinIcon, PhoneIcon, ClockIcon } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <div className="relative bg-muted h-60 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Contact Us"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-light uppercase mb-2">Contact Us</h1>
          <p className="text-sm uppercase tracking-widest">Get in touch with Fidalgo</p>
        </div>
      </div>

      <div className="container-custom py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-light mb-8">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Enter message subject"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <textarea
                  id="message"
                  className="w-full min-h-[180px] rounded-sm border border-input px-3 py-2 bg-background"
                  placeholder="Type your message here"
                />
              </div>

              <Button
                type="submit"
                className="bg-secondary hover:bg-secondary/90 text-white"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-light mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <MapPinIcon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    Piazza Della Signoria, 12<br />
                    21562 · Firenze · Italy
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <PhoneIcon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Phone</h3>
                  <p className="text-muted-foreground">
                    +12 344 0567899<br />
                    +12 344 0567890
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <MailIcon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    info@fidalgo.example.com<br />
                    reservations@fidalgo.example.com
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="mr-4">
                  <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                    <ClockIcon className="w-5 h-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Opening Hours</h3>
                  <p className="text-muted-foreground">
                    Monday - Thursday: 12:30 PM - 11:00 PM<br />
                    Friday - Saturday: 12:30 PM - 12:00 AM<br />
                    Sunday: 12:30 PM - 10:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="relative h-60 md:h-80 rounded-sm overflow-hidden bg-zinc-800">
                {/* For demo purposes - in a real app, you'd use a real map component */}
                <div className="absolute inset-0 bg-zinc-900/70 flex items-center justify-center">
                  <p className="text-white text-center px-4">
                    Interactive map would be displayed here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
