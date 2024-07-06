import "./TitleCard.css";
import PropTypes from "prop-types";
// import cards_data from "../../assets/cards/Cards_data.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
function TitleCard({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  //Header
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: "Bearer 29e55c93dd01d5a10f402a476d94bf99",
    },
  };

  //Handle Wheel
  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel, { passive: false });
  }, []);

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt={card.original_title}
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
TitleCard.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
};
export default TitleCard;
