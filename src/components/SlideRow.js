import React, { useState } from "react";
import "../css/SlideRow.css";

function SlideRow({ category, slideRow, item }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});

  return (
    <div
      className="slideRow"
      key={`${category}-${slideRow.title.toLowerCase()}`}
    >
      <h2 className="slideRow__title">{slideRow.title}</h2>
      <div className="slideRow__entities">
        {slideRow.data.map((item) => (
          <div
            key={item.docId}
            className="slideRow__item"
            onClick={() => {
              setItemFeature(item);
              setShowFeature(true);
            }}
          >
            <img
              src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
              alt="Poster"
              className="slideRow__image"
            />
            <div className="slideRow__meta">
              <p className="slideRow__subTitle">{item.title}</p>
              <p className="slideRow__text">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {showFeature && (
        <div
          className="feature"
          style={{
            backgroundImage: `url(
              /images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg
          )`,
          }}
        >
          <div className="feature--dark"></div>
          <div className="feature__content">
            <p className="feature__title">{itemFeature.title}</p>
            <p className="feature__text">{itemFeature.description}</p>
            <button
              className="feature__close"
              onClick={() => setShowFeature(false)}
            >
              <img
                className="feature__img"
                src="/images/icons/close.png"
                alt="Close"
              />
            </button>
            <div className="feature__group">
              <div
                className={
                  itemFeature.maturity >= 15
                    ? "feature__maturity--red"
                    : "feature__maturity--green"
                }
              >
                {itemFeature.maturity < 12 ? "PG" : itemFeature.maturity}
              </div>
              <p className="feature__text">
                {itemFeature.genre.charAt(0).toUpperCase() +
                  itemFeature.genre.slice(1)}
              </p>
            </div>

            <button
              className="playButton"
              onClick={() => setShowPlayer((showPlayer) => !showPlayer)}
            >
              Play
            </button>
          </div>
        </div>
      )}
      {showPlayer && (
        <div className="player" data-testid="player">
          <div className="player__inner">
            <video className="player__video" id="netflix-player" controls>
              <source src="/videos/bunny.mp4" type="video/mp4" />
            </video>
            <button
              className="player__close"
              onClick={() => setShowPlayer(false)}
            >
              <img
                className="player__img"
                src="/images/icons/close.png"
                alt="Close"
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SlideRow;
