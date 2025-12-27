import Image from "next/image";

export default function VenuePage() {
  return (
    <main className="container mx-auto px-4 py-24">
      {/* Page Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
        Conference Venue
      </h1>

      {/* Venue Name */}
      <h2 className="text-xl font-semibold text-black mb-4">
        Conference Venue: College
      </h2>

      {/* Address */}
      <p className="text-gray-700 mb-6">
        College Name, Main Road, Area Name, City, State – PIN Code, Country
      </p>

      {/* Venue Image */}
      <div className="relative w-full h-[300px] md:h-[450px] rounded-lg overflow-hidden mb-8">
        <Image
          src="/venue.jpg"
          alt="Conference Venue"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Description */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">About the Venue</h3>
        <p className="text-gray-700 leading-relaxed">
          The conference will be held at the host college, which is equipped
          with modern auditoriums, seminar halls, and state-of-the-art
          infrastructure suitable for national and international conferences.
        </p>
      </section>

      {/* Facilities */}
      <section className="mb-10">
        <h3 className="text-xl font-semibold mb-3">Facilities</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Fully air-conditioned auditorium</li>
          <li>High-speed Wi-Fi</li>
          <li>Advanced audio-visual systems</li>
          <li>Parking facilities</li>
          <li>Wheelchair accessibility</li>
        </ul>
      </section>

      {/* Google Map */}
      <section>
        <h3 className="text-xl font-semibold mb-3">Location Map</h3>
        <div className="w-full h-[300px] rounded-lg overflow-hidden border">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.302214523575!2d72.87585417524969!3d19.050445682148826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c7fb7cb41d%3A0xd2376785df725550!2sVasantdada%20Patil%20Pratishthan&#39;s%20College%20of%20Engineering%20and%20visual%20arts!5e0!3m2!1sen!2sin!4v1766838713416!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </main>
  );
}
