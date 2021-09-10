import "../../../styles/displayStyles.scss";
import Button from "./../../common/Button";
import Image from "../../../images/index";
import Img from "./../../common/Img";
import Input from "./../../common/Input";
import Label from "./../../common/Label";
import React, { useState } from "react";

export default function Timeline() {
  const [contentTitle, setContentTitle] = useState("Home");

  const [bookmarksIconClassName, setBookmarksIconClassName] =
    useState("icon-grey-img");
  const [exploreIconClassName, setExploreIconClassName] =
    useState("icon-grey-img");
  const [homeIconClassName, setHomeIconClassName] = useState("icon-blue-img");
  const [listsIconClassName, setListsIconClassName] = useState("icon-grey-img");
  const [messagesIconClassName, setMessagesIconClassName] =
    useState("icon-grey-img");
  const [moreIconClassName, setMoreIconClassName] = useState("icon-grey-img");
  const [notificationsIconClassName, setNotificationsIconClassName] =
    useState("icon-grey-img");
  const [profileIconClassName, setProfileIconClassName] =
    useState("icon-grey-img");

  const [bookmarksButtonClassName, setBookmarksButtonClassName] = useState(
    "timeline-navegation-button"
  );
  const [exploreButtonClassName, setExploreButtonClassName] = useState(
    "timeline-navegation-button"
  );
  const [homeButtonClassName, setHomeButtonClassName] = useState(
    "timeline-navegation-selected-button"
  );
  const [listsButtonClassName, setListsButtonClassName] = useState(
    "timeline-navegation-button"
  );
  const [messagesButtonClassName, setMessagesButtonClassName] = useState(
    "timeline-navegation-button"
  );
  const [moreButtonClassName, setMoreButtonClassName] = useState(
    "timeline-navegation-button"
  );
  const [notificationsButtonClassName, setNotificationsButtonClassName] =
    useState("timeline-navegation-button");
  const [profileButtonClassName, setProfileButtonClassName] = useState(
    "timeline-navegation-button"
  );

  const change2blue = (titulo) => {
    setContentTitle(titulo);
    switch (titulo) {
      case "Home":
        setBookmarksButtonClassName("timeline-navegation-button");
        setBookmarksIconClassName("icon-grey-img");
        setExploreButtonClassName("timeline-navegation-button");
        setExploreIconClassName("icon-grey-img");
        setHomeButtonClassName("timeline-navegation-selected-button");
        setHomeIconClassName("icon-blue-img");
        setListsButtonClassName("timeline-navegation-button");
        setListsIconClassName("icon-grey-img");
        setMessagesButtonClassName("timeline-navegation-button");
        setMessagesIconClassName("icon-grey-img");
        setMoreButtonClassName("timeline-navegation-button");
        setMoreIconClassName("icon-grey-img");
        setNotificationsButtonClassName("timeline-navegation-button");
        setNotificationsIconClassName("icon-grey-img");
        setProfileButtonClassName("timeline-navegation-button");
        setProfileIconClassName("icon-grey-img");
        break;
      case "Explore":
        setBookmarksButtonClassName("timeline-navegation-button");
        setBookmarksIconClassName("icon-grey-img");
        setExploreButtonClassName("timeline-navegation-selected-button");
        setExploreIconClassName("icon-blue-img");
        setHomeButtonClassName("timeline-navegation-button");
        setHomeIconClassName("icon-grey-img");
        setListsButtonClassName("timeline-navegation-button");
        setListsIconClassName("icon-grey-img");
        setMessagesButtonClassName("timeline-navegation-button");
        setMessagesIconClassName("icon-grey-img");
        setMoreButtonClassName("timeline-navegation-button");
        setMoreIconClassName("icon-grey-img");
        setNotificationsButtonClassName("timeline-navegation-button");
        setNotificationsIconClassName("icon-grey-img");
        setProfileButtonClassName("timeline-navegation-button");
        setProfileIconClassName("icon-grey-img");
        break;

      case "Notifications":
        setBookmarksButtonClassName("timeline-navegation-button");
        setBookmarksIconClassName("icon-grey-img");
        setExploreButtonClassName("timeline-navegation-button");
        setExploreIconClassName("icon-grey-img");
        setHomeButtonClassName("timeline-navegation-button");
        setHomeIconClassName("icon-grey-img");
        setListsButtonClassName("timeline-navegation-button");
        setListsIconClassName("icon-grey-img");
        setMessagesButtonClassName("timeline-navegation-button");
        setMessagesIconClassName("icon-grey-img");
        setMoreButtonClassName("timeline-navegation-button");
        setMoreIconClassName("icon-grey-img");
        setNotificationsButtonClassName("timeline-navegation-selected-button");
        setNotificationsIconClassName("icon-blue-img");
        setProfileButtonClassName("timeline-navegation-button");
        setProfileIconClassName("icon-grey-img");
        break;
      case "Messages":
        setBookmarksButtonClassName("timeline-navegation-button");
        setBookmarksIconClassName("icon-grey-img");
        setExploreButtonClassName("timeline-navegation-button");
        setExploreIconClassName("icon-grey-img");
        setHomeButtonClassName("timeline-navegation-button");
        setHomeIconClassName("icon-grey-img");
        setListsButtonClassName("timeline-navegation-button");
        setListsIconClassName("icon-grey-img");
        setMessagesButtonClassName("timeline-navegation-selected-button");
        setMessagesIconClassName("icon-blue-img");
        setMoreButtonClassName("timeline-navegation-button");
        setMoreIconClassName("icon-grey-img");
        setNotificationsButtonClassName("timeline-navegation-button");
        setNotificationsIconClassName("icon-grey-img");
        setProfileButtonClassName("timeline-navegation-button");
        setProfileIconClassName("icon-grey-img");
        break;
      case "Bookmarks":
        setBookmarksButtonClassName("timeline-navegation-selected-button");
        setBookmarksIconClassName("icon-blue-img");
        setExploreButtonClassName("timeline-navegation-button");
        setExploreIconClassName("icon-grey-img");
        setHomeButtonClassName("timeline-navegation-button");
        setHomeIconClassName("icon-grey-img");
        setListsButtonClassName("timeline-navegation-button");
        setListsIconClassName("icon-grey-img");
        setMessagesButtonClassName("timeline-navegation-button");
        setMessagesIconClassName("icon-grey-img");
        setMoreButtonClassName("timeline-navegation-button");
        setMoreIconClassName("icon-grey-img");
        setNotificationsButtonClassName("timeline-navegation-button");
        setNotificationsIconClassName("icon-grey-img");
        setProfileButtonClassName("timeline-navegation-button");
        setProfileIconClassName("icon-grey-img");
        break;
      case "Lists":
        setBookmarksButtonClassName("timeline-navegation-button");
        setBookmarksIconClassName("icon-grey-img");
        setExploreButtonClassName("timeline-navegation-button");
        setExploreIconClassName("icon-grey-img");
        setHomeButtonClassName("timeline-navegation-button");
        setHomeIconClassName("icon-grey-img");
        setListsButtonClassName("timeline-navegation-selected-button");
        setListsIconClassName("icon-blue-img");
        setMessagesButtonClassName("timeline-navegation-button");
        setMessagesIconClassName("icon-grey-img");
        setMoreButtonClassName("timeline-navegation-button");
        setMoreIconClassName("icon-grey-img");
        setNotificationsButtonClassName("timeline-navegation-button");
        setNotificationsIconClassName("icon-grey-img");
        setProfileButtonClassName("timeline-navegation-button");
        setProfileIconClassName("icon-grey-img");
        break;
      case "Profile":
        setBookmarksButtonClassName("timeline-navegation-button");
        setBookmarksIconClassName("icon-grey-img");
        setExploreButtonClassName("timeline-navegation-button");
        setExploreIconClassName("icon-grey-img");
        setHomeButtonClassName("timeline-navegation-button");
        setHomeIconClassName("icon-grey-img");
        setListsButtonClassName("timeline-navegation-button");
        setListsIconClassName("icon-grey-img");
        setMessagesButtonClassName("timeline-navegation-button");
        setMessagesIconClassName("icon-grey-img");
        setMoreButtonClassName("timeline-navegation-button");
        setMoreIconClassName("icon-grey-img");
        setNotificationsButtonClassName("timeline-navegation-button");
        setNotificationsIconClassName("icon-grey-img");
        setProfileButtonClassName("timeline-navegation-selected-button");
        setProfileIconClassName("icon-blue-img");
        break;
      case "More":
        setBookmarksButtonClassName("timeline-navegation-button");
        setBookmarksIconClassName("icon-grey-img");
        setExploreButtonClassName("timeline-navegation-button");
        setExploreIconClassName("icon-grey-img");
        setHomeButtonClassName("timeline-navegation-button");
        setHomeIconClassName("icon-grey-img");
        setListsButtonClassName("timeline-navegation-button");
        setListsIconClassName("icon-grey-img");
        setMessagesButtonClassName("timeline-navegation-button");
        setMessagesIconClassName("icon-grey-img");
        setMoreButtonClassName("timeline-navegation-selected-button");
        setMoreIconClassName("icon-blue-img");
        setNotificationsButtonClassName("timeline-navegation-button");
        setNotificationsIconClassName("icon-grey-img");
        setProfileButtonClassName("timeline-navegation-button");
        setProfileIconClassName("icon-grey-img");
        break;
      default:
        setBookmarksButtonClassName("timeline-navegation-button");
        setBookmarksIconClassName("icon-grey-img");
        setExploreButtonClassName("timeline-navegation-button");
        setExploreIconClassName("icon-grey-img");
        setHomeButtonClassName("timeline-navegation-button");
        setHomeButtonClassName("timeline-navegation-button");
        setHomeIconClassName("icon-grey-img");
        setListsButtonClassName("timeline-navegation-button");
        setListsIconClassName("icon-grey-img");
        setMessagesButtonClassName("timeline-navegation-button");
        setMessagesIconClassName("icon-grey-img");
        setMoreButtonClassName("timeline-navegation-button");
        setMoreIconClassName("icon-grey-img");
        setNotificationsButtonClassName("timeline-navegation-button");
        setNotificationsIconClassName("icon-grey-img");
        setProfileButtonClassName("timeline-navegation-button");
        setProfileIconClassName("icon-grey-img");
        break;
    }
  };

  return (
    <div className="inline">
      <div className="timeline-navegation">
        <Img
          src={Image.twitterIcon}
          className="icon-blue-img"
          alt="twitter-logo"
        />

        <div>
          <div className="inline">
            <Img
              name="homeIcon"
              src={Image.homeIcon}
              alt="home-icon"
              className={homeIconClassName}
              onClick={() => change2blue("Home")}
            />
            <Button
              text="Home"
              className={homeButtonClassName}
              onClick={() => change2blue("Home")}
            />
          </div>
        </div>
        <div>
          <div className="inline">
            <Img
              name="exploreIcon"
              src={Image.exploreIcon}
              alt="explore-icon"
              className={exploreIconClassName}
              onClick={() => change2blue("Explore")}
            />
            <Button
              text="Explore"
              className={exploreButtonClassName}
              onClick={() => change2blue("Explore")}
            />
          </div>
        </div>
        <div>
          <div className="inline">
            <Img
              name="notificationsIcon"
              src={Image.notificationIcon}
              alt="notifications-icon"
              className={notificationsIconClassName}
              onClick={() => change2blue("Notifications")}
            />

            <Button
              text="Notifications"
              className={notificationsButtonClassName}
              onClick={() => change2blue("Notifications")}
            />
          </div>
        </div>
        <div>
          <div className="inline">
            <Img
              name="MessagesIcon"
              src={Image.messageIcon}
              alt="messages-icon"
              className={messagesIconClassName}
              onClick={() => change2blue("Messages")}
            />
            <Button
              text="Messages"
              className={messagesButtonClassName}
              onClick={() => change2blue("Messages")}
            />
          </div>
        </div>
        <div>
          <div className="inline">
            <Img
              name="bookmarksIcon"
              src={Image.bookmarkIcon}
              alt="bookmarks-icon"
              className={bookmarksIconClassName}
              onClick={() => change2blue("Bookmarks")}
            />

            <Button
              text="Bookmarks"
              className={bookmarksButtonClassName}
              onClick={() => change2blue("Bookmarks")}
            />
          </div>
        </div>
        <div>
          <div className="inline">
            <Img
              name="listsIcon"
              src={Image.listIcon}
              alt="lists-icon"
              className={listsIconClassName}
              onClick={() => change2blue("Lists")}
            />

            <Button
              text="Lists"
              className={listsButtonClassName}
              onClick={() => change2blue("Lists")}
            />
          </div>
        </div>
        <div>
          <div className="inline">
            <Img
              name="profileIcon"
              src={Image.profileIcon}
              alt="profile-icon"
              className={profileIconClassName}
              onClick={() => change2blue("Profile")}
            />
            <Button
              text="Profile"
              className={profileButtonClassName}
              onClick={() => change2blue("Profile")}
            />
          </div>
        </div>
        <div>
          <div className="inline">
            <Img
              name="moreIcon"
              src={Image.moreIcon}
              alt="more-icon"
              className={moreIconClassName}
              onClick={() => change2blue("More")}
            />
            <Button
              text="More"
              className={moreButtonClassName}
              onClick={() => change2blue("More")}
            />
          </div>
        </div>
      </div>

      <div className="timeline-body">
        <Label
          text={contentTitle}
          onChange={(e) => setContentTitle(e.target.value)}
          className="timeline-content-title-label"
        />
        <div className="inline">
          <Img
            src={Image.profileIcon}
            className="icon-verified-blue-img"
            alt="profile-icon"
          />
          <div>
            <div className="inline">
              <Label text="Annie" className="timeline-content-user-label" />
              <Img
                src={Image.verifiedIcon}
                className="icon-verified-blue-img"
                alt="verified-icon"
              />
              <Label text="@annie" className="timeline-content-at-user-label" />
            </div>
            <div>
              <Label
                text="This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis "
                className="tweet-body-label"
              />
            </div>
          </div>
        </div>
        <div className="grey-border-div"></div>
        <div className="inline">
          <Img
            src={Image.profileIcon}
            className="icon-verified-blue-img"
            alt="profile-icon"
          />
          <div>
            <div className="inline">
              <Label text="Annie" className="timeline-content-user-label" />
              <Img
                src={Image.verifiedIcon}
                className="icon-verified-blue-img"
                alt="verified-icon"
              />
              <Label text="@annie" className="timeline-content-at-user-label" />
            </div>
            <div>
              <Label
                text="This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis This is a tweet. It can be long, or short. Depends on what you have to say. It can have some hashtags too. #likethis "
                className="timeline-content-tweet-body-label"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-search-trend">
        <div className="search-bar">
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
        </div>
        <div className="trend-list-body">
          <div className="trend-list-title">
            <Label text="Paris trend" className="trending-title-label" />
          </div>
          <div className="trend-body">
            <Label
              text="1. Trending"
              className="trending-number-subtitle-label"
            />
            <Label text="#JessieMueller" className="trending-hashtag-label" />
            <Label text="456K Tweets" className="trending-k-tweets-label" />
          </div>
          <div className="grey-border-div"></div>
          <div className="trend-body">
            <Label
              text="2. Trending"
              className="trending-number-subtitle-label"
            />
            <Label text="#ThelmaJones" className="trending-hashtag-label" />
            <Label text="456K Tweets" className="trending-k-tweets-label" />
          </div>
          <div className="grey-border-div"></div>
          <div className="trend-body">
            <Label
              text="3. Trending"
              className="trending-number-subtitle-label"
            />
            <Label text="#LoisPearson" className="trending-hashtag-label" />
            <Label text="456K Tweets" className="trending-k-tweets-label" />
          </div>
          <div className="grey-border-div"></div>{" "}
          <div className="trend-body">
            <Label
              text="4. Trending"
              className="trending-number-subtitle-label"
            />
            <Label text="#WilmaBoyd" className="trending-hashtag-label" />
            <Label text="456K Tweets" className="trending-k-tweets-label" />
          </div>
          <div className="grey-border-div"></div>{" "}
          <div className="trend-body">
            <Label
              text="5. Trending"
              className="trending-number-subtitle-label"
            />
            <Label text="#WilmaBoydr" className="trending-hashtag-label" />
            <Label text="456K Tweets" className="trending-k-tweets-label" />
          </div>
          <div className="grey-border-div"></div>{" "}
          <div className="trend-body">
            <Label
              text="6. Trending"
              className="trending-number-subtitle-label"
            />
            <Label text="#ErikBaker" className="trending-hashtag-label" />
            <Label text="456K Tweets" className="trending-k-tweets-label" />
          </div>
          <div className="grey-border-div"></div>
          <div className="trend-list-title">
            <Button
              text="Show more"
              className="timeline-trends-show-more-button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
