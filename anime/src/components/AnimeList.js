// react imports 
import React from "react";
import { connect } from "react-redux";
import { PulseSpinner } from "react-spinners-kit";

// actions  
import { getAnimeData } from "../actions/index.js";

// components 
import Anime from "./Anime.js";

const AnimeList = props => {
  return (
    <div className="animelist-container">
      <button id="data-btn" onClick={props.getAnimeData}>
        {props.isLoading ? (
          <PulseSpinner size={30}
          color="#686769"
          loading={props.isLoading}
          />
        ) : (
          'Get Anime Data'
        )}
      </button>
      <div className="episodes-container">
        {props.episodes && 
          props.episodes.map(episode => <Anime key={episode.episode_id} props={episode} />)}
      </div>
    </div>
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