import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import {
  FaHtml5,
  FaSwift,
  FaReact,
  FaCss3Alt,
  FaNode,
  FaDocker,
} from 'react-icons/fa';
import { SiTypescript, SiSass, SiMongodb } from 'react-icons/si';
import TechLogo, { TechLogoProps } from './TechLogo';

// TODO: CAN I CHANE THE COLORS OF THE ICONS TO BE WHITE?@?!?!?!?!? PLEASE
export default function Technologies() {
  const techLogos: TechLogoProps[] = [
    {
      icon: <FaHtml5 className="w-[102px] h-[102px] xs:h-[76px] xs:w-[76px]" />,
      text: 'HTML',
    },
    {
      icon: (
        <RiTailwindCssFill className="w-[102px] h-[102px] xs:h-[76px] xs:w-[76px]" />
      ),
      text: 'Tailwind',
    },
    {
      icon: (
        <SiTypescript className="w-[102px] h-[102px] xs:h-[76px] xs:w-[76px]" />
      ),
      text: 'Typescript',
    },
    {
      icon: <FaSwift className="w-[102px] h-[102px] xs:h-[76px] xs:w-[76px]" />,
      text: 'Swifty',
    },
    {
      icon: <FaReact className="w-[102px] h-[102px] xs:h-[76px] xs:w-[76px]" />,
      text: 'ReactJS',
    },
    {
      icon: (
        <RiNextjsFill className="w-[102px] h-[102px] xs:h-[76px] xs:w-[76px]" />
      ),
      text: 'NextJS',
    },
    {
      icon: (
        <FaCss3Alt className="w-[102px] h-[102px] xs:h-[76px] xs:w-[76px]" />
      ),
      text: 'CSS',
    },
    {
      icon: <SiSass className="w-[102px] h-[102px] xs:h-[76px] xs:w-[76px]" />,
      text: 'Sass',
    },
    {
      icon: <FaNode className="w-[102px] h-[102px] xs:h-[76px] xs:w-[76px]" />,
      text: 'NodeJS',
    },
    {
      icon: (
        <SiMongodb className="w-[102px] h-[102px] xs:h-[76px] xs:w-[76px]" />
      ),
      text: 'MongoDB',
    },
    {
      icon: (
        <FaDocker className="w-[102px] h-[102px] xs:h-[76px] xs:w-[76px]" />
      ),
      text: 'Docker',
    },
  ];

  return (
    <div className="relative flex gap-6 xs:gap-5 flex-wrap justify-center pb-28 space-x-4 bg-black h-[400px] max-w-[]">
      {techLogos.map((logo, index) => (
        <TechLogo {...logo} key={index} />
      ))}
    </div>
  );
}
