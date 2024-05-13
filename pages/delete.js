import { Footer } from "@/Components/Footer";

export default function AccountDeletionInstructions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900">Instructions</h1>
      <p className="mt-4">
        To delete your Dreamshape Account, please follow the instructions below:
      </p>
      <ol className="list-decimal pl-5 mt-4">
        <li>
          Open your email client or webmail service with the same Account as
          your to-delete Dreamshape Account.
        </li>
        <li>Create a new email.</li>
        <li>
          Enter &quot;tim.karlowitz@gmail.com&quot; in the recipient field.
        </li>
        <li>
          Write your message in the body of the email, confirming your
          intentions to delete your Dreamshape Account.
        </li>
        <li>Click the send button to send your request.</li>
      </ol>
      <p className="mt-4">
        Alternatively, you can directly{" "}
        <a
          href="mailto:tim.karlowitz@gmail.com?subject=Dreamshape%20Account%20Deletion%20Request"
          className="text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out"
        >
          click here{" "}
        </a>
        to compose your email.
      </p>
      <Footer />
    </div>
  );
}
