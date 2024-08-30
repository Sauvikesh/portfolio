import Image from 'next/image';

export default function Bio() {
  return (
    <div className="flex items-center gap-10">
      <Image
        src="/me.png"
        alt="picture of me :D"
        width={1000}
        height={1000}
        className="w-[400px] h-auto"
      />
      <p>
        Hello! 👋🏽 <br></br> <br></br>
        I'm a software engineer with experience in Full-stack Web development
        and iOS mobile app development. I love collaborating with others,
        writing clean code, and building stable products! I'm always trying to
        learn new technologies or improve what I am already proficient at.
      </p>
    </div>
  );
}
