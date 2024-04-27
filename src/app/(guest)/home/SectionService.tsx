import Button from "@/components/guest/Button";
import Title from "@/components/guest/Title";

type ServiceItemProps = { icon: string; title: string; description: string };
const ServiceItem = ({ icon, title, description }: ServiceItemProps) => {
  return (
    <div className="col-span-3 lg:col-span-1 justify-center p-4">
      <div className="bg-primary border-[1px] rounded-full w-[100px] h-[100px] mx-auto content-center mb-5">
        <img
          src={`/images/${icon}.png`}
          alt={"Item Icon " + icon}
          className="w-[40px] h-auto block mx-auto"
        />
      </div>
      <h6 className="font-bold text-center mb-2">{title}</h6>
      <p className="text-center">{description}</p>
    </div>
  );
};

export default function SectionService() {
  return (
    <section id="section-service">
      <div className="container mx-auto px-2">
        <div className="grid grid-cols-12 gap-4 items-center justify-center">
          <div className="col-span-12 lg:col-span-8">
            <Title main="Our" second="Services" className="mb-5" />
            <div className="grid grid-cols-3">
              <ServiceItem
                icon={"s-1"}
                title={"Pet Shop"}
                description={
                  "onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe"
                }
              />
              <ServiceItem
                icon={"s-2"}
                title={"Pet Hotel"}
                description={
                  "onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe"
                }
              />
              <ServiceItem
                icon={"s-3"}
                title={"Emergency"}
                description={
                  "onsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe"
                }
              />
            </div>
            <Button
              className="mt-5 block mx-auto lg:inline-block"
              title={"Read More"}
              color={"green"}
            />
          </div>
          <div className="hidden lg:block col-span-4">
            <img
              src="/images/tool.png"
              alt="Tools"
              className="w-[100%] items-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
