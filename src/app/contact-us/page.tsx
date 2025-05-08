import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MailIcon, MapPinIcon, PhoneIcon, ClockIcon } from "lucide-react";

export default function ContactUsPage() {
  return (
    <>
      <div className="relative py-24 md:py-32 flex items-center justify-center bg-muted">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80"
          />
          <Image
            src="/images/dining.jpg"
            alt="Contact Fidalgo"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                We'd Love to <span className="text-primary">Hear</span> From You
              </h1>
              <p className="text-muted-foreground max-w-md mb-8">
                Have questions, feedback, or special requests? Our team is here to assist you with anything
                you need to make your dining experience exceptional.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-start">
                  <PhoneIcon className="w-5 h-5 text-primary mb-4" />
                  <h3 className="text-sm uppercase tracking-wider mb-2">Phone</h3>
                  <p className="text-muted-foreground text-sm">+12 344 0567899</p>
                </div>
                <div className="flex flex-col items-start">
                  <MailIcon className="w-5 h-5 text-primary mb-4" />
                  <h3 className="text-sm uppercase tracking-wider mb-2">Email</h3>
                  <p className="text-muted-foreground text-sm">info@fidalgo.example.com</p>
                </div>
                <div className="flex flex-col items-start">
                  <MapPinIcon className="w-5 h-5 text-primary mb-4" />
                  <h3 className="text-sm uppercase tracking-wider mb-2">Address</h3>
                  <p className="text-muted-foreground text-sm">
                    Piazza Della Signoria, 12<br />
                    21562 · Firenze · Italy
                  </p>
                </div>
                <div className="flex flex-col items-start">
                  <ClockIcon className="w-5 h-5 text-primary mb-4" />
                  <h3 className="text-sm uppercase tracking-wider mb-2">Hours</h3>
                  <p className="text-muted-foreground text-sm">
                    Mon-Thu: 12:30-23:00<br />
                    Fri-Sun: 12:30-00:00
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border p-8 rounded-sm shadow-md">
              <h2 className="text-2xl font-light mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-muted/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email address"
                    className="bg-muted/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input
                    id="phone"
                    placeholder="Your phone number"
                    className="bg-muted/50"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your Message</Label>
                  <textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="w-full min-h-[120px] rounded-sm border border-input bg-muted/50 px-3 py-2 text-sm"
                  />
                </div>

                <Button type="submit" className="w-full bg-secondary text-white hover:bg-secondary/90">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="section-heading">Find Us</h2>
          <div className="h-[400px] rounded-sm overflow-hidden bg-muted">
            {/* Placeholder for map - in a real implementation you would use a map component */}
            <div className="h-full flex items-center justify-center bg-zinc-800/50">
              <div className="text-center max-w-md p-6">
                <MapPinIcon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-light mb-2">Our Location</h3>
                <p className="text-muted-foreground mb-6">
                  Piazza Della Signoria, 12<br />
                  21562 · Firenze · Italy
                </p>
                <p className="text-sm text-muted-foreground">
                  Located in the heart of Florence, just a few steps from Palazzo Vecchio
                  and the Uffizi Gallery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
