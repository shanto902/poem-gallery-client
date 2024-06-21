import HomeSlider from "./HomeSlider";

const HeroSection = () => {
  return (
    <div className=" -mt-[70px] hero min-h-[70vh] w-full overflow-hidden ">
      <div className="flex w-screen h-full text-center ">
        <HomeSlider />
      </div>
    </div>
  );
};

export default HeroSection;
