import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BookATablePage() {
  return (
    <>
      <div className="relative bg-muted h-60 flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg"
            alt="Book a Table"
            fill
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-3xl md:text-5xl font-light uppercase mb-2">Book a Table</h1>
          <p className="text-sm uppercase tracking-widest">Reserve your dining experience</p>
        </div>
      </div>

      <div className="container-custom">
        <div className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <form className="bg-muted/50 p-8 md:p-12 rounded-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-xl font-light mb-6">Reservation Details</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="guests">Number of Guests</Label>
                      <select
                        id="guests"
                        className="w-full rounded-sm border-input bg-background/50 backdrop-blur-sm px-3 py-2"
                        defaultValue="2"
                      >
                        <option value="1">1 Person</option>
                        <option value="2">2 People</option>
                        <option value="3">3 People</option>
                        <option value="4">4 People</option>
                        <option value="5">5 People</option>
                        <option value="6">6 People</option>
                        <option value="7">7 People</option>
                        <option value="8">8 People</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        className="rounded-sm bg-background/50 backdrop-blur-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <select
                        id="time"
                        className="w-full rounded-sm border-input bg-background/50 backdrop-blur-sm px-3 py-2"
                        defaultValue="19:00"
                      >
                        <option value="17:00">5:00 PM</option>
                        <option value="17:30">5:30 PM</option>
                        <option value="18:00">6:00 PM</option>
                        <option value="18:30">6:30 PM</option>
                        <option value="19:00">7:00 PM</option>
                        <option value="19:30">7:30 PM</option>
                        <option value="20:00">8:00 PM</option>
                        <option value="20:30">8:30 PM</option>
                        <option value="21:00">9:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-light mb-6">Contact Information</h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your name"
                        className="rounded-sm bg-background/50 backdrop-blur-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="rounded-sm bg-background/50 backdrop-blur-sm"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Your phone number"
                        className="rounded-sm bg-background/50 backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="requests">Special Requests</Label>
                  <textarea
                    id="requests"
                    placeholder="Any special requests or notes for your reservation"
                    className="w-full rounded-sm border-input bg-background/50 backdrop-blur-sm px-3 py-2 min-h-[100px]"
                  />
                </div>

                <div className="text-sm text-muted-foreground">
                  <p className="mb-2">Reservations are held for 15 minutes past the scheduled time.</p>
                  <p>For parties of 8 or more, please call us directly at +12 344 0567899.</p>
                </div>

                <Button
                  type="submit"
                  className="bg-secondary hover:bg-secondary/90 text-white w-full sm:w-auto"
                >
                  Complete Reservation
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-light mb-6">Find Us</h2>
              <div className="relative h-80 rounded-sm overflow-hidden bg-zinc-800">
                {/* For demo purposes - in a real app, you'd use a real map component */}
                <div className="absolute inset-0 bg-zinc-900/70 flex items-center justify-center">
                  <p className="text-white text-center px-4">
                    Interactive map would be displayed here.<br />
                    Piazza Della Signoria, 12<br />
                    21562 · Firenze · Italy
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light mb-6">Opening Hours</h2>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Monday - Thursday</span>
                  <span>12:30 PM - 11:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Friday - Saturday</span>
                  <span>12:30 PM - 12:00 AM</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span>Sunday</span>
                  <span>12:30 PM - 10:00 PM</span>
                </div>
                <div className="flex justify-between pb-2 text-sm">
                  <span>Kitchen Closes</span>
                  <span>1 Hour Before Closing</span>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-light mb-4">Contact</h3>
                <p className="mb-2">Phone: +12 344 0567899</p>
                <p className="mb-2">Email: reservations@fidalgo.example.com</p>
                <p>For large events or private dining, please contact events@fidalgo.example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
