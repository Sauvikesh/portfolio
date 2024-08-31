import ExpBlock, { ExpBlockProps } from './ExpBlock';

export default function Experience() {
  const blockContent: ExpBlockProps[] = [
    {
      time: 'June 2023 - June 2024',
      title: 'UC Davis IET: Backend Engineer',
      desc: 'Modernized the legacy backend codebase for the AggieFeed web app, a campus activity feed displaying upcoming events to 30,000+ students.',
    },
    {
      time: 'June 2023 - June 2024',
      title: 'UC Davis IET: Backend Engineer',
      desc: 'Modernized the legacy backend codebase for the AggieFeed web app, a campus activity feed displaying upcoming events to 30,000+ students.',
    },
    {
      time: 'June 2023 - June 2024',
      title: 'UC Davis IET: Backend Engineer',
      desc: 'Modernized the legacy backend codebase for the AggieFeed web app, a campus activity feed displaying upcoming events to 30,000+ students.',
    },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="pb-10 text-2xl">Experience</h1>
      {blockContent.map((content, index) => (
        <ExpBlock {...content} key={index} />
      ))}
    </div>
  );
}
