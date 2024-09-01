import LinkBlock, { LinkBlockProps } from '../Link/Link';

export default function Footer() {
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
    <div className="flex flex-col justify-center items-center w-full mb-[150px]">
      <div className="h-[1px] w-full bg-white mb-[100px]"></div>
      <div className="flex gap-4 pb-10 xs:flex-wrap xs:justify-center">
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
      <p>Made with ☕️ in Redwood City, CA</p>
    </div>
  );
}
