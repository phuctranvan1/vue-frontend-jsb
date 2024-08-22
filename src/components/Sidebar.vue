<template>
  <div class="sidebar4" :style="sidebarStyle">
    <div class="frame-parent7">
      <div class="logo-wrapper">
        <img
          class="logo-icon4"
          loading="lazy"
          alt=""
          :src="logo"
          @click="onLogoImageClick"
        />
      </div>
      <div class="menu8">
        <div class="menu9">Menu</div>
        <div class="menu8">
          <div class="home12" @click="onLogoImageClick">
            <div class="home13">
              <img class="icon51" loading="lazy" alt="" src="/icon.svg" />
              <div class="home14">Home</div>
            </div>
          </div>
          <div class="search10" @click="onSearchContainerClick">
            <img class="icon51" loading="lazy" alt="" :src="icon1" />
            <div class="search11" :style="searchStyle">Search</div>
          </div>
          <div class="playlists4" @click="onPlaylistsContainerClick">
            <img class="icon51" loading="lazy" alt="" :src="icon2" />
            <div class="user6" :style="userStyle">User</div>
          </div>
          <div class="playlists4" @click="onAlbumsContainerClick">
            <img class="icon51" loading="lazy" alt="" src="/icon-3.svg" />
            <div class="home14">Music</div>
          </div>
          <div class="following4" @click="onFollowingContainerClick">
            <img class="icon51" loading="lazy" alt="" src="/icon-51.svg" />
            <div class="search11">Profile</div>
          </div>
        </div>
      </div>
    </div>
    <div class="general-group">
      <div class="menu8">
        <div class="general9">General</div>
        <div class="menu8">
          <div class="settings10" @click="onSettingsContainerClick">
            <img class="icon51" loading="lazy" alt="" src="/icon-5.svg" />
            <div class="settings11">Settings</div>
          </div>
          <div class="log-out8">
            <img class="icon51" loading="lazy" alt="" src="/icon-6.svg" />
            <div class="log-out9">Log out</div>
          </div>
        </div>
      </div>
      <div class="mobile-stream4">
        <div class="detail11">
          <div class="go-mobile4">Go Mobile</div>
          <div class="icon-download4">
            <img
              class="app-store-icon4"
              loading="lazy"
              alt=""
              :src="appStore"
            />
            <img
              class="app-store-icon4"
              loading="lazy"
              alt=""
              :src="googlePlay"
            />
          </div>
        </div>
        <div class="legal-privacy-container4">
          <p class="legal-privacy4">
            Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃ Imprint
            Resource Chart
          </p>
          <p class="language-english-us4">
            <span class="language4">Language</span>
            <span class="span4">: </span>
            <span>English (US)</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Sidebar",
    props: {
      logo: { type: String },
      icon1: { type: String },
      icon2: { type: String },
      appStore: { type: String },
      googlePlay: { type: String },
      frameDivPosition: { type: String },
      frameDivTop: { type: [Object, Array, String, Number, Boolean] },
      frameDivLeft: { type: [Object, Array, String, Number, Boolean] },
      playlistsColor: { type: String },
      albumsColor: { type: String },
      onSearchContainerClick: { type: Function },
      onPlaylistsContainerClick: { type: Function },
    },
    methods: {
      onLogoImageClick() {
        this.$router.push("/discover");
      },
      onPlaylistsContainerClick1() {
        this.$router.push("/user");
      },
      onAlbumsContainerClick() {
        this.$router.push("/music");
      },
      onFollowingContainerClick() {
        this.$router.push("/");
      },
      onSettingsContainerClick() {
        this.$router.push("/settings");
      },
    },
    computed: {
      sidebarStyle() {
        return {
          position: this.frameDivPosition,
          top: this.frameDivTop,
          left: this.frameDivLeft,
        };
      },
      searchStyle() {
        return {
          color: this.playlistsColor,
        };
      },
      userStyle() {
        return {
          color: this.albumsColor,
        };
      },
    },
  });
</script>
<style scoped>
  .logo-icon4 {
    height: 63px;
    width: 250px;
    position: relative;
    object-fit: cover;
    cursor: pointer;
  }
  .logo-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px 0px var(--padding-11xs);
  }
  .menu9 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 48px;
  }
  .icon51 {
    height: 20px;
    width: 20px;
    position: relative;
    min-height: 20px;
  }
  .home14 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 45px;
  }
  .home13 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .home12 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  .search11 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 53px;
  }
  .search10 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    color: var(--color-foundation-orange-normal);
  }
  .user6 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 36px;
  }
  .playlists4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    cursor: pointer;
  }
  .following4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
    cursor: pointer;
  }
  .menu8 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .frame-parent7 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-44xl);
  }
  .general9 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 75px;
  }
  .settings11 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 66px;
  }
  .settings10 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-mini);
    cursor: pointer;
  }
  .log-out9 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 59px;
  }
  .log-out8 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-mini);
  }
  .go-mobile4 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 90px;
  }
  .app-store-icon4 {
    align-self: stretch;
    width: 115px;
    position: relative;
    border-radius: var(--br-7xs);
    max-height: 100%;
    object-fit: cover;
    min-height: 39px;
  }
  .icon-download4 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
  }
  .detail11 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .legal-privacy4 {
    margin: 0;
  }
  .language4 {
    color: var(--color-mediumblue);
  }
  .span4 {
    color: var(--color-foundation-dark-lighter);
  }
  .language-english-us4 {
    margin: 0;
    color: var(--color-gray-200);
  }
  .legal-privacy-container4 {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 150%;
  }
  .mobile-stream4 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .general-group {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-135xl);
  }
  .sidebar4 {
    width: 315px;
    background-color: var(--color-whitesmoke-100);
    border-right: 1px solid var(--color-foundation-orange-light-active);
    box-sizing: border-box;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xl) var(--padding-11xl) var(--padding-21xl)
      var(--padding-13xl);
    gap: var(--gap-84xl);
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
    font-family: var(--font-baloo-da);
  }

  @media screen and (max-width: 1000px) {
    .sidebar4 {
      display: none;
      padding-top: var(--padding-xl);
      padding-bottom: var(--padding-7xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 450px) {
    .frame-parent7 {
      gap: var(--gap-12xl);
    }

    .general-group {
      gap: var(--gap-58xl);
    }

    .sidebar4 {
      gap: var(--gap-32xl);
      padding-bottom: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
