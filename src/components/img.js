import React, { useEffect, useState } from "react";

export default function PokemonImageSimple({ name }) {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    if (!name) return;
    fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
      .then(res => res.ok ? res.json() : Promise.reject(res.status))
      .then(data => {
        const url =
          data?.sprites?.other?.["official-artwork"]?.front_default ||
          data?.sprites?.front_default ||
          null;
        setImgUrl(url);
      })
      .catch(() => setImgUrl(null));
  }, [name]);

  if (!name) return null;
  return imgUrl ? <img src={imgUrl} alt={name} loading="lazy" /> : <div>Loading…</div>;
}
