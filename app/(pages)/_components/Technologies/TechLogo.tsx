import { RiNextjsFill } from 'react-icons/ri';

export default function TechLogo() {
  return (
    <div className="relative hover:scale-125 transition-transform duration-300">
      <div className="icon-wrapper group relative">
        <p className="w-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-12 transition-all duration-300 absolute bg-[#404040] text-white pt-[10px] pb-[10px] pl-[16px] pr-[16px] rounded-[100px] text-center">
          NextJS
        </p>
        <RiNextjsFill size={102} />
      </div>
    </div>
  );
}
