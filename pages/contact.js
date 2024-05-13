import { Footer } from "@/Components/Footer";
import Header from "./Header";

export default function ContactSection() {
  return (
    <section id="contact" className="flex flex-col">
      <div>
        <Header />
      </div>
      <h2 className="text-2xl font-bold text-white-700 pl-4">Contact</h2>
      <div className="mt-2  pl-4">
        <h3 className="font-semibold text-gray-700 pt-5">Name</h3>
        <p>Tim Karlowitz</p>

        <h3 className="font-semibold text-gray-700 pt-5">Address</h3>
        <p>Wilhelmstraße 47</p>
        <p> 74074 Heilbronn</p>
        <p>Germany</p>

        <h3 className="font-semibold text-gray-700 pt-5">Phone</h3>
        <p>
          <a
            href="tel:+4915737096931"
            className="text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out"
          >
            015737096931
          </a>
        </p>

        <h3 className="font-semibold text-gray-700 pt-5">Email</h3>
        <p>
          <a
            href="mailto:tim.karlowitz@gmail.com"
            className="text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out"
          >
            tim.karlowitz@gmail.com
          </a>
        </p>
      </div>
      <Footer />
    </section>
  );
}
