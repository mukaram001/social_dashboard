import React, { useEffect, useState } from "react";

import axios from "axios";

import "./SocialCard.css";
const SocialCard = () => {
  const [fbCount, setFbCount] = useState();
  const [instaCount, setInstaCount] = useState();
  const [twitterCount, setTwitterCount] = useState();
  const [youtubeCount, setYoutubeCount] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/social/get-instagram-count-and-post")
      .then((response) => {
        setInstaCount(response.data.followerCount);
      });
    axios
      .get("http://localhost:5000/api/social/get-youtube-subscribers")
      .then((response) => {
        setYoutubeCount(response.data);
      });
    axios
      .get("http://localhost:5000/api/social/get-twitter-count")
      .then((response) => {
        setTwitterCount(response.data[0].followers_count);
      });
    axios
      .get("http://localhost:5000/api/social/get-facebook-count")
      .then((response) => {
        setFbCount(response.data);
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="mt-5 mb-5">
              <div className="social_card fb_card d-flex">
                <div className="icon_div">
                  <i className="fa-brands fa-facebook-f"></i>
                </div>
                <div>
                  <p className="card_count mb-0">
                    {fbCount ? (
                      parseInt(fbCount).toLocaleString()
                    ) : (
                      <div className="spinner-border" role="status">
                        <span className="sr-only" />
                      </div>
                    )}
                    {/* 8692 */}
                  </p>
                  <p className="mb-0 small">Likes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="mt-5 mb-5">
              <div className="social_card insta_card d-flex">
                <div className="icon_div">
                  <i className="fa-brands fa-instagram"></i>
                </div>
                <div>
                  <p className="card_count mb-0">
                    {instaCount ? (
                      instaCount.toLocaleString()
                    ) : (
                      <div className="spinner-border" role="status">
                        <span className="sr-only" />
                      </div>
                    )}
                    {/* 7843 */}
                  </p>
                  <p className="mb-0 small">Followers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="mt-5 mb-5">
              <div className="social_card youtube_card d-flex">
                <div className="icon_div">
                  <i className="fa-solid fa-play"></i>
                </div>
                <div>
                  <p className="card_count mb-0">
                    {youtubeCount ? (
                      youtubeCount.toLocaleString()
                    ) : (
                      <div class="spinner-border" role="status">
                        <span class="sr-only" />
                      </div>
                    )}
                    {/* 8721 */}
                  </p>
                  <p className="mb-0 small">Subscribers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="mt-5 mb-5">
              <div className="social_card twittwer_card d-flex">
                <div className="icon_div">
                  <i className="fa-brands fa-twitter"></i>
                </div>
                <div>
                  <p className="card_count mb-0">
                    {twitterCount ? (
                      twitterCount.toLocaleString()
                    ) : (
                      <div class="spinner-border" role="status">
                        <span class="sr-only" />
                      </div>
                    )}
                    {/* 7814 */}
                  </p>
                  <p className="mb-0 small">Tweets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialCard;
