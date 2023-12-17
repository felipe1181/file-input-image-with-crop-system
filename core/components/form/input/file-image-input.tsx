import FileInput, { FileInputProps } from "./file-input";

export type FileImageInputProps = Omit<FileInputProps, "accept">;

export default function FileImageInput({
  children,
  ...props
}: FileImageInputProps) {
  return (
    <FileInput accept="image/*" {...props}>
      {children}
    </FileInput>
  );
}
