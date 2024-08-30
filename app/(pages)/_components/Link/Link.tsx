import Link from 'next/link';
import Image from 'next/image';

export type LinkBlockProps = {
  text?: string;
  url: string;
  img: string;
};

export default function LinkBlock(props: LinkBlockProps) {
  const { text, url, img } = props;

  return (
    <Link href={url}>
      <div className="flex min-h-11 items-center justify-center bg-[#404040] text-white pt-[10px] pb-[10px] pl-[16px] pr-[16px] rounded-[100px] gap-2">
        <Image
          src={img}
          alt="dummy text :)"
          width={1000}
          height={100}
          className="w-5 h-5"
        />
        {text && <p>{text}</p>}
      </div>
    </Link>
  );
}
