'use client';

import dynamic from 'next/dynamic';
import animationData from '../../assets/lottie/animation_1.json';
import {
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const LottiePlayer = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);

const Hero = () => {
  return (
    <section className="min-h-screen py-10 grid grid-cols-1 lg:grid-cols-12 items-center lg:gap-10 pt-32 lg:pt-26">
      {/* LEFT SIDE */}
      <div className="md:col-span-7 space-y-8 text-center lg:text-left">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
          <div>I&apos;m</div>
          <div>Roshan Magar</div>
          <div>A Software Engineer</div>
        </h1>

        <p className="text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
          A self-educated learner who believes in the courage of trying once more, even after failure.
        </p>

        {/* Social Media Icons */}
        <div className="flex flex-wrap justify-center lg:justify-start space-x-4 pt-4">
          <a
            href="https://www.facebook.com/roshan.thapa.magar.193061"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="p-4 rounded-full bg-blue-600 text-white hover:bg-blue-800 transition"
          >
            <FaFacebookF size={22} />
          </a>
          <a
            href="https://wa.me/9742531161"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="p-4 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
          >
            <FaWhatsapp size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/roshan-thapa-magar-a1886a367/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-4 rounded-full bg-blue-700 text-white hover:bg-blue-900 transition"
          >
            <FaLinkedinIn size={22} />
          </a>
          <a
            href="https://www.instagram.com/roshanthapamagar_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-4 rounded-full bg-pink-500 text-white hover:bg-pink-700 transition"
          >
            <FaInstagram size={22} />
          </a>
          <a
            href="https://x.com/RoshanThap21156"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="p-4 rounded-full bg-blue-500 text-white hover:bg-blue-700 transition"
          >
            <FaTwitter size={22} />
          </a>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:col-span-5 flex justify-center mt-10">
        <LottiePlayer
          autoplay
          loop
          src={animationData}
        />
      </div>
    </section>
  );
};

export default Hero;
