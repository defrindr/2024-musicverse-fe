import Button from "@/components/guest/Button";
import Slider from "react-slick";

const SliderItem = () => {
  return (
    <div className="grid grid-cols-12 p-5 gap-2 items-center">
      <div className="md:col-span-2" />
      <div className="col-span-12 md:col-span-4">
        <span className="block text-lg md:text-xl lg:text-5xl text-white mb-3">
          Professional
        </span>
        <span className="block text-xl md:text-2xl lg:text-6xl font-bold text-gray-700">
          Care Your Pet
        </span>
        <p className="text-sm py-4 lg:py-12 text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry{"'"}s standard dummy text
          ever
        </p>
        <div className="flex-start">
          <Button title="Contact" color="white" />
        </div>
      </div>
      <div className="hidden md:block md:col-span-5">
        <img
          src="/images/slider-img.png"
          alt="Slider"
          className="w-[100%] align-middle"
        />
      </div>
      <div />
    </div>
  );
};

export default function SectionHero() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <header>
      {/* <Slider {...settings}> */}
      <SliderItem />
      {/* <SliderItem />
        <SliderItem />
        <SliderItem />
      </Slider> */}
    </header>
  );
}
