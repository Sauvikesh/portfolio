import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className="flex flex-col w-full pb-[275px] xs:pb-[84px]">
      <h1 className="pb-20 text-2xl">Selected Work</h1>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-full xs:flex xs:flex-col">
        <Link
          href="https://github.com/HackDavis/website-2024"
          className="bg-[url('/projectImages/HDLanding.png')] bg-cover col-span-2 row-span-1 h-64 flex items-center justify-center relative"
        >
          <Image
            src="/arrow.png"
            alt="arrow"
            width={1000}
            height={1000}
            className="w-12 h-12 absolute bottom-3 right-3"
          />
        </Link>

        <Link
          href="https://github.com/HackDavis/judging-app-2024"
          className="bg-[url('/projectImages/HDJudging.png')] bg-cover col-span-1 row-span-1 h-64 flex items-center justify-center relative"
        >
          <Image
            src="/arrow.png"
            alt="arrow"
            width={1000}
            height={1000}
            className="w-12 h-12 absolute bottom-3 right-3"
          />
        </Link>

        <Link
          href="https://github.com/include-davis/bloom-and-vine"
          className="bg-[url('/projectImages/Include.png')] bg-cover  col-span-1 row-span-1 h-64 flex items-center justify-center relative"
        >
          <Image
            src="/arrow.png"
            alt="arrow"
            width={1000}
            height={1000}
            className="w-12 h-12 absolute bottom-3 right-3"
          />
        </Link>

        <Link
          href="https://github.com/Sauvikesh/sm-website"
          className="bg-[url('/projectImages/Sam.png')] bg-cover col-span-2 row-span-1 h-64 flex items-center justify-center relative"
        >
          <Image
            src="/arrow.png"
            alt="arrow"
            width={1000}
            height={1000}
            className="w-12 h-12 absolute bottom-3 right-3"
          />
        </Link>
      </div>
    </div>
  );
}
