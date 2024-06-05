/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper/modules";

const sliderData = [
  {
    title: "Welcome to Poem Gallery",
    description:
      " Step into a sanctuary of words, where every verse tells a story and every line paints a picture. At Poem Gallery, we invite you to explore the boundless beauty of poetry. From timeless classics to contemporary masterpieces, embark on a journey through the corridors of creativity and imagination.",
    backgroundImageURL:
      "https://unsplash.com/photos/2JIvboGLeho/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fGJvb2tzfGVufDB8fHx8MTcxNzU5NjEzOHww&force=true&w=1920",
  },
  {
    title: "Discover Poetry's Tapestry",
    description:
      "Step into a sanctuary of words, where every verse tells a story and every line paints a picture. At Poem Gallery, we invite you to explore the boundless beauty of poetry. From timeless classics to contemporary masterpieces, embark on a journey through the corridors of creativity and imagination.",
    backgroundImageURL:
      "https://unsplash.com/photos/hjwKMkehBco/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTZ8fFBvZXRyeSUyN3MlMjBUYXBlc3RyeXxlbnwwfHx8fDE3MTc1OTczMDZ8MA&force=true&w=1920",
  },
  {
    title: "Join Our Literary Community",
    description:
      " Become a part of a thriving community of poetry enthusiasts and wordsmiths at Poem Gallery. Engage in thought-provoking discussions, share your own compositions, and connect with fellow poets from around the world. Whether you're a seasoned writer or an avid reader, there's a place for you in our warm and welcoming community.",
    backgroundImageURL:
      "https://unsplash.com/photos/KdeqA3aTnBY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTV8fExpdGVyYXJ5JTIwQ29tbXVuaXR5fGVufDB8fHx8MTcxNzU5NzMzOHww&force=true&w=1920",
  },
];

const HomeSlider = () => {
  return (
    <Swiper
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
      className="w-full h-full mySwiper "
    >
      {sliderData.map((slider, i) => (
        <SwiperSlide key={i}>
          <div className="relative flex items-center justify-center h-full overflow-hidden">
            {/* Background Image */}
            <img
              className="absolute inset-0 object-cover w-full h-full"
              src={slider.backgroundImageURL}
              alt=""
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-white opacity-50"></div>

            {/* Content */}
            <div className="z-20 space-y-5 text-black max-w-7xl">
              <h2 className="text-4xl font-bold drop-shadow-xl ">
                {slider.title}
              </h2>
              <p className="text-lg drop-shadow">{slider.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomeSlider;
