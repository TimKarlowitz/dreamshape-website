import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";
import { Footer } from "@/Components/Footer";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="relative bg-gradient-to-b from-gray-950 to-gray-900 h-screen">
      <Head>
        <title>
          Dreamshape - AI powered Dream Journal and Interpreting App
        </title>
        <meta
          name="description"
          content="Dreamshape is a powerful app for journaling and interpreting your dreams using AI technology. Capture, analyze, and understand your dreams better."
        />
        <meta
          name="keywords"
          content="dream journal, dream interpreting, AI, dream analysis, dream diary"
        />
        <meta name="author" content="Dreamshape Team" />

        <meta
          property="og:title"
          content="Dreamshape - Dream Journal and Interpreting App with AI"
        />
        <meta
          property="og:description"
          content="Dreamshape is a powerful app for journaling and interpreting your dreams using AI technology. Capture, analyze, and understand your dreams better."
        />
        <meta property="og:url" content="https://dreamshape.app" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://dreamshape.app/images/favicon.ico"
        />

        <link rel="icon" href="/images/favicon.ico" />
        <link rel="canonical" href="https://dreamshape.app" />
      </Head>
      <header className="absolute inset-x-0 top-0 z-10 w-full h-screen">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 h-screen">
          <div className="flex items-center justify-between h-16 lg:h-20 h-screen">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <div className="uppercase w-auto font-semibold text-2xl text-violet-300">
                  Dreamshape
                </div>
              </a>
            </div>

            <div className="hidden lg:flex lg:items-center lg:justify-center flex-grow space-x-4">
              <a
                href="#"
                title=""
                className="text-base text-white transition-all duration-200 hover:text-opacity-80 px-5"
              >
                Features
              </a>
              <a
                href="#"
                title=""
                className="text-base text-white transition-all duration-200 hover:text-opacity-80 px-5"
              >
                Dreams
              </a>
              <a
                href="#"
                title=""
                className="text-base text-white transition-all duration-200 hover:text-opacity-80 px-5"
              >
                Pricing
              </a>
            </div>

            <div className="flex items-center">
              <button
                type="button"
                className="inline-flex items-center p-2 text-sm text-white uppercase transition-all duration-200 bg-black lg:hidden focus:bg-gray-800 hover:bg-gray-800"
              >
                <svg
                  className="block w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <svg
                  className="hidden w-6 h-6 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                Menu
              </button>
              <a
                href="https://play.google.com/store/apps/details?id=com.karlowitz.DreamShape"
                title=""
                className="hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white border-2 border-white hover:bg-gray-300 hover:text-black transition-all duration-200 focus:bg-black focus:text-white"
                role="button"
              >
                {" "}
                Try for free{" "}
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:max-h-[900px] lg:min-h-[900px]">
          <div className="flex items-center justify-center w-full lg:order-2 lg:w-7/12">
            <div className="h-full px-4 pt-24 pb-16 sm:px-6 lg:px-24 2xl:px-32 lg:pt-64 lg:pb-14">
              <div className="flex flex-col justify-between flex-1 h-full">
                <div>
                  <h1 className="text-4xl font-bold text-white sm:text-6xl xl:text-7xl">
                    Discover the Hidden Messages
                    <br />
                    in Your Dreams
                  </h1>
                  <p className="mt-6 text-base text-gray-400 sm:text-xl">
                    Unlock the secrets of your subconscious with Dreamshape. Our
                    AI-powered app helps you interpret and understand your
                    dreams like never before.
                  </p>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.karlowitz.DreamShape"
                    title="Main Download Button"
                    className="inline-flex items-center rounded-lg px-6 py-5 text-base font-semibold text-black transition-all duration-200 bg-[#ffffff] mt-9 hover:bg-[#b497ff] focus:bg-green-400"
                    role="button"
                  >
                    Download now
                  </a>
                </div>

                <div className="mt-8 border-t-2 border-white lg:mt-auto sm:mt-14">
                  <div className="pt-8 sm:flex sm:items-center sm:justify-between sm:pt-14">
                    <p className="text-base font-semibold text-white">
                      App available on
                    </p>

                    <div className="flex items-center mt-5 space-x-5 sm:mt-0">
                      <a
                        href="https://play.google.com/store/apps/details?id=com.karlowitz.DreamShape"
                        title="Play Store Link"
                        className="z-index-20"
                        role="button"
                      >
                        <img
                          className="w-auto rounded h-14 sm:h-16 z-index-10"
                          src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/4/play-store-button.png"
                          alt="Get it on Google Play"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-full overflow-hidden lg:w-5/12 lg:order-1">
            <div className="lg:absolute lg:bottom-0 lg:left-0">
              <img className="w-full" src="/phone2.png" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24 border-y border-gray-200">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-normal tracking-widest uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">
                {" "}
                Our App{" "}
              </span>
            </p>
            <h2 className="mt-6 text-3xl  text-white sm:text-4xl lg:text-5xl xl:text-6xl font-semibold">
              Every Dream Tells a Story
            </h2>
            <p className="mt-6 text-lg font-normal text-gray-400">
              Dreamshape is your companion in exploring the fascinating world of
              dreams. Keep track, interpret, and gain insights into your inner
              self.
            </p>
          </div>

          <div className="grid max-w-4xl grid-cols-2 mx-auto mt-12 text-center gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-5 sm:mt-16 lg:mt-20 sm:gap-x-12">
            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-xl group">
                <div className="absolute inset-0 transition-all duration-200 rounded-xl group-hover:-inset-px bg-gradient-to-r from-gray-50 to-gray-100"></div>
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-xl bg-base-900">
                  <svg
                    className="w-12 h-12 text-gray-400 transition-all duration-200 group-hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mt-6 text-lg font-normal text-white">
                Personalized Insights
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-xl group">
                <div className="absolute inset-0 transition-all duration-200 rounded-xl group-hover:-inset-px bg-gradient-to-r from-gray-50 to-gray-100"></div>
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-xl bg-base-900">
                  <svg
                    className="w-12 h-12 text-gray-400 transition-all duration-200 group-hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mt-6 text-lg font-normal text-white">
                Unlimited Dream Entries
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-xl group">
                <div className="absolute inset-0 transition-all duration-200 rounded-xl group-hover:-inset-px bg-gradient-to-r from-gray-50 to-gray-100"></div>
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-xl bg-base-900">
                  <svg
                    className="w-12 h-12 text-gray-400 transition-all duration-200 group-hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mt-6 text-lg font-normal text-white">
                Instant Notifications
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-xl group">
                <div className="absolute inset-0 transition-all duration-200 rounded-xl group-hover:-inset-px bg-gradient-to-r from-gray-50 to-gray-100"></div>
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-xl bg-base-900">
                  <svg
                    className="w-12 h-12 text-gray-400 transition-all duration-200 group-hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mt-6 text-lg font-normal text-white">
                Custom Categorization
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="relative w-24 h-24 rounded-xl group">
                <div className="absolute inset-0 transition-all duration-200 rounded-xl group-hover:-inset-px bg-gradient-to-r from-gray-50 to-gray-100"></div>
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-xl bg-base-900">
                  <svg
                    className="w-12 h-12 text-gray-400 transition-all duration-200 group-hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mt-6 text-lg font-normal text-white">
                Live Chat Support
              </h3>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-white sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-16 xl:gap-x-24">
            <div className="relative overflow-hidden group lg:order-2 rounded-2xl lg:rounded-3xl transition-all duration-200 hover:-translate-y-1">
              <img
                className="object-cover w-full h-full transition-all duration-200 group-hover:scale-110 z-10"
                src="https://i.imgur.com/vFnpTvJ.png"
                alt=""
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 px-8 py-6">
                <p className="text-lg font-semibold text-white">Boah Noehri</p>
                <p className="text-sm font-normal text-gray-400">
                  Awesome Individual
                </p>
              </div>
            </div>

            <div className="lg:order-1">
              <svg
                className="w-auto text-gray-300 h-9"
                viewBox="0 0 43 35"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M42.28 34.3H26.04C24.4533 29.1667 23.66 23.8467 23.66 18.34C23.66 12.74 25.1067 8.30666 28 5.03999C30.9867 1.68 35.3733 0 41.16 0V7.84C36.4933 7.84 34.16 10.6867 34.16 16.38V19.04H42.28V34.3ZM18.62 34.3H2.38C0.793333 29.1667 0 23.8467 0 18.34C0 12.74 1.44667 8.30666 4.34 5.03999C7.32667 1.68 11.7133 0 17.5 0V7.84C12.8333 7.84 10.5 10.6867 10.5 16.38V19.04H18.62V34.3Z" />
              </svg>
              <blockquote className="mt-8">
                <p className="text-2xl font-medium leading-snug tracking-tight text-gray-900 sm:text-3xl">
                  “Since I started using Dreamshape, I’ve gained profound
                  insights into my subconscious mind.“
                </p>
                <p className="mt-8 text-lg font-normal leading-8 text-gray-600 sm:text-xl sm:leading-9">
                  “Thanks to Dreamshape, I now have a structured way to explore
                  and interpret my dreams, identifying patterns and themes over
                  time. This self-awareness journey has been invaluable,
                  offering me a clearer perspective on my waking life and inner
                  self.“
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
      <section className="overflow-hidden bg-gray-900 ">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid items-stretch gap-12 lg:gap-8 grid-col-1 lg:grid-cols-2">
            <div className="flex items-center justify-center w-full lg:order-2">
              <div className="h-full px-4 pt-12 sm:pt-16 lg:py-20 xl:py-32 sm:px-6 lg:px-8 2xl:px-20">
                <div className="flex flex-col justify-between flex-1 h-full max-w-md mx-auto text-center lg:text-left lg:max-w-none">
                  <p className="text-base font-semibold tracking-widest text-blue-600 uppercase">
                    Download Application
                  </p>
                  <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white lg:mt-8 sm:text-4xl lg:text-5xl">
                    Get our free mobile app now!
                  </h2>
                  <p className="mt-4 text-base font-normal leading-7 text-gray-400 lg:text-lg lg:mt-6 lg:leading-8">
                    Download the app to manage your dreams, keep track of your
                    mood, and complete interpretation without procrastinating.
                  </p>
                  <div className="flex flex-col items-center mt-12 space-y-5 sm:space-y-0 sm:space-x-5 sm:flex-row sm:justify-center lg:justify-start sm:mt-16">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.karlowitz.DreamShape"
                      title=""
                      className="transition-all duration-200 hover:-translate-y-1"
                      target="_blank"
                      rel="noopener"
                    >
                      <img
                        className="object-cover w-auto h-16"
                        src="https://landingfoliocom.imgix.net/store/collection/saasui/images/application/2/play-store.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full overflow-hidden lg:order-1">
              <div className="-mb-48 lg:grid lg:absolute lg:inset-0 lg:mb-0 lg:-mt-12 lg:-ml-4 lg:place-items-center">
                <img className="object-cover w-full" src="/phone3.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
