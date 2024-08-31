export type ExpBlockProps = {
  time: string;
  title: string;
  desc: string;
};
export default function ExpBlock(props: ExpBlockProps) {
  const { time, title, desc } = props;

  return (
    <div className="grid grid-cols-4 grid-rows-2 pb-20 gap-y-0">
      <div className="col-span-1">
        <h2 className="text-gray-500">{time}</h2>
      </div>
      <div className="col-span-3">
        <h2>{title}</h2>
      </div>

      <div className="col-span-1"></div>
      <div className="col-span-3">
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
}
