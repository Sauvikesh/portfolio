export type ExpBlockProps = {
  time: string;
  title: string;
  desc: string;
};
export default function ExpBlock(props: ExpBlockProps) {
  const { time, title, desc } = props;

  return (
    <div className="grid grid-cols-4 grid-rows-2 pb-20 xs:pb-10 gap-y-0 xs:flex xs:flex-col">
      <div className="col-span-1 xs:order-2 xs:pb-4 row-span-1 flex pb-2">
        <h2 className="text-gray-500 self-end">{time}</h2>
      </div>
      <div className="col-span-3 xs:order-1 row-span-1 flex pb-2">
        <h2 className="self-end">{title}</h2>
      </div>

      <div className="col-span-1 row-span-1"></div>
      <div className="col-span-3 xs:order-3 row-span-1">
        <p className="text-gray-400">{desc}</p>
      </div>
    </div>
  );
}
