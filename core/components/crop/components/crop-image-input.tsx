import { ChangeEvent, MouseEventHandler } from "react";
import FileImageInput from "../../form/input/file-image-input";

type targetProps = { target: { value: string | null } };

export type ChangeEventProps = ChangeEvent<HTMLInputElement>;

export interface CropImageInputProps {
  setSrc: (src: string) => void;
}
export default function CropImageInput({ setSrc }: CropImageInputProps) {
  function selectImage(e: ChangeEventProps) {
    const file = e.target.files;

    if (file && file.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result as string));
      reader.readAsDataURL(file[0]);
    }
  }

  function resetFileInput(event: targetProps) {
    if (event.target?.value) {
      event.target.value = null;
    }
  }

  return (
    <FileImageInput
      onChange={selectImage}
      onClick={(event) => {
        resetFileInput(event as unknown as targetProps);
      }}
    >
      Upload image Crop
    </FileImageInput>
  );
}
