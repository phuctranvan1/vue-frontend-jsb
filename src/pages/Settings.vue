<template>
  <div class="settings4">
    <ListeningHistory />
    <header class="discover4">
      <div class="discover5">
        <h3 class="settings5">Settings</h3>
        <img class="icon17" loading="lazy" alt="" src="/icon1.svg" />
      </div>
      <div class="profile6">
        <img class="image-icon2" loading="lazy" alt="" src="/image@2x.png" />
        <div class="detail4">
          <div class="text2">
            <a class="wade-warren2">Wade Warren</a>
            <div class="premium2">Premium</div>
          </div>
        </div>
      </div>
    </header>
    <div class="sidebar2">
      <div class="sidebar-content-parent">
        <div class="sidebar-content">
          <img
            class="logo-icon2"
            loading="lazy"
            alt=""
            src="/logo@2x.png"
            @click="onLogoImageClick"
          />
          <div class="menu4">
            <div class="menu5">Menu</div>
            <div class="menu4">
              <div class="home6" @click="onLogoImageClick">
                <div class="home7">
                  <img class="icon18" alt="" src="/icon.svg" />
                  <div class="home8">Home</div>
                </div>
              </div>
              <div class="search4" @click="onSearchContainerClick">
                <img class="icon18" alt="" src="/icon-1.svg" />
                <div class="search5">Search</div>
              </div>
              <div class="search4" @click="onPlaylistsContainerClick">
                <img class="icon18" alt="" src="/icon-2.svg" />
                <div class="user2">User</div>
              </div>
              <div class="search4" @click="onAlbumsContainerClick">
                <img class="icon18" alt="" src="/icon-3.svg" />
                <div class="home8">Music</div>
              </div>
              <div class="following2" @click="onFollowingContainerClick">
                <img class="icon18" alt="" src="/icon-51.svg" />
                <div class="search5">Profile</div>
              </div>
            </div>
          </div>
        </div>
        <div class="menu4">
          <div class="general5">General</div>
          <div class="navigation5">
            <div class="settings6">
              <img class="icon18" alt="" src="/icon-61.svg" />
              <div class="settings7">Settings</div>
            </div>
            <div class="log-out4">
              <img class="icon18" alt="" src="/icon-6.svg" />
              <div class="log-out5">Log out</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mobile-stream2">
        <div class="detail5">
          <div class="go-mobile2">Go Mobile</div>
          <div class="icon-download2">
            <img
              class="app-store-icon2"
              loading="lazy"
              alt=""
              src="/app-store@2x.png"
            />
            <img
              class="app-store-icon2"
              loading="lazy"
              alt=""
              src="/google-play@2x.png"
            />
          </div>
        </div>
        <div class="legal-privacy-container2">
          <p class="legal-privacy2">
            Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃ Imprint
            Resource Chart
          </p>
          <p class="language-english-us2">
            <span class="language2">Language</span>
            <span class="span2">: </span>
            <span>English (US)</span>
          </p>
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
  import ListeningHistory from "../components/ListeningHistory.vue";
  import FrameComponent from "../components/FrameComponent.vue";

  export default defineComponent({
    name: "Settings",
    components: { ListeningHistory, FrameComponent },
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
      onAlbumsContainerClick() {
        this.$router.push("/music");
      },
      onFollowingContainerClick() {
        this.$router.push("/");
      },
    },
  });
</script>
<style scoped>
  .settings5 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.01em;
    line-height: 29px;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    min-width: 94px;
    white-space: nowrap;
  }
  .icon17 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover5 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px 80px;
    gap: var(--gap-6xs);
  }
  .image-icon2 {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren2 {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
    white-space: nowrap;
  }
  .premium2 {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .profile6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover4 {
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
  .logo-icon2 {
    align-self: stretch;
    height: 63px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    cursor: pointer;
  }
  .menu5 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 48px;
  }
  .icon18 {
    height: 20px;
    width: 20px;
    position: relative;
    min-height: 20px;
  }
  .home8 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 45px;
  }
  .home7 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .home6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  .search5 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 53px;
  }
  .search4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    cursor: pointer;
  }
  .user2 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 36px;
  }
  .following2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
    cursor: pointer;
  }
  .menu4 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .sidebar-content {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-32xl);
  }
  .general5 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 75px;
  }
  .settings7 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 66px;
  }
  .settings6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-mini);
  }
  .log-out5 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 59px;
  }
  .log-out4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-mini);
    color: var(--color-foundation-dark-lighter);
  }
  .navigation5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    color: var(--color-foundation-orange-normal);
  }
  .sidebar-content-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-84xl);
  }
  .go-mobile2 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 90px;
  }
  .app-store-icon2 {
    align-self: stretch;
    width: 115px;
    position: relative;
    border-radius: var(--br-7xs);
    max-height: 100%;
    object-fit: cover;
    min-height: 39px;
  }
  .icon-download2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
  }
  .detail5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .legal-privacy2 {
    margin: 0;
  }
  .language2 {
    color: var(--color-mediumblue);
  }
  .span2 {
    color: var(--color-foundation-dark-lighter);
  }
  .language-english-us2 {
    margin: 0;
    color: var(--color-gray-200);
  }
  .legal-privacy-container2 {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 150%;
  }
  .mobile-stream2 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .sidebar2 {
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
    padding: 42px var(--padding-13xl) var(--padding-21xl);
    gap: var(--gap-135xl);
    z-index: 1;
  }
  .settings4 {
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

  @media screen and (max-width: 750px) {
    .settings4 {
      height: auto;
      min-height: 960;
    }
  }
</style>
