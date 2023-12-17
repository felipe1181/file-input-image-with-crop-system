import { SyntheticEvent } from "react";
import Image, { ImageProps } from "../../image";

export type EventCropProps = SyntheticEvent<HTMLImageElement, Event>;

export interface CropImagePreviewProps {
  src: ImageProps["src"] | null;
  onLoadImage: (event: EventCropProps) => void;
}
export default function CropImagePreview({
  src,
  onLoadImage,
  ...props
}: CropImagePreviewProps) {
  return (
    <div>
      {src && (
        <Image
          width={500}
          height={500}
          alt="crop preview"
          src={src}
          onLoad={onLoadImage}
          {...props}
        />
      )}
    </div>
  );
}
