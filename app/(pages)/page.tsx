// import Image from 'next/image';
import Bio from './_components/Bio/Bio';
import Experience from './_components/Experience/Experience';
import Footer from './_components/Footer/Footer';
import Line from './_components/Line/Line';
import LinkBlock, { LinkBlockProps } from './_components/Link/Link';
import Technologies from './_components/Technologies/Technologies';

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
    <main className="flex flex-col items-center justify-center bg-black text-white pt-60 pr-[21%] pl-[21%] xs:pr-[27px] xs:pl-[27px]">
      <header className="flex flex-col justify-center items-center">
        <h1 className="text-[128px] font-semibold xs:text-5xl xs:pb-[84px]">
          Sauvikesh Lal
        </h1>

        <div className="flex gap-4 xs:flex-wrap xs:justify-center">
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
      <Technologies />
      <Experience />
      <Line />

      <Footer />
    </main>
  );
}
