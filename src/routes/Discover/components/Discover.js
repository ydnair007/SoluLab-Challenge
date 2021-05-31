import React, { Component } from "react";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import "../styles/_discover.scss";
import axios from "axios";

export default class Discover extends Component {
  constructor() {
    super();

    const token =
      "BQA3ZKBToycFkPuz-kSNkzxfCs_SCLQrTI6EQnDS0fhzr8aWyV9dNOnHkp7ZialIva9HLSp54Eha62rhs5kRp2kAH0yKrTV_KtWVlzLXtd_yLS7Oi_SoB6zfZjhyKMlwCatRqJ_elliauyihiCX1XYsn-SY3bIw";

    //New Releases
    const releaseNew = axios
      .get(
        `https://api.spotify.com/v1/browse/new-releases?country=IN&limit=10`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res, err) => {
        if (res) {
          console.log(res.data.albums.items);
          return res.data.albums.items;
        } else {
          console.log(err);
        }
      });

    //Playlists
    const playlistNew = axios
      .get(
        `https://api.spotify.com/v1/browse/featured-playlists?country=IN&limit=10`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res, err) => {
        if (res) {
          console.log(res.data.playlists.items);
          return res.data.playlists.items;
        } else {
          console.log(err);
        }
      });

    //Categories
    const categoryNew = axios
      .get(`https://api.spotify.com/v1/browse/categories?country=IN&limit=10`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res, err) => {
        if (res) {
          console.log(res.data.categories.items);
          return res.data.categories.items;
        } else {
          console.log(err);
        }
      });

    this.state = {
      newReleases: [],
      playlists: [],
      categories: [],
    };
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
}
