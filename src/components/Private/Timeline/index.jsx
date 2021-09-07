import "../../../styles/displayStyles.scss";

import Label from "./../../common/Label";
import Input from "./../../common/Input";
import Button from "./../../common/Button";
import Img from "./../../common/Img";

const Timeline = () => {
  return (
    <>
      <a className="inline">
        <a className="timeline-navegation">
          <Img className="icon-img" src="../../../images/bookmark.svg" />

          <a>
            <a className="inline">
              <Img
                className="selected-icon-img"
                src={Image.homeIcon}
                alt="Home icon"
              />
              <Label text="Home" className="home-navegation-label" />
            </a>
          </a>
          <a>
            <a className="inline">
              <Img className="icon-img" src={Image.exploreIcon} />
              <Label text="Explore" className="home-navegation-label " />
            </a>
          </a>
          <a>
            <a className="inline">
              <Img className="icon-img" src={Image.notificationIcon} />
              <Label text="Notifications" className="home-navegation-label" />
            </a>
          </a>
          <a>
            <a className="inline">
              <Img className="icon-img" src={Image.messageIcon} />
              <Label text="Messages" className="home-navegation-label" />
            </a>
          </a>
          <a>
            <a className="inline">
              <Img className="icon-img" src={Image.bookmarkIcon} />
              <Label text="Bookmarks" className="home-navegation-label" />
            </a>
          </a>
          <a>
            <a className="inline">
              <Img className="icon-img" src={Image.listIcon} />
              <Label text="Lists" className="home-navegation-label" />
            </a>
          </a>
          <a>
            <a className="inline">
              <Img className="icon-img" src={Image.profileIcon} />
              <Label text="Profile" className="home-navegation-label" />
            </a>
          </a>
          <a>
            <a className="inline">
              <Img className="icon-img" src={Image.moreIcon} />
              <Label text="More" className="home-navegation-label" />
            </a>
          </a>
        </a>

        <a className="timeline-body">
          <Label text="Home" className="trending-title-label" />
          <a className="inline">
            <Img className="profile-icon-img" src={Image.profileIcon} />
            <a>
              <a className="inline">
                <Label text="Annie" className="tweet-user-label" />
                <Img className="icon-img" src={Image.verifiedIcon} />
                <Label text="@annie" className="tweet-at-sign-label" />
              </a>
              <a>
                <Label
                  text="This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis "
                  className="tweet-body-label"
                />
              </a>
            </a>
          </a>
          <div className="grey-border-div"></div>
          <a className="inline">
            <Img className="profile-icon-img" src={Image.profileIcon} />
            <a>
              <a className="inline">
                <Label text="Annie" className="tweet-user-label" />
                <Img className="icon-img" src={Image.verifiedIcon} />
                <Label text="@annie" className="tweet-at-sign-label" />
              </a>
              <a>
                <Label
                  text="This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis "
                  className="tweet-body-label"
                />
              </a>
            </a>
          </a>
        </a>

        <a className="timeline-search-trend">
          <a className="search-bar">
            <Img
              className="icon-img"
              src={Image.searchIcon}
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
          </a>
          <a className="trend-list-body">
            <a className="trend-list-title">
              <Label text="Paris trend" className="trending-title-label" />
            </a>
            <a className="trend-body">
              <Label
                text="1. Trending"
                className="trending-number-subtitle-label"
              />
              <Label text="#JessieMueller" className="trending-hashtag-label" />
              <Label
                text="456K Tweets"
                className="trending-number-subtitle-label"
              />
            </a>
            <div className="grey-border-div"></div>
            <a className="trend-body">
              <Label
                text="2. Trending"
                className="trending-number-subtitle-label"
              />
              <Label text="#ThelmaJones" className="trending-hashtag-label" />
              <Label
                text="456K Tweets"
                className="trending-number-subtitle-label"
              />
            </a>
            <div className="grey-border-div"></div>
            <a className="trend-body">
              <Label
                text="3. Trending"
                className="trending-number-subtitle-label"
              />
              <Label text="#LoisPearson" className="trending-hashtag-label" />
              <Label
                text="456K Tweets"
                className="trending-number-subtitle-label"
              />
            </a>
            <div className="grey-border-div"></div>{" "}
            <a className="trend-body">
              <Label
                text="4. Trending"
                className="trending-number-subtitle-label"
              />
              <Label text="#WilmaBoyd" className="trending-hashtag-label" />
              <Label
                text="456K Tweets"
                className="trending-number-subtitle-label"
              />
            </a>
            <div className="grey-border-div"></div>{" "}
            <a className="trend-body">
              <Label
                text="5. Trending"
                className="trending-number-subtitle-label"
              />
              <Label text="#WilmaBoydr" className="trending-hashtag-label" />
              <Label
                text="456K Tweets"
                className="trending-number-subtitle-label"
              />
            </a>
            <div className="grey-border-div"></div>{" "}
            <a className="trend-body">
              <Label
                text="6. Trending"
                className="trending-number-subtitle-label"
              />
              <Label text="#ErikBaker" className="trending-hashtag-label" />
              <Label
                text="456K Tweets"
                className="trending-number-subtitle-label"
              />
            </a>
            <div className="grey-border-div"></div>
            <a className="trend-list-title">
              <Button
                text="Show more"
                className="join-free-forgot-password-button"
              />
            </a>
          </a>
        </a>
      </a>
    </>
  );
};

export default Timeline;
