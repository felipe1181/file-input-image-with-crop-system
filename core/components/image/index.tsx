import ImageNext, { ImageProps as ImageNextProps } from "next/image";

export type ImageProps = ImageNextProps;

export default function Image(props: ImageProps) {
  return <ImageNext {...props} />;
}
