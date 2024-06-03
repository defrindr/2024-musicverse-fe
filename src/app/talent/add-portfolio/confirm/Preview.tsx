import Link from "next/link";

export default function PreviewComponent() {
  return (
    <div className="grid grid-cols-5 gap-4 lg:gap-10">
      {/*  */}
      <div className="col-span-4 md:col-span-2">
        <img
          src="/images/admin/album_pict.png"
          alt=""
          className="w-[200px] h-auto md:w-full"
        />
      </div>
      {/*  */}
      <div className="col-span-4 md:col-span-3">
        <div className="grid grid-cols-2 gap-8">
          <SpanTitle
            className="col-span-2"
            title="Release Title"
            value="I Love You 3000"
          />
          <SpanTitle className="col-span-1" title="Key" value="C Minor" />
          <SpanTitle
            className="col-span-1"
            title="BMP (Beats Per Meanute)"
            value="100 BMP"
          />
          <SpanTitle className="col-span-2" title="Genre" value="Pop" />
          <SpanTitle className="col-span-2" title="Language" value="English" />

          <div className="col-span-1">
            <span className="block text-white font-light text-base capitalize mb-2">
              Music
            </span>
            <Link
              className="text-primary text-[20px] flex gap-2 items-center"
              href={"#"}
            >
              <img
                src="/images/admin/add-portfolio/mp3.svg"
                alt="mp3"
                className="w-[32px]"
              />
              I Love You 3000
            </Link>
          </div>

          <div className="col-span-1">
            <span className="block text-white font-light text-base capitalize mb-2">
              Showreal Video
            </span>
            <Link
              className="text-primary text-[20px] flex gap-2 items-center italic"
              href={"#"}
            >
              <img
                src="/images/admin/add-portfolio/link.svg"
                alt="mp3"
                className="w-[32px]"
              />
              www.xxxxxx.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const SpanTitle = ({
  title,
  value,
  className,
}: {
  title: string;
  value: string;
  className: string;
}) => {
  return (
    <div className={`${className}`}>
      <span className="block text-white font-light text-base capitalize mb-2">
        {title}
      </span>
      <span className="block text-white font-semibold text-[32px]">
        {value}
      </span>
    </div>
  );
};
