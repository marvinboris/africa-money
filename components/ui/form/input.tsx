type Props = React.ComponentProps<"input"> & {
  label: string;
  prepend?: React.ReactNode;
};
export default function Input({ label, prepend, ...props }: Props) {
  return (
    <div>
      <label
        className="block text-gray-800 text-xs font-semibold"
        htmlFor={props.id}
      >
        {label}
      </label>

      <div className="flex items-center mt-1 border-[.5px] border-gray-400 rounded py-3 px-4 gap-1">
        {prepend ? <div className="w-[18px] flex-none">{prepend}</div> : null}

        <input
          className="appearance-none block flex-1 w-full bg-transparent placeholder:text-gray-400 outline-none"
          {...props}
        />
      </div>
    </div>
  );
}
