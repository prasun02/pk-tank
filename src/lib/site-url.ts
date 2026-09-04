export function getPublicSiteUrl(): URL | null {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!value) return new URL("https://pk-tank.com");

  try {
    const url = new URL(value);
    if (!["http:", "https:"].includes(url.protocol) || !url.hostname) {
      return new URL("https://pk-tank.com");
    }
    return url;
  } catch {
    return new URL("https://pk-tank.com");
  }
}

export function canonical(pathname: string) {
  const base = getPublicSiteUrl();
  return base ? new URL(pathname, base).toString() : undefined;
}
