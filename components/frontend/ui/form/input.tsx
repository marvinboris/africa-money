type Props = React.ComponentProps<"input"> & {
  label: React.ReactNode;
  append?: React.ReactNode;
};
const Input = (props: Props) => (
  <div className="py-2 px-5 rounded border-[.5px] border-gray-400 gap-3 flex justify-between items-center">
    <div className="space-y-1">
      <label htmlFor={props.id} className="text-[8px] text-gray-400">
        {props.label}
      </label>

      <input
        {...props}
        className="bg-transparent block border-0 outline-none p-0 font-semibold text-reset"
      />
    </div>

    {props.append ? (
      <>
        <div className="flex-none h-7 w-[.5px] bg-gray-400" />

        <div className="flex-none w-[60px] h-full px-2 flex items-center text-sm">
          {props.append}
        </div>
      </>
    ) : null}
  </div>
);

export default Input;
