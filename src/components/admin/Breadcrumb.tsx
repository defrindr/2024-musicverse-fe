import Link from "next/link";

type BreadcrumbLinkType = {
  href: string;
  label: string;
};
type BreadcrumbType = {
  title?: string;
  description?: string;
  links?: BreadcrumbLinkType[];
};
export default function Breadcrumb(props: BreadcrumbType) {
  return (
    <div className="breadcrumb">
      <div>
        <h3 className="breadcrumb-title">{props.title}</h3>
        <span className="block mt-3 text-gray-500">{props.description}</span>
      </div>
      {/* <ul className="breadcrumb-items">
        <li>
          <Link href={"/admin/dashboard"}>
            <span className="material-icons">home</span>
            <span>Home</span>
          </Link>
        </li>
        {props.links?.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul> */}
    </div>
  );
}
