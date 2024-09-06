// import Image from 'next/image';
import Bio from './_components/Bio/Bio';
import Experience from './_components/Experience/Experience';
import Footer from './_components/Footer/Footer';
import Line from './_components/Line/Line';
import LinkBlock, { LinkBlockProps } from './_components/Link/Link';
import Projects from './_components/Projects/Projects';
import Technologies from './_components/Technologies/Technologies';
import { NameTyping } from './_components/NameTyping';

export default function Home() {
  const Links: LinkBlockProps[] = [
    {
      text: 'Resume',
      url: 'https://drive.google.com/file/d/1Hprbk0mSUvdqDy1_2tmP7Rtr9s6Gks0i/view?usp=drive_link',
      img: '/socials/resume.svg',
    },
    {
      text: 'GitHub',
      url: 'https://github.com/Sauvikesh',
      img: '/socials/github.png',
    },
    {
      text: 'Email',
      url: 'sauviklal@gmail.com',
      img: '/socials/email.svg',
      email: true,
    },
    {
      url: 'https://www.linkedin.com/in/sauvikesh-lal/',
      img: '/socials/linkedin.png',
    },
  ];

  return (
    <main className="flex flex-col items-center  bg-black text-white pt-60 pr-[20%] pl-[20%] xs:pr-[27px] xs:pl-[27px] w-full">
      <header className="flex flex-col justify-center items-center w-full">
        <NameTyping />

        <div className="flex gap-4 xs:flex-wrap xs:justify-center">
          {Links.map((link, index) => (
            <LinkBlock
              text={link.text}
              url={link.url}
              key={index}
              img={link.img}
              email={link.email}
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
      <Projects />
      <Footer />
    </main>
  );
}
