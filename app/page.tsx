"use client";
import CropInputComponent from "@/core/components/crop";

export default function UploadImage() {
  function onChange(file: string | null) {
    console.log("file: ", file);
  }
  return <CropInputComponent onChange={onChange} />;
}
