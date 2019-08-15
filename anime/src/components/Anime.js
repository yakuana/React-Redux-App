import React from 'react';

const Anime = ({ props }) => {
  return (
    <div className="episode-container">
      <h2 className="japanese-title">{props.title_japanese}</h2>
      <h4 className="eng-title">{props.title}</h4>

      <h3 className="watch">Watch <a className="episode-link" href={props.video_url}> Episode {props.episode_id}</a></h3>
    </div>
  );
};

export default Anime;