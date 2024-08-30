import Link from 'next/link';

export type LinkBlockProps = {
  text: string;
  url: string;
};

export default function LinkBlock(props: LinkBlockProps) {
  const { text, url } = props;

  return (
    <Link href={url}>
      <div>{text}</div>
    </Link>
  );
}
