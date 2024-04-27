export type OptionType = {
  title: string;
  description: string;
  icon: string;
  active?: boolean
};

export default function Option(props: OptionType) {
  return (
    <div className={`border-[1px] rounded-md  py-6 px-5 relative pr-[106px] ${props.active ? 'border-gray-500' : 'border-gray-700'}`}>
      <span className={`block font-bold text-lg mb-2 uppercase ${props.active ? 'text-white' : 'text-gray-700'}`}>{props.title}</span>
      <span className={`block text-sm capitalize ${props.active ? 'text-white' : 'text-gray-700'}`}>{props.description}</span>
      <img src={props.icon} alt="" className="absolute hidden sm:block top-[18.17px] right-[18.17px] w-[86.29px] h-[72.67px]" />
    </div>
  )
}