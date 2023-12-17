import { Crop, ReactCrop } from "react-image-crop";
import CropImagePreview, { CropImagePreviewProps } from "./crop-image-preview";
import "react-image-crop/dist/ReactCrop.css";

export interface CropContainerProps extends CropImagePreviewProps {
  crop: Crop;
  setCrop: (crop: CropContainerProps["crop"]) => void;
}

export default function CropContainer({
  src,
  crop,
  setCrop,
  onLoadImage,
}: CropContainerProps) {
  return (
    <ReactCrop crop={crop} aspect={1} onChange={setCrop}>
      <CropImagePreview src={src} onLoadImage={onLoadImage} />
    </ReactCrop>
  );
}
