export default function ContactSection() {
  return (
    <section id="contact" className="py-8">
      <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
      <p className="mt-2">
        Main contact:{" "}
        <a
          href="mailto:tim.karlowitz@gmail.com"
          className="text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out"
        >
          tim.karlowitz@gmail.com
        </a>
      </p>
    </section>
  );
}
