const InformationItem = ({ icon, label, href }: any) => {
  return (
    <div className="col-span-3 md:col-span-1">
      <a
        href={href}
        target="_blank"
        className="flex flex-col justify-center text-center"
      >
        <span className="material-icons text-white">{icon}</span>
        <span className="block text-white pt-5">{label}</span>
      </a>
    </div>
  );
};

export default function SectionInformation() {
  return (
    <section id="section-information">
      <div className="container my-12">
        <div className="grid grid-cols-3 justify-between items-center">
          <InformationItem icon="place" label="Location" href="#" />
          <InformationItem icon="call" label="+02 1234567890" href="#" />
          <InformationItem icon="email" label="demo@gmail.com" href="#" />
        </div>
      </div>
    </section>
  );
}
