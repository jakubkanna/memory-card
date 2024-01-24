/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../styles/Card.css";

export default function Card({ url, name, onClick }) {
  const [sprites, setSprites] = useState(null);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const fetchCard = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setSprites(data.sprites);
      setSrc(data.sprites.back_default);
    };
    fetchCard();
  }, [url]);

  const handleMouseEnter = () => {
    if (sprites) {
      setSrc(sprites.front_default);
    }
  };

  const handleMouseLeave = () => {
    if (sprites) {
      setSrc(sprites.back_default);
    }
  };

  return (
    <div
      className="card"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {src && <img src={src} alt={name} />}
    </div>
  );
}
