import { Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";
import PoemsShowcase from "../components/PoemsShowcase";
import SubscribeNow from "../components/SubscribeNow";
import Testimonial from "../components/Testimonial";
import PaddingContainer from "../components/PaddingContainer";
import PoetSection from "../components/PoetSection";

const Home = () => {
  const testimonials = [
    {
      content:
        "This website has a wonderful collection of poems. I enjoy reading here every day!",
      author: "John Doe",
    },
    {
      content:
        "The poems are beautifully curated. I love the simplicity and depth in each piece.",
      author: "Jane Smith",
    },
  ];
  return (
    <>
      <HeroSection />
      <PoemsShowcase />
      <section className="py-10 text-center bg-base-200">
        <div className="container max-w-3xl px-8 mx-auto">
          <h2 className="mb-4 text-3xl font-bold">Explore More Poems</h2>
          <p className="mb-6">
            Dive deeper into our collection of poems and discover more inspiring
            pieces.
          </p>
          <Link
            to="/all-poems"
            className="px-6 py-3 font-bold bg-white rounded-none btn hover:bg-primary-light"
          >
            Explore All Poems
          </Link>
        </div>
      </section>

      <PoetSection />

      <div className="pt-5 mx-auto mt-10 bg-base-200 ">
        <PaddingContainer>
          <h2 className="my-2 text-3xl font-bold text-center">Testimonials</h2>
          <div className="grid grid-cols-1 gap-8 py-5 pb-5 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} testimonial={testimonial} />
            ))}
          </div>
        </PaddingContainer>

        <SubscribeNow />
      </div>
    </>
  );
};

export default Home;
