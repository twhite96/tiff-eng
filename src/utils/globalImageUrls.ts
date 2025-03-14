export function globalImageUrls(baseUrl: string, str: string) {
  const regex = /src="\/_astro\/([^"]+\.(?:jpg|jpeg|gif|png|webp|avif|svg))"/g;
  // replace all image urls with the correct path
  return str
    .replaceAll(regex, 'src="' + baseUrl + '/_astro/$1"')
    .replaceAll("//_astro", "/_astro");
}
