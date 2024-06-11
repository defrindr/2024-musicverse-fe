import Title from "@/components/guest/Title";

export default function SectionDiscover() {
  return (
    <section id="section-discover">
      <div className="container mx-auto px-12 py-12">
        <div className="grid grid-cols-12 gap-4 items-center justify-center">
          <div className="col-span-12 md:col-span-12">
            <Title
              main="Discover the Musicverse"
              second="Experience"
              className="mb-5 lg:mb-10 text-center lg:w-[580px] self-center m-auto block"
            />
            <p className="mb-5 text-center">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
