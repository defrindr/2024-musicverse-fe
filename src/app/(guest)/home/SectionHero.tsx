import Button from "@/components/guest/Button";
import Slider from "react-slick";

const SliderItem = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-2 items-center">
        <div className="col-span-1 md:col-span-2" />
        <div className="col-span-4 md:col-span-4">
          <span className="block text-lg md:text-xl lg:text-[64px] lg:leading-[72px] text-white mb-3 font-bold">
            Virtual Stage
            <br />
            for Music
            <br />
            Talents
          </span>
        </div>
        <div className="col-span-7 md:block md:col-span-6">
          <img
            src="/images/guest/hero.png"
            alt="Slider"
            className="w-[100%] align-middle"
          />
        </div>
        <div />
      </div>
      <div className="flex justify-center items-center italic text-xs">
        <span className="text-center block">
          More than 1000 people have joined the platform
        </span>
      </div>
    </>
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
