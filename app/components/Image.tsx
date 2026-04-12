import NextImage, { ImageProps } from "next/image"

const images = require.context(
  "../assets/" + process.env.NEXT_PUBLIC_PRODUCT,
  false, /\.(png|avif)$/,
)

type Props = Omit<ImageProps, "src"> & {
  name: string;
};

export default function Image({ name, ...props }: Props) {
	const src = images(`./${name}.avif`).default;
  return <NextImage src={src} {...props} />;
}
