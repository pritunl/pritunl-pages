import NextImage, { ImageProps } from "next/image"
import type { SvgData } from "../types"

const images = require.context(
  "../assets/" + process.env.NEXT_PUBLIC_PRODUCT,
  false, /\.(avif|svg|webp|tsx)$/,
)

type Props = Omit<ImageProps, "src"> & {
  image: string | SvgData;
}

export default function Image({ image, ...props }: Props) {
  if (!image) {
    return <></>
  }

  if (typeof image === "function") {
    const SvgComponent = image
    return <SvgComponent aria-label={props.alt || ""} className={typeof props.className === "string" ? props.className : ""} />
  }

  try {
    const SvgComponent = images(`./${image}.tsx`).default
    return <SvgComponent aria-label={props.alt || ""} className={typeof props.className === "string" ? props.className : ""} />
  } catch {
  }

  try {
    const svg = images(`./${image}.svg`).default
    return <NextImage src={svg} {...props} unoptimized />
  } catch {
  }

  const avif = images(`./${image}.avif`).default
  const webp = images(`./${image}.webp`).default

  return (
    <picture>
      <source srcSet={avif.src} type="image/avif" />
      <source srcSet={webp.src} type="image/webp" />
      <NextImage src={webp} {...props} unoptimized />
    </picture>
  );
}
