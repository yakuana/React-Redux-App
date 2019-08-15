// react imports 
import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

// actions  
import { getAnimeData } from "../actions/index.js";

// components 
import Anime from "./Anime.js";

const AnimeList = props => {
  return (
    <>
      <h1>Anime</h1>

      <button className="data-btn" onClick={props.getAnimeData}>
        {props.isLoading ? (
          <Loader type="TailSpin" color="#6DAFCE" height={80} width={80} />
        ) : (
          'Get Anime Data'
        )}
      </button>

      {props.episodes && props.episodes.map(episode => <Anime key={episode.episode_id} props={episode} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    episodes: state.episodes
  };
};
export default connect(
  mapStateToProps,
  { getAnimeData }
)(AnimeList);