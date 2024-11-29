import React from "react";
import artistblender from "../assets/images/ArtistBlender.png";
import "../assets/styles/Project.scss";

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        <div className="project">
          <a
            href="https://github.com/thomxsnguyen/ArtistBlender"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={artistblender}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </a>
          <a
            href="https://github.com/thomxsnguyen/ArtistBlender"
            target="_blank"
            rel="noreferrer"
          >
            <h2>ArtistBlender</h2>
          </a>
          <p>
            When using Spotify, shuffling songs is essential for variety and
            avoiding repetition. There’s a feature to shuffle all songs by a
            single artist, which helps discover new tracks. However, I recently
            encountered an inconvenience: the inability to shuffle songs from
            multiple artists simultaneously. Although creating a playlist with
            all their songs and shuffling is a workaround, it’s time consuming
            and too much of a hassle. My goal for this project is to develop a
            plugin that allows user to seamless shuffle songs from multiple
            artists without needing to simple playlist
          </p>
        </div>
      </div>
    </div>
  );
}

export default Project;
