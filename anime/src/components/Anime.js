import React from 'react';

const Anime = ({props}) => {
  return (
    <div>
      <h2>{props.title_japanese}</h2>
      <h4>{props.title}</h4>

      <h3>Watch <a href={props.video_url}> Episode {props.episode_id} here</a> </h3>
    </div>
  );
};

export default Anime;