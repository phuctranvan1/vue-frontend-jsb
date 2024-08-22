<template>
  <div class="music1">
    <section class="listening-history">
      <div class="category-parent">
        <div class="category">List of Music</div>
        <div class="see-all-wrapper">
          <div class="see-all">See All</div>
        </div>
      </div>
      <div class="history-card">
        <div class="history-item">
          <div class="track-info">
            <ItemDetails
              itemImagePadding="unset"
              friend="/friend.svg"
              favourite="/favourite.svg"
              image="/image1@2x.png"
              propTop="8px"
              propWidth="870px"
              tranphuc="She will be loved"
              propMinWidth="125px"
              propDisplay="inline-block"
              admin="Maroon 5"
              propMinWidth1="61px"
            /><ItemDetails
              itemImagePadding="0px 6px 0px 0px"
              friend="/friend-1.svg"
              favourite="/favourite-1.svg"
              image="/image-11@2x.png"
              propTop="8px"
              propWidth="864px"
              tranphuc="Dumb Little Bug"
              propMinWidth="119px"
              propDisplay="inline-block"
              admin="Eld"
              propMinWidth1="21px"
            /><ItemDetails
              itemImagePadding="0px 5px 0px 0px"
              friend="/friend-2.svg"
              favourite="/favourite-2.svg"
              image="/image-2@2x.png"
              propTop="8px"
              propWidth="865px"
              tranphuc="Living my best life"
              propMinWidth="unset"
              propDisplay="unset"
              admin="User"
              propMinWidth1="31px"
            />
          </div>
          <div class="scroll-wrapper">
            <img class="scroll-icon" alt="" src="/scroll.svg" />
          </div>
        </div>
      </div>
    </section>
    <header class="discover2">
      <div class="discover3">
        <h3 class="music2">Music</h3>
        <img class="icon9" loading="lazy" alt="" src="/icon-7.svg" />
      </div>
      <div class="profile4">
        <img class="image-icon1" alt="" src="/image@2x.png" />
        <div class="detail2">
          <div class="text1">
            <a class="wade-warren1">Wade Warren</a>
            <div class="premium1">Premium</div>
          </div>
        </div>
      </div>
    </header>
    <div class="sidebar1">
      <div class="menu-navigation">
        <img
          class="logo-icon1"
          loading="lazy"
          alt=""
          src="/logo@2x.png"
          @click="onLogoImageClick"
        />
        <div class="menu2">
          <div class="menu3">Menu</div>
          <div class="menu2">
            <div class="home3" @click="onLogoImageClick">
              <div class="home4">
                <img class="icon10" alt="" src="/icon.svg" />
                <div class="home5">Home</div>
              </div>
            </div>
            <div class="search2" @click="onSearchContainerClick">
              <img class="icon10" alt="" src="/icon-1.svg" />
              <div class="search3">Search</div>
            </div>
            <div class="search2" @click="onPlaylistsContainerClick">
              <img class="icon10" alt="" src="/icon-2.svg" />
              <div class="user1">User</div>
            </div>
            <div class="albums1">
              <img class="icon10" alt="" src="/icon-41.svg" />
              <div class="home5">Music</div>
            </div>
            <div class="following1" @click="onFollowingContainerClick">
              <img class="icon10" alt="" src="/icon-51.svg" />
              <div class="search3">Profile</div>
            </div>
          </div>
        </div>
      </div>
      <div class="stream-details">
        <div class="menu2">
          <div class="general3">General</div>
          <div class="menu2">
            <div class="settings2" @click="onSettingsContainerClick">
              <img class="icon10" alt="" src="/icon-5.svg" />
              <div class="settings3">Settings</div>
            </div>
            <div class="log-out2">
              <img class="icon10" alt="" src="/icon-6.svg" />
              <div class="log-out3">Log out</div>
            </div>
          </div>
        </div>
        <div class="mobile-stream1">
          <div class="detail3">
            <div class="go-mobile1">Go Mobile</div>
            <div class="icon-download1">
              <img
                class="app-store-icon1"
                loading="lazy"
                alt=""
                src="/app-store@2x.png"
              />
              <img
                class="app-store-icon1"
                loading="lazy"
                alt=""
                src="/google-play@2x.png"
              />
            </div>
          </div>
          <div class="legal-privacy-container1">
            <p class="legal-privacy1">
              Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃ Imprint
              Resource Chart
            </p>
            <p class="language-english-us1">
              <span class="language1">Language</span>
              <span class="span1">: </span>
              <span>English (US)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <FrameComponent
      propAlignSelf="unset"
      propPosition="absolute"
      propTop="721px"
      propLeft="346px"
      propBorderRadius="20px"
      propBackgroundColor="#fff"
      propWidth="1062px"
      propOverflow="hidden"
      propPadding="21px 16px 10px 18px"
      propPadding1="0px 20px"
      propAlignSelf1="unset"
      propWidth1="248px"
      propDisplay="inline-block"
      propPadding2="0px 24px"
      group="/group1.svg"
      propAlignSelf2="unset"
      propWidth2="248px"
      propFlex="unset"
    />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import ItemDetails from "../components/ItemDetails.vue";
  import FrameComponent from "../components/FrameComponent.vue";

  export default defineComponent({
    name: "Music",
    components: { ItemDetails, FrameComponent },
    methods: {
      onLogoImageClick() {
        this.$router.push("/discover");
      },
      onSearchContainerClick() {
        this.$router.push("/search");
      },
      onPlaylistsContainerClick() {
        this.$router.push("/user");
      },
      onFollowingContainerClick() {
        this.$router.push("/");
      },
      onSettingsContainerClick() {
        this.$router.push("/settings");
      },
    },
  });
