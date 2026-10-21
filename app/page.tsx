"use client";

import { useState } from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaBehance,
} from "react-icons/fa";

export default function Home() { 
  const [menuOpen, setMenuOpen] = useState(false); 
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
   { image: "/bundles.png",
     category: "Fashion",
     title: "Richird Norton photorealistic rendering as real photos", 
     description: "Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.", 
     author: "Jennifer Lawrence", 
    }, 
  
    ];

        const slide = slides[currentSlide];
        const nextSlide = () => { setCurrentSlide((current) => (current + 1) % slides.length); 

        };
        const prevSlide = () => { setCurrentSlide( (current) => (current - 1 + slides.length) % slides.length ); 

        };

        const closeMenu = () => setMenuOpen(false);
     return ( 
          <main className="min-h-screen bg-white text-gray-900"> 
          {/* Sticky Navbar */} 
          <nav className="sticky top-0 z-50 w-full bg-[#212936]/95 text-white shadow-md backdrop-blur-md"> 
          <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6"> 
        <a
       href="/"
       className="text-2xl font-bold tracking-wide text-white"
       onClick={closeMenu}
        > 
        RUNO 
        </a>

      {/* Desktop Navigation: 768px and above */}
      <div className="hidden items-center gap-6 text-base md:flex">
        <a href="/" className="transition hover:text-gray-300">
          Home
        </a>
        <a href="#about" className="transition hover:text-gray-300">
          About
        </a>
        <a href="#articles" className="transition hover:text-gray-300">
          Articles
        </a>
        <a href="#contact" className="transition hover:text-gray-300">
          Contact Us
        </a>
      </div>

      {/* Mobile Menu Button: below 768px */}
      <button
        type="button"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-white/30 text-2xl transition hover:bg-white/10 md:hidden"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        {menuOpen ? "×" : "☰"}
      </button>
    </div>

    {/* Mobile Drawer: opens below the navbar */}
    {menuOpen && (
      <div
        id="mobile-navigation"
        className="absolute left-0 top-full w-full border-t border-white/10 bg-[#212936] px-6 py-5 shadow-xl md:hidden"
      >
        <div className="mx-auto flex max-w-[1200px] flex-col">
          <a
            href="/"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 transition hover:text-gray-300"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 transition hover:text-gray-300"
          >
            About
          </a>
          <a
            href="#articles"
            onClick={closeMenu}
            className="border-b border-white/10 py-4 transition hover:text-gray-300"
          >
            Articles
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="py-4 transition hover:text-gray-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    )}
  </nav>

  {/* Hero Carousel */}
  <section className="relative h-[650px] min-h-[600px] w-full overflow-hidden bg-gray-900 sm:h-screen">
    {slides.map((item, index) => (
      <div
        key={item.image}
        className={`absolute inset-0 transition-opacity duration-700 ${
          index === currentSlide
            ? "z-10 opacity-100"
            : "z-0 pointer-events-none opacity-0"
        }`}
        aria-hidden={index !== currentSlide}
      >
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center px-6 sm:px-10">
          <div className="mx-auto w-full max-w-[1200px]">
            <div className="max-w-[750px] text-left text-white">
              <span className="mb-4 inline-block rounded-md bg-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                {item.category}
              </span>

              <h1 className="mb-5 max-w-[700px] font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {item.title}
              </h1>

              <p className="mb-6 max-w-[620px] text-sm leading-relaxed text-white/90 sm:text-base">
                {item.description}
              </p>

              <p className="text-sm font-bold sm:text-base">
                By {item.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    ))}

  </section>

  <article className="mx-auto max-w-[1000px] px-6 py-20">
    <div className="mb-10 flex items-center gap-6 text-sm text-gray-500">
      <span>08.08.2021</span>
      <span className="h-px w-12 bg-gray-300" />
      <span>4 minutes</span>
    </div>

    <div className="ml-auto max-w-[800px] text-lg leading-[1.8] text-gray-500">
      <p className="mb-8">
        Seamlessly syndicate cutting-edge architectures rather than
        collaborative collaboration and idea-sharing. Proactively
        incubate visionary interfaces whereas premium benefits.
        Seamlessly negotiate ubiquitous leadership skills rather
        than parallel ideas. Dramatically visualize superior
        interfaces for best-of-breed alignments.
      </p>

      <p className="mb-8">
        Synergistically formulate performance based users through
        customized relationships. Interactively deliver
        cross-platform ROI via granular systems. Intrinsically
        enhance effective initiatives vis-a-vis orthogonal
        outsourcing.
      </p>

      <p>
        Rapidiously monetize market-driven opportunities with
        multifunctional users. Collaboratively enhance visionary
        opportunities through revolutionary schemas. Progressively
        network just in time customer service without real-time
        scenarios.
      </p>
    </div>

  
    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
      <img
        src="/picc1.jpg"
        alt="Nature and travel"
        className="h-[300px] w-full rounded-lg object-cover md:h-[450px]"
      />

      <img
        src="/picc2.jpg"
        alt="Travel destination"
        className="h-[300px] w-full rounded-lg object-cover md:h-[450px]"
      />
    </div>

    [10/20/2026 6:33 AM] Darlington: <div className="ml-auto mt-12 max-w-[800px] text-lg leading-[1.8] text-gray-500">
      <p className="mb-8">
        Efficiently empower seamless meta-services with impactful
        opportunities. Distinctively transition virtual outsourcing
        with focused e-tailers.
      </p>
    </div>


    <blockquote className="my-14 text-center font-serif text-3xl font-bold leading-tight text-[#c49a6c] md:text-5xl">
      <span className="text-5xl">“</span>
      Monotonectally seize superior mindshare rather than efficient
      technology.
      <span className="text-5xl">”</span>
    </blockquote>

    <div className="ml-auto max-w-[800px] text-lg leading-[1.8] text-gray-500">
      <p>
        Compellingly enhance seamless resources through competitive
        content. Continually actualize 24/365 alignments for
        resource-leveling platforms. Energistically enhance high
        standards in models and professional expertise.
      </p>
    </div>


    <div className="mt-14 flex flex-wrap gap-4">
      {["ADVENTURE", "PHOTO", "DESIGN"].map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-gray-200 px-5 py-2 text-xs text-gray-500"
        >
          {tag}
        </span>
      ))}
    </div>
    
   <section className="w-full border-t border-gray-200 px-6 py-10">

   <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">

    

    <div className="flex items-center gap-4">

      <img

        src="/picc3.jpg"

        alt="Author"

        className="h-16 w-16 rounded-full object-cover"

      />

      <div>

        <h3 className="font-semibold text-gray-800">

          By Jennifer Lawrence

        </h3>

        <p className="mt-1 text-sm text-gray-400">

          Thinker &amp; Designer

        </p>

      </div>

    </div>

    

    <div className="flex items-center gap-5">

      <a

        href="https://www.facebook.com/"

        target="_blank"

        rel="noopener noreferrer"

        aria-label="Facebook"

        className="text-gray-500 transition hover:text-blue-600"

      >

        <FaFacebookF size={18} />

      </a>
      
     <a

        href="https://x.com/"

        target="_blank"

        rel="noopener noreferrer"

        aria-label="X"

        className="text-gray-500 transition hover:text-sky-500"

      >

        <FaTwitter size={18} />

      </a>

      <a

        href="https://www.pinterest.com/"

        target="_blank"

        rel="noopener noreferrer"

        aria-label="Pinterest"

        className="text-gray-500 transition hover:text-red-600"

      >

        <FaPinterestP size={18} />

      </a>

      <a

        href="https://www.behance.net/"

        target="_blank"

        rel="noopener noreferrer"

        aria-label="Behance"

        className="text-gray-500 transition hover:text-blue-700"

      >

        <FaBehance size={18} />

      </a>

    </div>

    </div>

   </section>

  </article>

  <section className="border-t border-gray-200 py-20">

  <div className="mx-auto max-w-[1200px] px-6">

    <h2 className="mb-10 text-2xl font-bold text-gray-900">

      Related Posts

    </h2>

    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

      

      <article>

        <div className="relative overflow-hidden rounded-lg">

          <img

            src="./picc4.jpg"

            alt="Things to know before visiting Germany"

            className="h-[280px] w-full object-cover transition duration-500 hover:scale-105"

          />

          <span

            className="absolute left-5 top-5 rounded-md bg-white/80 px-3 py-2

                   text-[10px] font-semibold uppercase tracking-wide"

          >

            Adventure

          </span>

        </div>

        <p className="mt-5 text-xs text-gray-400">

          08.08.2021

        </p>

        <h3

          className="mt-3 text-xl font-bold leading-tight text-gray-900"

        >

          Things to know before visiting

          Cave in Germany

        </h3>
           <p className="mt-4 text-sm leading-6 text-gray-500">

         Progressively incentivize cooperative systems through 
         technically sound functionalities. Credibly productivate 
         seamless data with flexible schemas.

        </p>

      </article>

    

      <article>

        <div className="relative overflow-hidden rounded-lg">

          <img

            src="pic5.jpg"

            alt="Fashion"

            className="h-[280px] w-full object-cover transition duration-500 hover:scale-105"

          />

          <span

            className="absolute left-5 top-5 rounded-md bg-white/80 px-3 py-2

                   text-[10px] font-semibold uppercase tracking-wide"

          >

            Fashion

          </span>

        </div>

        <p className="mt-5 text-xs text-gray-400">

          08.08.2021

        </p>

        <h3

          className="mt-3 text-xl font-bold leading-tight text-gray-900"

        >

          Nina Smith vibrant work collab

          with Nike Dunk

        </h3>

        <p className="mt-4 text-sm leading-6 text-gray-500">

         Progressively incentivize cooperative systems through 
         technically sound functionalities. Credibly productivate 
         seamless data with flexible schemas.
        </p>

      </article>


      <article>

        <div className="relative overflow-hidden rounded-lg">

          <img

            src="./pic6.jpg"

            alt="Forest"

            className="h-[280px] w-full object-cover transition duration-500 hover:scale-105"

          />

          <span

            className="absolute left-5 top-5 rounded-md bg-white/80 px-3 py-2

                   text-[10px] font-semibold uppercase tracking-wide"

          >

            Technology

          </span>

        </div>

        <p className="mt-5 text-xs text-gray-400">

          08.08.2021

        </p>

        <h3

          className="mt-3 text-xl font-bold leading-tight text-gray-900"

        >

          Richard Norton photorealistic

          rendering as real photos

        </h3>

        <p className="mt-4 text-sm leading-6 text-gray-500">

         Progressively incentivize cooperative systems through 
         technically sound functionalities. Credibly productivate 
         seamless data with flexible schemas.
        </p>

      </article>
      

    </div>

  </div>


</section>

<footer className="bg-[#212936] text-white">


  <div className="mx-auto max-w-[1200px] px-6 py-20">

    <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">


      <div>

        <h3 className="font-serif text-2xl font-bold">

          Contact the Publisher

        </h3>

        <div className="mt-6 space-y-2 text-sm leading-6 text-gray-300">

          <p>mike@runo.com</p>

          <p>+944 450 904 505</p>

        </div>

      </div>


      <div>

        <h3 className="font-serif text-2xl font-bold">

          Explore

        </h3>

        <nav className="mt-6 flex flex-col gap-4 text-sm text-gray-300">

          <a

            href="#"

            className="transition hover:text-white"

          >

            About

          </a>

          <a

            href="#"

            className="transition hover:text-white"

          >

            Partners

          </a>

          <a

            href="#"

            className="transition hover:text-white"

          >

            Job Opportunities

          </a>

          <a

            href="#"

            className="transition hover:text-white"

          >

            Advertise

          </a>

          <a

            href="#"

            className="transition hover:text-white"

          >

            Membership

          </a>

        </nav>

      </div>


      <div>

        <h3 className="font-serif text-2xl font-bold">

          Headquarter

        </h3>

        <div className="mt-6 text-sm leading-7 text-gray-300">

          <p>191 Middleville Road,</p>

          <p>NY 1001, Sydney</p>

          <p>Australia</p>

        </div>

      </div>
[10/20/2026 6:33 AM] Darlington: <div>

        <h3 className="font-serif text-2xl font-bold">

          Connections

        </h3>

        <div className="mt-7 flex items-center gap-5">

          <a

            href="#"

            aria-label="Facebook"

            className="flex h-8 w-8 items-center justify-center

                   rounded-full bg-white text-sm font-bold

                   text-[#212936] transition hover:bg-gray-300"

          >

            f

          </a>

          <a

            href="#"

            aria-label="Twitter"

            className="flex h-8 w-8 items-center justify-center

                   rounded-full bg-white text-sm font-bold

                   text-[#212936] transition hover:bg-gray-300"

          >

            𝕏

          </a>

          <a

            href="#"

            aria-label="YouTube"

            className="flex h-8 w-8 items-center justify-center

                   rounded-full bg-white text-[11px] font-bold

                   text-[#212936] transition hover:bg-gray-300"

          >

            ▶️

          </a>

          <a

            href="#"

            aria-label="Pinterest"

            className="flex h-8 w-8 items-center justify-center

                   rounded-full bg-white text-sm font-bold

                   text-[#212936] transition hover:bg-gray-300"

          >

            p

        </a>

          <a

            href="#"

            aria-label="Behance"

            className="flex h-8 w-8 items-center justify-center

                   rounded-full bg-white text-[10px] font-bold

                   text-[#212936] transition hover:bg-gray-300"

          >

            Be

          </a>

        </div>

      </div>

    </div>

  </div>


  <div className="border-t border-white/10">

    <div className="mx-auto max-w-[1200px] px-6 py-7">

      <p className="text-sm font-medium text-gray-300">

        2021 | RUNO Publisher Studio

      </p>

    </div>

  </div>

</footer>

 
</main>
); }