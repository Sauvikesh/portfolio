import LinkBlock, { LinkBlockProps } from '../Link/Link';

export default function Footer() {
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
    <div className="flex flex-col justify-center items-center w-full mb-[150px]">
      <div className="h-[1px] w-full bg-white mb-[100px]"></div>
      <div className="flex gap-4 pb-10">
        {Links.map((link, index) => (
          <LinkBlock
            text={link.text}
            url={link.url}
            key={index}
            img={link.img}
          />
        ))}
      </div>
      <p>Made with ☕️ in Redwood City, CA</p>
    </div>
  );
}
