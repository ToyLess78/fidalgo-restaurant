import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BookingSection() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/restaurant.jpg"
          alt="Restaurant interior"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-2xl mx-auto bg-background/95 backdrop-blur-sm p-8 md:p-12 rounded-sm">
          <h2 className="section-title text-center">Book a Table</h2>
          <p className="text-center text-muted-foreground mb-8">
            Reserve your table online quickly and easily. For parties of 6 or more, please contact us directly.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="guests">Number of Guests</Label>
                <select
                  id="guests"
                  className="w-full rounded-sm border-input bg-background px-3 py-2"
                  defaultValue="2"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date">Date</Label>
                <Input
                  id="date"
                  type="date"
                  className="rounded-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <select
                  id="time"
                  className="w-full rounded-sm border-input bg-background px-3 py-2"
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

              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="rounded-sm"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <Link href="/book-a-table">
                <Button
                  type="button"
                  className="bg-secondary hover:bg-secondary/90 text-white inline-flex w-full md:w-auto"
                >
                  Complete Reservation
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
