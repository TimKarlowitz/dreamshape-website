// Import React and Next.js components
import { Footer } from "@/Components/Footer";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Privacy Policy for Dreamshape</title>
        <meta charset="UTF-8" />
      </Head>

      <main className="my-10">
        <h1 className="text-3xl font-bold text-gray-900">
          Privacy Policy for Dreamshape
        </h1>
        <p className="mt-2 text-gray-600">Last Updated: 16.01.2024</p>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">Introduction:</h2>
          <p className="mt-2">
            Welcome to Dreamshape. This privacy policy explains how we collect,
            use, share, and protect your personal information in connection with
            your use of our mobile application, Dreamshape, (“App”).
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">Data Controller:</h2>
          <p className="mt-2">
            Tim Karlowitz is the data controller for the personal data processed
            through the App.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">
            What Data We Collect:
          </h2>
          <ol className="list-decimal pl-5 mt-2">
            <li>
              <strong>Email Address:</strong> We collect your email address when
              you create an account on our App.
            </li>
            <li>
              <strong>Password:</strong> We collect a password that you create
              for securing your account.
            </li>
          </ol>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Purpose of Data Collection:
          </h2>
          <p className="mt-2">
            Your email address and password are used for the purpose of
            authenticating and managing your account in the App.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Sharing of Your Data:
          </h2>
          <p className="mt-2">
            We use Google Firebase as our authentication provider. Therefore,
            your email address and password are shared with Google Firebase for
            authentication purposes.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">Data Security:</h2>
          <p className="mt-2">
            We take reasonable steps to protect your personal data from
            unauthorized access, use, or disclosure. However, no internet
            transmission is ever completely secure or error-free.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">Your Rights:</h2>
          <p className="mt-2">
            Under the GDPR, you have the right to access, rectify, port, and
            erase your data. You also have the right to object to and restrict
            certain processing of your data.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">
            Changes to this Privacy Policy:
          </h2>
          <p className="mt-2">
            We may update this privacy policy from time to time. The latest
            version will always be posted on our website.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-2xl font-bold text-gray-900">Contact Us:</h2>
          <p className="mt-2">
            For any questions or concerns regarding your privacy, please contact
            us at tim.karlowitz@gmail.com.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
