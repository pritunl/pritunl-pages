import NextImage, { ImageProps } from "next/image"

const images = require.context(
  "../assets/" + process.env.NEXT_PUBLIC_PRODUCT,
  false, /\.(avif|webp)$/,
)

type Props = Omit<ImageProps, "src"> & {
  name: string;
};

export default function Image({ name, ...props }: Props) {
  const avif = images(`./${name}.avif`).default;
  const webp = images(`./${name}.webp`).default;

  return (
    <picture>
      <source srcSet={avif.src} type="image/avif" />
      <source srcSet={webp.src} type="image/webp" />
      <NextImage src={webp} {...props} unoptimized />
    </picture>
  );
}
