/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "../styles/Card.css";

export default function Card({ url, name, onClick, gameDifficulty }) {
  const [sprites, setSprites] = useState(null);
  const [src, setSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCard = async () => {
      setLoading(true); // Set loading to true when fetching starts
      const response = await fetch(url);
      const data = await response.json();
      setSprites(data.sprites);

      // If difficulty is other than hard, display front
      if (gameDifficulty !== "hard") {
        setSrc(data.sprites.front_default);
      } else {
        // Check if the back image exists, if not, set src to the front image
        if (data.sprites.back_default) {
          setSrc(data.sprites.back_default);
        } else {
          setSrc(data.sprites.front_default);
        }
      }

      setLoading(false); // Set loading to false when fetching completes
    };
    fetchCard();
  }, [url, gameDifficulty]);

  const handleMouseEnter = () => {
    // If sprites exist and difficulty is hard, and back sprite exists, display front sprite
    if (sprites && gameDifficulty === "hard" && sprites.back_default) {
      setSrc(sprites.front_default);
    }
  };

  const handleMouseLeave = () => {
    // If sprites exist and difficulty is hard, display back sprite
    if (sprites && gameDifficulty === "hard" && sprites.back_default) {
      setSrc(sprites.back_default);
    }
  };

  return (
    <div
      className={`card ${gameDifficulty === "hard" ? "flippable" : ""}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {loading ? <p>Loading...</p> : src && <img src={src} alt={name} />}
    </div>
  );
}
