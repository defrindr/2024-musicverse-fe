import Title from "@/components/guest/Title";

export default function SectionGallery() {
  return (
    <section id="section-gallery">
      <div className="container mx-auto py-12 px-12">
        <Title main="Our Gallery" trueColor="text-white" className="mb-8" />
        <div className="grid grid-cols-3 gap-4 justify-center">
          <div className="col-span-3 sm:col-span-1">
            <img
              className="w-[100%] h-[100%]"
              src="/images/g-1.png"
              alt="Gallery 1"
            />
          </div>
          <div className="col-span-3 sm:col-span-2">
            <img
              className="w-[100%] h-[100%]"
              src="/images/g-2.png"
              alt="Gallery 2"
            />
          </div>
          <div className="col-span-3 sm:col-span-1">
            <img
              className="w-[100%] h-[100%]"
              src="/images/g-3.png"
              alt="Gallery 3"
            />
          </div>
          <div className="col-span-3 sm:col-span-1">
            <img
              className="w-[100%] h-[100%]"
              src="/images/g-4.png"
              alt="Gallery 4"
            />
          </div>
          <div className="col-span-3 sm:col-span-1">
            <img
              className="w-[100%] h-[100%]"
              src="/images/g-5.png"
              alt="Gallery 5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
