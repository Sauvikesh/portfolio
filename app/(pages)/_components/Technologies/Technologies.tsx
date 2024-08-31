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
    { icon: <FaHtml5 size={102} />, text: 'HTML' },
    {
      icon: <RiTailwindCssFill size={102} />,
      text: 'Tailwind',
    },
    {
      icon: <SiTypescript size={102} />,
      text: 'Typescript',
    },
    {
      icon: <FaSwift size={102} />,
      text: 'Swifty',
    },
    { icon: <FaReact size={102} />, text: 'ReactJS' },
    { icon: <RiNextjsFill size={102} />, text: 'NextJS' },
    { icon: <FaCss3Alt size={102} />, text: 'CSS' },
    {
      icon: <SiSass size={102} />,
      text: 'Sass',
    },
    { icon: <FaNode size={102} />, text: 'NodeJS' },
    { icon: <SiMongodb size={102} />, text: 'MongoDB' },
    { icon: <FaDocker size={102} />, text: 'Docker' },
  ];

  return (
    <div className="relative flex gap-6 flex-wrap justify-center pb-28 space-x-4 bg-black">
      {techLogos.map((logo, index) => (
        <TechLogo {...logo} key={index} />
      ))}
    </div>
  );
}
