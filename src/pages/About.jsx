import PaddingContainer from "../components/PaddingContainer";

/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div>
      <div className="min-h-[70vh] py-10">
        <PaddingContainer>
          <h2 className="my-5 text-3xl font-bold text-center">About Us</h2>
          <p className="px-4 mb-8 text-lg text-center md:px-8 lg:px-16">
            Welcome to our poetic sanctuary, where words dance on the delicate
            threads of emotion and thought, inviting you to embark on a journey
            through the realms of human experience. Our collection of poems is a
            tapestry woven from the whispers of the heart and the echoes of the
            soul. Each verse is a window into the depths of human existence,
            exploring love, loss, hope, and resilience with profound intimacy
            and candor. From the gentle lullabies of nature to the thunderous
            cadence of revolution, our poets paint vivid portraits of life's
            myriad shades, inviting you to pause, reflect, and discover the
            beauty in vulnerability. Whether you seek solace in solitude or
            communion in shared sentiment, our poems stand as beacons of light
            in the darkness, offering solace, inspiration, and a glimpse of the
            extraordinary in the ordinary. Dive into our collection and let the
            magic of words illuminate your path.
          </p>{" "}
        </PaddingContainer>
      </div>
    </div>
  );
};

export default About;
