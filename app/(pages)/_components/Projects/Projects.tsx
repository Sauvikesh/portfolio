import Image from 'next/image';

export default function Projects() {
  return (
    <div className="flex flex-col w-full pb-[275px] xs:pb-[84px]">
      <h1 className="pb-[40px] text-2xl">Selected Work</h1>

      <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-full xs:flex xs:flex-col">
        <div className="bg-gray-700 col-span-1 row-span-1 h-64 flex items-center justify-center relative">
          hi
          <Image
            src="/arrow.png"
            alt="arrow"
            width={1000}
            height={1000}
            className="w-12 h-12 absolute bottom-3 right-3"
          />
        </div>
        <div className="bg-gray-700 col-span-1 row-span-1 h-64 flex items-center justify-center relative">
          hi
          <Image
            src="/arrow.png"
            alt="arrow"
            width={1000}
            height={1000}
            className="w-12 h-12 absolute bottom-3 right-3"
          />
        </div>
        <div className="bg-gray-700 col-span-1 row-span-1 h-64 flex items-center justify-center relative">
          hi
          <Image
            src="/arrow.png"
            alt="arrow"
            width={1000}
            height={1000}
            className="w-12 h-12 absolute bottom-3 right-3"
          />
        </div>
        <div className="bg-gray-700 col-span-1 row-span-1 h-64 flex items-center justify-center relative">
          hi
          <Image
            src="/arrow.png"
            alt="arrow"
            width={1000}
            height={1000}
            className="w-12 h-12 absolute bottom-3 right-3"
          />
        </div>
        <div className="bg-gray-700 col-span-2 row-span-1 h-64 flex items-center justify-center relative">
          hi
          <Image
            src="/arrow.png"
            alt="arrow"
            width={1000}
            height={1000}
            className="w-12 h-12 absolute bottom-3 right-3"
          />
        </div>
      </div>
    </div>
  );
}
