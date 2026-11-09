import { useEffect, useState } from "react";

const check = (src) =>
  new Promise((resolve) => {
    const im = new Image();
    im.onload = () =>
      resolve(im.naturalWidth >= 150 && im.naturalHeight >= 150);
    im.onerror = () => resolve(false);
    im.src = src;
  });

export default function useValidProducts(list) {
  const [valid, setValid] = useState([]);

  useEffect(() => {
    let cancelled = false;
    Promise.all(list.map(async (p) => ((await check(p.img)) ? p : null))).then(
      (res) => {
        if (!cancelled) setValid(res.filter(Boolean));
      },
    );
    return () => {
      cancelled = true;
    };
  }, [list]);

  return valid;
}
