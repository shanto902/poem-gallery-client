import { useState } from "react";

const SubscribeNow = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your logic to handle form submission (e.g., send email to backend)
    console.log("Email submitted:", email);
    setEmail(""); // Clear the input field after submission
  };

  return (
    <section className="py-10 text-center bg-base-100">
      <div className="container max-w-3xl mx-auto">
        <h2 className="mb-4 text-3xl font-bold">Subscribe Now</h2>
        <p className="mb-6">
          Subscribe to our newsletter to receive updates and new poems directly
          in your inbox!
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center"
        >
          <input
            type="email"
            className="p-3 text-gray-800 border rounded-none"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="px-6 py-3 font-bold text-white rounded-none btn btn-success hover:bg-primary-light"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeNow;
