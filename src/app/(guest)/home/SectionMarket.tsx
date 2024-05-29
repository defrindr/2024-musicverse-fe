import Title from "@/components/guest/Title";

export default function SectionMarket() {
  return (
    <section id="section-market">
      <div className="container mx-auto py-12 px-12">
        <div className="grid grid-cols-12 gap-5 items-center">
          <div className="col-span-12 lg:col-span-5">
            <Title
              main="Help market and distribute music"
              className="mb-5 lg:mb-10"
            />
            <p className="text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="col-span-0 lg:col-span-1"></div>
          <div className="col-span-12 lg:col-span-6">
            <img
              src="images/guest/market.png"
              alt="Market"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
