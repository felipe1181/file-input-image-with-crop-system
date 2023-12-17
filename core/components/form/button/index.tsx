import { HTMLProps } from "react";

enum TypeButton {
  button = "button",
  submit = "submit",
  reset = "reset",
}

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, "type"> {
  type?: TypeButton;
}

export default function Button({
  children,
  type = TypeButton.button,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className="bg-blue-500 w-[96px] h-[50px] text-white"
      {...props}
    >
      {children}
    </button>
  );
}
