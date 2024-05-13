export default function About() {
  return (
    <div className="bg-gray-100 py-10 md:py-20">
      <div className="max-w-6xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-10">
          About Karlowitz Studios
        </h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-gray-600">
              At Karlowitz Studios, our mission is to develop innovative apps
              that provide real value, enhancing daily experiences and making
              technology and AI accessible for everyone.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="text-gray-600">
              Founded in 2022, Karlowitz Studios has grown from a small team of
              passionate developers to a leading force in app development,
              consistently pushing the boundaries of technology.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Meet the Team</h2>
            <p className="text-gray-600">
              Our team of experts brings together years of experience in
              software development, design, and innovation to deliver
              outstanding solutions.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Our Expertise</h2>
            <p className="text-gray-600">
              We specialize in a range of technologies including AI, Machine
              Learning and Big Data, ensuring that our applications are at the
              forefront of the industry.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
