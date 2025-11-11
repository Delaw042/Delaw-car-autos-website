import {
  FaEnvelope,
  FaInstagram,
  FaPhone,
  FaTiktok,
  FaXTwitter,
} from "react-icons/fa6";
import BackgroundVideo from "../components/BackgroundVideo";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import FadeInWhenVisibleLeft from "../components/FadeInWhenVisibleLeft";
import FadeInWhenVisibleRight from "../components/FadeInWhenVisibleRight";
import Footer from "../components/Footer";

function Hero() {
  return (
    <div id="home" className="overflow-hidden mt-16 scroll-mt-20">
      <BackgroundVideo
        videoSrc="/Videos/Bugatti.mp4"
        overlay={true}
        className="h-screen flex items-center justify-center"
      >
        <div className="text-white text-center px-4">
          <FadeInWhenVisibleLeft>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold mb-5">
              CARS FOR SALE
            </h1>
          </FadeInWhenVisibleLeft>

          <FadeInWhenVisibleRight>
            <p className="font-body font-semibold text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Get ALL SUPER NEAT CARS BOTH BRAND NEW AND TOKUNBO USED, WITH THE
              BEST RETAIL PRICE FROM DELAW CAR AUTOS.
            </p>
          </FadeInWhenVisibleRight>
        </div>
      </BackgroundVideo>
    </div>
  );
}

function About() {
  return (
    <div id="about" className="my-16 scroll-mt-20 px-4 sm:px-8">
      <FadeInWhenVisible>
        <h1 className="my-10 text-4xl sm:text-5xl font-heading font-extrabold text-center">
          ABOUT DELAW CAR AUTOS
        </h1>
      </FadeInWhenVisible>

      <div className="font-body text-sm sm:text-base md:text-lg leading-relaxed">
        <FadeInWhenVisibleRight>
          <p className="mb-16 sm:mb-20">
            Welcome to Delaw Autos — your trusted destination for luxury
            automobiles and premium properties in the heart of Abuja, Nigeria.{" "}
            <br />
            At Delaw Autos, I believe that excellence is not a choice — it’s a
            standard...
          </p>
        </FadeInWhenVisibleRight>

        <div className="my-10 sm:my-20">
          <FadeInWhenVisibleLeft>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-5">
              Why Choose Delaw Autos
            </h2>
          </FadeInWhenVisibleLeft>
          <FadeInWhenVisibleRight>
            <p className="font-body font-medium">
              ✅ Wide Range of Premium Vehicles... <br />
              ✅ Genuine Listings... <br />
              ✅ Client-Centered Service... <br />
              ✅ Flexible Deals & Swift Delivery...
            </p>
          </FadeInWhenVisibleRight>
        </div>

        <div className="mb-10 sm:mb-20">
          <FadeInWhenVisibleLeft>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-5">
              My Mission
            </h2>
          </FadeInWhenVisibleLeft>
          <FadeInWhenVisibleRight>
            <p>To redefine automotive and property sales in Nigeria...</p>
          </FadeInWhenVisibleRight>
        </div>

        <div className="mb-10 sm:mb-20">
          <FadeInWhenVisibleLeft>
            <h2 className="text-xl sm:text-2xl font-heading font-bold mb-5">
              My Vision
            </h2>
          </FadeInWhenVisibleLeft>
          <FadeInWhenVisibleRight>
            <p>
              To be Nigeria’s leading name in luxury cars and real estate
              solutions...
            </p>
          </FadeInWhenVisibleRight>
        </div>

        <FadeInWhenVisible>
          <p className="mt-20 font-body text-center text-lg sm:text-xl">
            <span className="font-bold">Delaw Autos</span> — Luxury You Deserve,
            Quality You Can Trust.
          </p>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

function Services() {
  return (
    <div
      id="services"
      className="bg-gradient-to-b text-gray-900 dark:text-white flex flex-col px-4 sm:px-8 py-16 sm:py-20 transition-colors duration-300 scroll-mt-20"
    >
      <FadeInWhenVisible>
        <h1 className="my-10 text-4xl sm:text-5xl font-heading font-extrabold text-center">
          SERVICES
        </h1>
      </FadeInWhenVisible>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-28">
        <FadeInWhenVisibleRight>
          <img
            src="./Pictures/Delaw2.jpg"
            className="w-72 sm:w-96 h-72 sm:h-96 rounded-xl object-cover"
            alt="DCA Services"
          />
        </FadeInWhenVisibleRight>

        <div className="flex flex-col sm:flex-row gap-10 sm:gap-14 justify-center">
          <FadeInWhenVisibleRight>
            <div className="bg-red-800 w-72 sm:w-80 h-auto py-8 rounded-3xl shadow-lg">
              <video
                autoPlay
                loop
                muted
                src="./Videos/BMW.mp4"
                className="mx-auto w-64 sm:w-72 h-40 sm:h-48 rounded-3xl"
              ></video>
              <p className="text-xs text-center font-body mt-1">
                Free Stock Footage by Vecteezy.com
              </p>
              <div className="text-center mt-6 text-white">
                <h2 className="font-heading font-bold text-lg sm:text-xl">
                  VEHICLE DEALERSHIP
                </h2>
                <p className="text-sm mt-3 px-4">
                  SALES OF LUXURY CARS, BRAND NEW, FOREIGN USED, CLEAN NIGERIAN
                  USED AND BULLETPROOF VEHICLES.
                </p>
              </div>
            </div>
          </FadeInWhenVisibleRight>

          <FadeInWhenVisibleLeft>
            <div className="bg-red-800 w-72 sm:w-80 h-auto py-10 rounded-3xl shadow-lg text-white text-center">
              <h1 className="text-7xl sm:text-9xl">🏘️</h1>
              <h2 className="font-heading font-bold text-lg sm:text-xl mt-6">
                LANDS AND HOUSES
              </h2>
              <p className="text-sm mt-3 font-body">SALES OF HOUSES AND LANDS.</p>
            </div>
          </FadeInWhenVisibleLeft>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div
      id="contact"
      className="scroll-mt-20 bg-gradient-to-b text-gray-900 dark:text-white flex flex-col px-4 sm:px-8 py-16 sm:py-20 transition-colors duration-300"
    >
      <FadeInWhenVisible>
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-heading font-extrabold mb-4">
            CONTACT
          </h1>
          <p className="font-body text-base sm:text-lg">
            You can contact me through the following links — let me know how to
            serve you better.
          </p>
        </div>
      </FadeInWhenVisible>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-28">
        <FadeInWhenVisibleRight>
          <img
            src="./Pictures/Delaw.jpg"
            className="w-72 sm:w-96 h-72 sm:h-96 rounded-xl object-cover"
            alt="DCA Contact"
          />
        </FadeInWhenVisibleRight>

        <FadeInWhenVisibleLeft>
          <div className="flex flex-wrap justify-center gap-5 text-3xl mt-8">
            <a
              href="mailto:delawautos4141@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.instagram.com/delaw_autos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-600 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@delaw_the_car_guy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://x.com/delaw_autos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600 transition"
              aria-label="Twitter"
            >
              <FaXTwitter />
            </a>
            <a
              href="tel:+2348136543220"
              className="hover:text-green-600 transition"
              aria-label="Phone"
            >
              <FaPhone />
            </a>
          </div>
          <h1 className="font-heading font-bold text-xl text-center mt-8">
            DELAW CAR AUTOS
          </h1>
        </FadeInWhenVisibleLeft>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="m-0">
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}
