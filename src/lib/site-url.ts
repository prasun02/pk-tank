export function getPublicSiteUrl(): URL | null {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!value) return null;

  try {
    const url = new URL(value);
    if (!['http:', 'https:'].includes(url.protocol) || !url.hostname) return null;
    return url;
  } catch {
    return null;
  }
}

export function canonical(pathname: string) {
  const base = getPublicSiteUrl();
  return base ? new URL(pathname, base).toString() : undefined;
}
