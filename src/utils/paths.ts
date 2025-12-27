export const withBase = (href: string): string => {
  if (!href || !href.startsWith("/")) {
    return href;
  }

  const base = import.meta.env.BASE_URL;
  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;

  // For root path
  if (href === "/") {
    return `${normalizedBase}/`;
  }

  // For static assets (files with extensions), don't add trailing slash
  if (href.includes(".")) {
    return `${normalizedBase}${href}`;
  }

  // For pages, ensure trailing slash
  const path = href.endsWith("/") ? href : `${href}/`;
  return `${normalizedBase}${path}`;
};

export const stripBase = (path) => {
  const base = import.meta.env.BASE_URL;
  if (base === "/") {
    return path;
  }

  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  if (path.startsWith(normalizedBase)) {
    const stripped = path.slice(normalizedBase.length);
    return stripped.length ? stripped : "/";
  }

  return path;
};
