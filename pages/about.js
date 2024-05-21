import { Footer } from "@/Components/Footer";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-gray-950 to-gray-900 py-10 md:py-20">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-10 text-violet-300">
          About Dreamshape
        </h1>
        <div className="space-y-12">
          <section className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 text-center">
              Our Mission
            </h2>
            <p className="text-gray-600 mt-4 text-center">
              At Dreamshape, we believe that dreams hold the key to
              understanding our deepest selves. Our mission is to empower you to
              unlock the hidden messages in your dreams, offering a journey of
              self-discovery and personal growth through advanced AI technology.
            </p>
          </section>
          <section className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 text-center">
              The Story Behind Dreamshape
            </h2>
            <p className="text-gray-600 mt-4 text-center">
              In a world where traditional sources of meaning and validation are
              fading, Dreamshape was born from a desire to bridge the gap
              between the subconscious mind and conscious understanding. Since
              its inception in 2022, our app has helped thousands of users
              explore their dreams and gain profound insights into their inner
              lives.
            </p>
          </section>
          <section className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 text-center">
              Finding Meaning in a Modern World
            </h2>
            <p className="text-gray-600 mt-4 text-center">
              As society progresses, many people are moving away from
              traditional religious practices, seeking new ways to find meaning
              and validation in their lives. Dreams, once considered mere
              reflections of daily experiences, are now seen as gateways to the
              unconscious mind. Dreamshape allows you to delve into this realm,
              uncovering patterns and meanings that can offer profound personal
              insights and a deeper understanding of your place in the world.
            </p>
          </section>
          <section className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 text-center">
              What We Offer
            </h2>
            <p className="text-gray-600 mt-4 text-center">
              Dreamshape isn’t just an app; it&apos;s your personal guide to the
              world of dreams. With our state-of-the-art AI, you can journal,
              analyze, and interpret your dreams effortlessly, uncovering
              patterns and meanings that can transform your waking life.
            </p>
          </section>
          <section className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 text-center">
              Join Our Community
            </h2>
            <p className="text-gray-600 mt-4 text-center">
              Become part of a growing community of dreamers who are on a path
              to self-discovery. Share your experiences, learn from others, and
              see how Dreamshape can illuminate the unseen aspects of your life.
            </p>
          </section>
          <section className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-blue-600 text-center">
              The Team Behind the Magic
            </h2>
            <p className="text-gray-600 mt-4 text-center">
              Dreamshape is brought to you by Karlowitz Studios, a team of
              dedicated experts in AI, machine learning, and big data. While our
              focus is on you and your dreams, our story begins with a shared
              passion for innovation and excellence.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
