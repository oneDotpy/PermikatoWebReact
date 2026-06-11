const PUBLIC_PHOTO_PATH = /^\/assets\/(ExecPhotos|events)\//;

export function getOptimizedImageSrc(src) {
  const imageSrc = (src || "").trim();

  if (PUBLIC_PHOTO_PATH.test(imageSrc) && /\.png$/i.test(imageSrc)) {
    return imageSrc.replace(/\.png$/i, ".jpg");
  }

  return imageSrc;
}

export function restoreOriginalImage(event, originalSrc) {
  if (!originalSrc) return;

  const image = event.currentTarget;
  if (image.getAttribute("src") !== originalSrc) {
    image.src = originalSrc;
  }
}
