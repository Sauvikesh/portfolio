import Image from 'next/image';
import { RevealWrapper } from '../Reveal/RevealWrapper';

export default function Bio() {
  return (
    <RevealWrapper>
      <div className="flex items-center gap-10 xs:flex-col">
        <Image
          src="/sauvikesh.png"
          alt="picture of me :D"
          width={1000}
          height={1000}
          className="w-[400px] h-auto"
        />
        <p>
          Hello! 👋🏽 <br></br> <br></br>
          I'm a software engineer with experience in Full-stack Web development
          and iOS mobile app development. I love collaborating with others,
          writing clean code, and learning new skills!
        </p>
      </div>
    </RevealWrapper>
  );
}