</script>
<style scoped>
  .category {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    display: inline-block;
    min-width: 128px;
  }
  .see-all {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
  }
  .see-all-wrapper {
    width: 315px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
    box-sizing: border-box;
    text-align: right;
    font-size: var(--font-size-sm);
    color: var(--color-foundation-dark-lighter);
  }
  .category-parent {
    width: 913px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .track-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
    min-width: 565px;
    max-width: 100%;
  }
  .scroll-icon {
    width: 0px;
    flex: 1;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    mix-blend-mode: normal;
  }
  .scroll-wrapper {
    height: 185px;
    width: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-106xl) 0px 0px;
    box-sizing: border-box;
  }
  .history-item {
    width: 924px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-35xl);
    max-width: 100%;
  }
  .history-card {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
  }
  .listening-history {
    position: absolute;
    top: 108px;
    left: 346px;
    border-radius: var(--br-5xl);
    background-color: var(--color-gray-500);
    width: 995px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xl) var(--padding-8xs) var(--padding-83xl)
      var(--padding-5xl);
    box-sizing: border-box;
    gap: var(--gap-21xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .music2 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.01em;
    line-height: 29px;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    min-width: 65px;
    white-space: nowrap;
  }
  .icon9 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover3 {
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-6xs);
  }
  .image-icon1 {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren1 {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
    white-space: nowrap;
  }
  .premium1 {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text1 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .profile4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover2 {
    position: absolute;
    top: 37px;
    left: 256px;
    width: 1051px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px var(--padding-27xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .logo-icon1 {
    align-self: stretch;
    height: 63px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    cursor: pointer;
  }
  .menu3 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 48px;
  }
  .icon10 {
    height: 20px;
    width: 20px;
    position: relative;
    min-height: 20px;
  }
  .home5 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 45px;
  }
  .home4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .home3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  .search3 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 53px;
  }
  .search2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    cursor: pointer;
  }
  .user1 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 36px;
  }
  .albums1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    color: var(--color-foundation-orange-normal);
  }
  .following1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
    cursor: pointer;
  }
  .menu2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .menu-navigation {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 66px;
  }
  .general3 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 75px;
  }
  .settings3 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 66px;
  }
  .settings2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-mini);
    cursor: pointer;
  }
  .log-out3 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 59px;
  }
  .log-out2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-mini);
  }
  .go-mobile1 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 90px;
  }
  .app-store-icon1 {
    align-self: stretch;
    width: 115px;
    position: relative;
    border-radius: var(--br-7xs);
    max-height: 100%;
    object-fit: cover;
    min-height: 39px;
  }
  .icon-download1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
  }
  .detail3 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .legal-privacy1 {
    margin: 0;
  }
  .language1 {
    color: var(--color-mediumblue);
  }
  .span1 {
    color: var(--color-foundation-dark-lighter);
  }
  .language-english-us1 {
    margin: 0;
    color: var(--color-gray-200);
  }
  .legal-privacy-container1 {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 150%;
  }
  .mobile-stream1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .stream-details {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-135xl);
  }
  .sidebar1 {
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: var(--color-whitesmoke-100);
    border-right: 1px solid var(--color-foundation-orange-light-active);
    box-sizing: border-box;
    width: 315px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 27px var(--padding-13xl) var(--padding-21xl);
    gap: var(--gap-84xl);
    z-index: 1;
  }
  .music1 {
    width: 100%;
    height: 960px;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
    font-family: var(--font-baloo-da);
  }

  @media screen and (max-width: 625px) {
    .category-parent {
      flex-wrap: wrap;
    }

    .track-info {
      min-width: 100%;
    }

    .music1 {
      height: auto;
      min-height: 960;
    }
  }
  @media screen and (max-width: 450px) {
    .category {
      font-size: var(--font-size-base);
      line-height: 19px;
    }
  }
</style>
