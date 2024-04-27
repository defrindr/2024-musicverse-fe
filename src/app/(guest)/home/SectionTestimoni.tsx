import Title from "@/components/guest/Title";
import Slider from "react-slick";

const SliderTestimoniItem = ({
  name = null,
  content = null,
  image = null,
}: any) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-center mx-4 md:mx-14 mt-[8rem] p-5 md:p-8 border-[1px] border-black min-h-[250px]">
      <div className="mt-[-100px] md:mt-0 mb-5 w-[150px] h-[150px] block mx-auto md:mx-0 md:ml-[-75px]">
        <img
          src={image ?? "/images/client.jpg"}
          alt=""
          className="w-[100%] h-[100%]"
        />
      </div>
      <div className="md:pl-4 flex-1 flex-col">
        <span className="text-lg mb-2 block">{name ?? "Sandy Mark"}</span>
        <p className="text-sm">
          {content ??
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"}
        </p>
      </div>
    </div>
  );
};

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function SectionTestimoni() {
  return (
    <section id="section-testimoni">
      <div className="container mx-auto p-2 md:p-14">
        <Title
          className="block text-center mb-2"
          main="What Say Our"
          second="clients"
        />
        <span className="text-sm block text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut la
        </span>

        <Slider {...settings}>
          <SliderTestimoniItem />
          <SliderTestimoniItem />
          <SliderTestimoniItem />
          <SliderTestimoniItem />
        </Slider>
      </div>
    </section>
  );
}
