/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../styles/Card.css";

export default function Card({ url, name, onClick }) {
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      const response = await fetch(url);
      const data = await response.json();
      const src = data.sprites.front_default;
      setSrc(src);
    };
    fetchCard();
  }, [url]);

  return (
    <div className="card" onClick={onClick}>
      {src && <img src={src} alt={name} />}
    </div>
  );
}
