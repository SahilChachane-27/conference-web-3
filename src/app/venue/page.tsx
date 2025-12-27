import Image from "next/image";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function VenuePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 max-w-6xl">

          {/* Page Title */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2">
              Conference Venue
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Explore the location, facilities, and map of the venue
            </p>
          </div>

          {/* Venue Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16 hover:shadow-2xl transition-shadow duration-300">
            {/* Image */}
            <div className="relative w-full h-[320px] md:h-[480px]">
              <Image
                src="/college.JPG"
                alt="Conference Venue"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Vasantdada Patil Pratishthan’s College of Engineering and Visual Arts
              </h2>

              <p className="text-gray-700 mb-8 text-lg">
                Sion–Trombay Road, Near Everard Nagar, Chunabhatti, Mumbai,
                Maharashtra – 400022, India
              </p>

              {/* About */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                  About the Venue
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  The conference will be hosted at Vasantdada Patil Pratishthan’s
                  College of Engineering and Visual Arts, offering modern
                  auditoriums, seminar halls, and state-of-the-art infrastructure
                  suitable for national and international academic events.
                </p>
              </section>

              {/* Facilities */}
              <section className="mb-10">
                <h3 className="text-2xl font-semibold text-primary-600 mb-4">
                  Facilities
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 list-disc list-inside text-lg">
                  <li className="hover:text-primary-600 transition-colors duration-200">Fully air-conditioned auditorium</li>
                  <li className="hover:text-primary-600 transition-colors duration-200">High-speed Wi-Fi campus</li>
                  <li className="hover:text-primary-600 transition-colors duration-200">Advanced audio-visual systems</li>
                  <li className="hover:text-primary-600 transition-colors duration-200">Spacious parking facilities</li>
                  <li className="hover:text-primary-600 transition-colors duration-200">Wheelchair accessible infrastructure</li>
                </ul>
              </section>
            </div>
          </div>

          {/* Google Map */}
          <section className="mb-24">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Location Map
            </h3>
            <div className="w-full h-[350px] md:h-[450px] rounded-2xl overflow-hidden border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <iframe
                title="Vasantdada Patil Pratishthan Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.302214523575!2d72.87585417524969!3d19.050445682148826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8c7fb7cb41d%3A0xd2376785df725550!2sVasantdada%20Patil%20Pratishthan&#39;s%20College%20of%20Engineering%20and%20visual%20arts!5e0!3m2!1sen!2sin!4v1766838713416!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
