type Props = {
  label: React.ReactNode;
  id: string;
  name: string;
  options: {
    value: string;
    children: React.ReactNode;
  }[];
};
export default function Mode(props: Props) {
  return (
    <div className="flex items-center justify-between">
      <label htmlFor={props.id}>{props.label}</label>
      <select
        name={props.name}
        id={props.id}
        className="border-[.5px] border-gray-400 rounded py-1 px-4 text-forest-green bg-transparent"
      >
        {props.options.map((o, i) => (
          <option key={"option-" + props.id + "-" + i} {...o} />
        ))}
      </select>
    </div>
  );
}
