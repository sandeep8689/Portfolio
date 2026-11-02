export const cn = (...classes) => classes.filter(Boolean).join(" ");

export const isExternal = (href = "") => /^https?:\/\//.test(href);
