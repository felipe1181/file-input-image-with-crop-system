import { HTMLProps } from "react";

export type InputProps = HTMLProps<HTMLInputElement>;

export default function Input(props: InputProps) {
  return <input {...props} />;
}
