import Button from "@/components/guest/Button";
import Title from "@/components/guest/Title";

export default function SectionAbout() {
  return (
    <section id="section-about">
      <div className="container mx-auto px-12">
        <div className="grid grid-cols-12 gap-4 items-center justify-center">
          <div className="col-span-12 md:col-span-6">
            <img
              src="/images/about.png"
              alt="About Image"
              className="items-center mx-auto my-auto"
            />
          </div>
          <div className="col-span-12 md:col-span-6">
            <Title main="About Our Pets" second="Clinic" className="mb-5" />
            <p className="mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry{"'"}s standard dummy
              text ever since theLorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry{"'"}s standard dummy text ever since the
            </p>
            <Button title="About More" color="green" />
          </div>
        </div>
      </div>
    </section>
  );
}
