// import Image from 'next/image';
import Bio from './_components/Bio/Bio';
import Footer from './_components/Footer/Footer';
import Line from './_components/Line/Line';
import LinkBlock, { LinkBlockProps } from './_components/Link/Link';

export default function Home() {
  const Links: LinkBlockProps[] = [
    {
      text: 'Resume',
      url: 'https://www.linkedin.com/feed/',
      img: '/socials/resume.svg',
    },
    {
      text: 'GitHub',
      url: 'https://www.linkedin.com/feed/',
      img: '/socials/github.png',
    },
    {
      text: 'Email',
      url: 'https://www.linkedin.com/feed/',
      img: '/socials/email.svg',
    },
    {
      url: 'https://www.linkedin.com/feed/',
      img: '/socials/linkedin.png',
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center bg-black text-white pt-60 pr-[21%] pl-[21%]">
      <header className="flex flex-col justify-center items-center">
        <h1 className="text-[128px] font-semibold">Sauvikesh Lal</h1>

        <div className="flex gap-4">
          {Links.map((link, index) => (
            <LinkBlock
              text={link.text}
              url={link.url}
              key={index}
              img={link.img}
            />
          ))}
        </div>
      </header>
      <Line />
      <Bio />
      <Line />
      <Footer />
    </main>
  );
}
