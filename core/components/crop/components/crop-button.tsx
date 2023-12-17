import { EventCropProps } from "./crop-image-preview";
import Button, { ButtonProps } from "../../form/button";
import { Crop } from "react-image-crop";

export interface CropButtonProps extends Omit<ButtonProps, "onClick"> {
  image: EventCropProps | null;
  crop: Crop;
  setOutput: (eventImage: string | null) => void;
}

export default function CropButton({
  image,
  crop,
  setOutput,
  ...props
}: CropButtonProps) {
  function cropImageNow() {
    if (image === null) {
      throw new Error("Image not found");
    }
    const imageTarget = image.target as HTMLImageElement;

    const scaleX = imageTarget.naturalWidth / imageTarget.width;
    const scaleY = imageTarget.naturalHeight / imageTarget.height;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const croppedWidth = crop.width * scaleX;
    const croppedHeight = crop.height * scaleY;

    canvas.width = croppedWidth;
    canvas.height = croppedHeight;

    if (ctx === null) {
      throw new Error("Context not found");
    }

    ctx.drawImage(
      imageTarget as CanvasImageSource,
      crop.x * scaleX,
      crop.y * scaleY,
      croppedWidth,
      croppedHeight,
      0,
      0,
      croppedWidth,
      croppedHeight
    );
    // Converting to base64
    const base64Image = canvas.toDataURL("image/jpeg");
    setOutput(base64Image);
  }

  return (
    <Button onClick={cropImageNow} {...props}>
      Crop
    </Button>
  );
}
