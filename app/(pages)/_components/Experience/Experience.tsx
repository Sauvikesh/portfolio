import { RevealWrapper } from '../Reveal/RevealWrapper';
import ExpBlock, { ExpBlockProps } from './ExpBlock';

export default function Experience() {
  const blockContent: ExpBlockProps[] = [
    {
      time: 'Jan 2025 - Present',
      title: 'C3 AI: Full Stack Software Engineer',
      desc: 'Build enterprise AI applications to solve supply chain related problems.',
      link: 'https://c3.ai/',
    },
    {
      time: 'Nov 2023 - Sept 2024',
      title: 'UC Davis IET: Backend Software Engineer',
      desc: 'Modernized the legacy backend codebase for the AggieFeed web app, a campus activity feed displaying upcoming events to 30,000+ students.',
      link: 'https://studentpowered.ucdavis.edu/',
    },
    {
      time: 'Nov 2023 - June 2024',
      title: 'HackDavis: Frontend Software Engineer',
      desc: 'Spearheaded development of a high traffic website and judging web app with NextJS to market and enhance an 800+ participant hackathon event.',
      link: 'https://hackdavis.io/',
    },
    {
      time: 'Oct 2023 - June 2024',
      title: 'CodeLab: Software Developer',
      desc: 'Developed a course planning tool for the UC Davis Center for Education Effectiveness encompassing all essential information to generate an academic schedule of classes until graduation for UC Davis students.',
      link: 'https://codelabdavis.com/',
    },
    {
      time: 'June 2023 - Sept 2023',
      title: 'Slack: Backend Software Engineer Intern',
      desc: 'Worked in an agile environment to improve the storage of sessions for logged-out users to assist in diagnosing incidents related to signing in.',
      link: 'https://slack.com/',
    },
    {
      time: 'Oct 2022 - Apr 2023',
      title: '#Include at Davis: Frontend Web Developer',
      desc: 'Developed a website for a local photographer to showcase their services and portfolio of photos.',
      link: 'https://includedavis.com/',
    },
  ];

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl pb-4">Experience</h1>
      {blockContent.map((content, index) => (
        <RevealWrapper key={index}>
          <ExpBlock {...content} />
        </RevealWrapper>
      ))}
    </div>
  );
}
