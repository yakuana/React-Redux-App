import React from 'react';

const Anime = ({ props }) => {
  return (
    <div className="episode-container">
      <h2 className="japanese-title">{props.title_japanese}</h2>
      <h3 className="eng-title">{props.title}</h3>

      <h4 className="watch">Watch <a className="episode-link" href={props.video_url}> Episode {props.episode_id}</a></h4>
    </div>
  );
};

export default Anime;