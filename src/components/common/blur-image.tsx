import Image, { ImageProps } from "next/image";

import { getImageDataUrl } from "@/utils/image-data-url";
import { cn } from "@/lib/utils";

interface BlurImageProps extends ImageProps {
  src: string;
}

export default async function BlurImage({
  src,
  ...imageProps
}: BlurImageProps) {
  const { alt, width, height } = imageProps;

  const imageBlurDataUrl = await getImageDataUrl(src);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      placeholder="blur"
      blurDataURL={imageBlurDataUrl}
      className={cn(imageProps.className)}
    />
  );
}
