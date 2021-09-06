import "../../../styles/displayStyles.scss";

import Label from "./../../common/Label";
import Input from "./../../common/Input";
import Button from "./../../common/Button";

import HomeIcon from "../../../images/home.svg";
import ExploreIcon from "../../../images/hashtag.svg";
import NotificationIcon from "../../../images/bell.svg";
import MessageIcon from "../../../images/envelope.svg";
import BookmarkIcon from "../../../images/bookmark.svg";
import ListIcon from "../../../images/th-list.svg";
import ProfileIcon from "../../../images/user-circle.svg";
import MoreIcon from "../../../images/plus-circle.svg";
import SearchIcon from "../../../images/search.svg";
import VerifiedIcon from "../../../images/verified.svg";
import ServerIcon from "../../../images/server.svg";
import TwitterIcon from "../../../images/twitter.svg";

const Timeline = () => {
  return (
    <>
      <p className="inline">
        <p className="timeline-navegation">
          <img className="icon-img" src={TwitterIcon} /> <p></p>
          <p>
            <a className="inline">
              <img className="selected-icon-img" src={HomeIcon} />
              <Label text="Home" className="home-navegation-label" />
            </a>
          </p>
          <p>
            <a className="inline">
              <img className="icon-img" src={ExploreIcon} />
              <Label text="Explore" className="home-navegation-label " />
            </a>
          </p>
          <p>
            <a className="inline">
              <img className="icon-img" src={NotificationIcon} />
              <Label text="Notifications" className="home-navegation-label" />
            </a>
          </p>
          <p>
            <a className="inline">
              <img className="icon-img" src={MessageIcon} />
              <Label text="Messages" className="home-navegation-label" />
            </a>
          </p>
          <p>
            <a className="inline">
              <img className="icon-img" src={BookmarkIcon} />
              <Label text="Bookmarks" className="home-navegation-label" />
            </a>
          </p>
          <p>
            <a className="inline">
              <img className="icon-img" src={ListIcon} />
              <Label text="Lists" className="home-navegation-label" />
            </a>
          </p>
          <p>
            <a className="inline">
              <img className="icon-img" src={ProfileIcon} />
              <Label text="Profile" className="home-navegation-label" />
            </a>
          </p>
          <p>
            <a className="inline" className="inline">
              <img className="icon-img" src={MoreIcon} />
              <Label text="More" className="home-navegation-label" />
            </a>
          </p>
        </p>

        <p className="timeline-body">
          <Label text="Home" className="trending-title-label" />
          <p className="inline">
            <img className="profile-icon-img" src={ProfileIcon} />
            <p>
              <p className="inline">
                <Label text="Annie" className="tweet-user-label" />
                <img className="icon-img" src={VerifiedIcon} />
                <Label text="@annie" className="tweet-at-sign-label" />
              </p>
              <p>
                <Label
                  text="This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis "
                  className="tweet-body-label"
                />
              </p>
            </p>
          </p>
          <div className="grey-border-div"></div>
          <p className="inline">
            <img className="profile-icon-img" src={ProfileIcon} />
            <p>
              <p className="inline">
                <Label text="Annie" className="tweet-user-label" />
                <img className="icon-img" src={VerifiedIcon} />
                <Label text="@annie" className="tweet-at-sign-label" />
              </p>
              <p>
                <Label
                  text="This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis "
                  className="tweet-body-label"
                />
              </p>
            </p>
          </p>
        </p>

        <p className="timeline-search-trend">
          <p className="search-bar">
            <img
              className="icon-img"
              src={SearchIcon}
              Width="16.46"
              Height="16.46px"
            />
            <Input
              type="text"
              className="search-input"
              name="search"
              id="search"
              title="search"
            />
          </p>
          <p className="trend-list-body">
            <a className="trend-list-title">
              <Label text="Paris trend" className="trending-title-label" />
            </a>
            <p className="trend-body">
              <Label
                text="1. Trending"
                className="trending-number-subtitle-label"
              />
              <Label text="#JessieMueller" className="trending-hashtag-label" />
              <Label
                text="456K Tweets"
                className="trending-number-subtitle-label"
              />
            </p>
            <div className="grey-border-div"></div>
            <p className="trend-body">
              <Label
                text="2. Trending"
                className="trending-number-subtitle-label"
              />
              <Label text="#ThelmaJones" className="trending-hashtag-label" />
              <Label
                text="456K Tweets"
                className="trending-number-subtitle-label"
              />
            </p>
            <div className="grey-border-div"></div>
            <p className="trend-body">
              <Label
                text="3. Trending"
                className="trending-number-subtitle-label"
              />
              <Label text="#LoisPearson" className="trending-hashtag-label" />
              <Label
                text="456K Tweets"
                className="trending-number-subtitle-label"
              />
            </p>
            <div className="grey-border-div"></div>{" "}
            <p className="trend-body">
              <Label
                text="4. Trending"
                className="trending-number-subtitle-label"
              />
              <Label text="#WilmaBoyd" className="trending-hashtag-label" />
              <Label
                text="456K Tweets"
                className="trending-number-subtitle-label"
              />
            </p>
            <div className="grey-border-div"></div>{" "}
            <p className="trend-body">
              <Label
                text="5. Trending"
                className="trending-number-subtitle-label"
              />
              <Label text="#WilmaBoydr" className="trending-hashtag-label" />
              <Label
                text="456K Tweets"
                className="trending-number-subtitle-label"
              />
            </p>
            <div className="grey-border-div"></div>{" "}
            <p className="trend-body">
              <Label
                text="6. Trending"
                className="trending-number-subtitle-label"
              />
              <Label text="#ErikBaker" className="trending-hashtag-label" />
              <Label
                text="456K Tweets"
                className="trending-number-subtitle-label"
              />
            </p>
            <div className="grey-border-div"></div>
            <a className="trend-list-title">
              <Button
                text="Show more"
                className="join-free-forgot-password-button"
              />
            </a>
          </p>
        </p>
      </p>
    </>
  );
};

export default Timeline;
