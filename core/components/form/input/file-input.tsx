import Input, { InputProps } from ".";

export type FileInputProps = Omit<InputProps, "type">;

export default function FileInput({ children, ...props }: FileInputProps) {
  return (
    <label className="cursor-pointer bg-blue-500 text-white p-2 rounded border border-blue-500">
      <span>{children}</span>
      <Input type="file" className="hidden" {...props} />
    </label>
  );
}
