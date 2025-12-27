export const withBase = (href) => {
  if (!href || !href.startsWith("/")) {
    return href;
  }

  const base = import.meta.env.BASE_URL;
  if (base === "/") {
    return href;
  }

  const normalizedBase = base.endsWith("/") ? base.slice(0, -1) : base;
  return href === "/" ? `${normalizedBase}/` : `${normalizedBase}${href}`;
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
