import { useState } from "react";
import { centerCrop, makeAspectCrop } from "react-image-crop";
import Modal, { ModalProps } from "../../modal";
import CropButton, { CropButtonProps } from "./crop-button";
import CropContainer, { CropContainerProps } from "./crop-container";
import { CropImagePreviewProps, EventCropProps } from "./crop-image-preview";

type InjectProps = Omit<ModalProps, "children"> &
  Omit<CropButtonProps, "crop" | "image" | "setImage" | "src">;

export interface CropModalProps extends InjectProps {
  src: CropImagePreviewProps["src"];
}

export default function CropModal({
  isOpen,
  src,
  setOutput,
  onClose,
}: CropModalProps) {
  const [crop, setCrop] = useState<CropContainerProps["crop"]>({
    unit: "%",
    x: 0,
    y: 0,
    width: 50,
    height: 50,
  });

  const [image, setImage] = useState<CropButtonProps["image"]>(null);

  function onLoadImage(e: EventCropProps) {
    console.log("call onload", e);
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;
    console.log(e.currentTarget.width);
    const startCrop = centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 20,
        },
        1,
        width,
        height
      ),
      width - e.currentTarget.width,
      height - e.currentTarget.height
    );
    console.log("startCrop", startCrop);
    setCrop(startCrop);
    setImage(e);
  }
  console.log("crop", crop);
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <CropContainer
        crop={crop}
        setCrop={setCrop}
        onLoadImage={onLoadImage}
        src={src}
      />
      <CropButton
        image={image}
        crop={crop}
        setOutput={(e) => {
          setOutput(e);
          onClose();
        }}
      >
        Crop
      </CropButton>
    </Modal>
  );
}
