"use client";
import { useState } from "react";
import CropImageInput from "./components/crop-image-input";
import CropModal, { CropModalProps } from "./components/crop-modal";

export interface CropInputComponentProps {
  onChange: CropModalProps["setOutput"];
}

export default function CropInputComponent({
  onChange,
}: CropInputComponentProps) {
  const [src, setSrc] = useState<CropModalProps["src"] | null>(null);
  const isOpenModal = typeof src === "string";

  function onCloseModal() {
    setSrc(null);
  }
  return (
    <div>
      <CropImageInput setSrc={setSrc} />
      <CropModal
        src={src}
        isOpen={isOpenModal}
        onClose={onCloseModal}
        setOutput={onChange}
      />
    </div>
  );
}
