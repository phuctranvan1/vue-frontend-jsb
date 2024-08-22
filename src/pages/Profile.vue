<template>
  <div class="profile">
    <div class="sidebar" @click="onSidebarContainerClick">
      <div class="side-bar-top">
        <img
          class="logo-icon"
          loading="lazy"
          alt=""
          src="/logo@2x.png"
          @click="onSidebarContainerClick"
        />
        <div class="menu">
          <div class="menu1">Menu</div>
          <div class="menu">
            <div class="home" @click="onSidebarContainerClick">
              <div class="home1">
                <img class="icon" loading="lazy" alt="" src="/icon.svg" />
                <div class="music">Home</div>
              </div>
            </div>
            <div class="search" @click="onSearchContainerClick">
              <img class="icon" loading="lazy" alt="" src="/icon-1.svg" />
              <div class="search1">Search</div>
            </div>
            <div class="search" @click="onPlaylistsContainerClick">
              <img class="icon" loading="lazy" alt="" src="/icon-2.svg" />
              <div class="user">User</div>
            </div>
            <div class="search" @click="onAlbumsContainerClick">
              <img class="icon" loading="lazy" alt="" src="/icon-3.svg" />
              <div class="music">Music</div>
            </div>
            <div class="following">
              <img class="icon" loading="lazy" alt="" src="/icon-4.svg" />
              <div class="search1">Profile</div>
            </div>
          </div>
        </div>
      </div>
      <div class="general-parent">
        <div class="menu">
          <div class="general1">General</div>
          <div class="menu">
            <div class="settings" @click="onSettingsContainerClick">
              <img class="icon" loading="lazy" alt="" src="/icon-5.svg" />
              <div class="settings1">Settings</div>
            </div>
            <div class="log-out">
              <img class="icon" loading="lazy" alt="" src="/icon-6.svg" />
              <div class="log-out1">Log out</div>
            </div>
          </div>
        </div>
        <div class="mobile-stream">
          <div class="detail">
            <div class="go-mobile">Go Mobile</div>
            <div class="icon-download">
              <img
                class="app-store-icon"
                loading="lazy"
                alt=""
                src="/app-store@2x.png"
              />
              <img
                class="app-store-icon"
                loading="lazy"
                alt=""
                src="/google-play@2x.png"
              />
            </div>
          </div>
          <div class="legal-privacy-container">
            <p class="legal-privacy">
              Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃ Imprint
              Resource Chart
            </p>
            <p class="language-english-us">
              <span class="language">Language</span>
              <span class="span">: </span>
              <span>English (US)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <main class="profile-inner">
      <section class="discover-parent">
        <header class="discover">
          <div class="discover1">
            <h3 class="profile2">Profile</h3>
            <img class="icon7" loading="lazy" alt="" src="/icon-7.svg" />
          </div>
          <div class="profile3">
            <img class="image-icon" loading="lazy" alt="" src="/image@2x.png" />
            <div class="detail1">
              <div class="text">
                <a class="wade-warren">Wade Warren</a>
                <div class="premium">Premium</div>
              </div>
              <img class="icon7" loading="lazy" alt="" />
            </div>
          </div>
        </header>
        <Charts1 /><MusicCard />
      </section>
    </main>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import Charts1 from "../components/Charts1.vue";
  import MusicCard from "../components/MusicCard.vue";

  export default defineComponent({
    name: "Profile",
    components: { Charts1, MusicCard },
    methods: {
      onSidebarContainerClick() {
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
      onSettingsContainerClick() {
        this.$router.push("/settings");
      },
    },
  });
</script>
<style scoped>
  .logo-icon {
    align-self: stretch;
    height: 63px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    cursor: pointer;
  }
  .menu1 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 48px;
  }
  .icon {
    height: 20px;
    width: 20px;
    position: relative;
    min-height: 20px;
  }
  .home1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .home {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
  }
  .search1 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 53px;
  }
  .search {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    cursor: pointer;
  }
  .user {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 36px;
  }
  .music {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 45px;
  }
  .following {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
    color: var(--color-foundation-orange-normal);
  }
  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .side-bar-top {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 75px;
  }
  .general1 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 75px;
  }
  .settings1 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 66px;
  }
  .settings {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-mini);
    cursor: pointer;
  }
  .log-out1 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 59px;
  }
  .log-out {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-mini);
  }
  .go-mobile {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 90px;
  }
  .app-store-icon {
    align-self: stretch;
    width: 115px;
    position: relative;
    border-radius: var(--br-7xs);
    max-height: 100%;
    object-fit: cover;
    min-height: 39px;
  }
  .icon-download {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
  }
  .detail {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .legal-privacy {
    margin: 0;
  }
  .language {
    color: var(--color-mediumblue);
  }
  .span {
    color: var(--color-foundation-dark-lighter);
  }
  .language-english-us {
    margin: 0;
    color: var(--color-gray-200);
  }
  .legal-privacy-container {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 150%;
  }
  .mobile-stream {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .general-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-135xl);
  }
  .sidebar {
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
    padding: var(--padding-lg) var(--padding-13xl) var(--padding-21xl);
    gap: var(--gap-84xl);
    cursor: pointer;
  }
  .profile2 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.01em;
    line-height: 29px;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    min-width: 76px;
    white-space: nowrap;
  }
  .icon7 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover1 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 179px 0px 0px;
    gap: 8px 7px;
  }
  .image-icon {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
    white-space: nowrap;
  }
  .premium {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-11xl);
  }
  .profile3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover {
    width: 1051px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .discover-parent {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-12xl-5);
    max-width: 100%;
  }
  .profile-inner {
    height: 916px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-25xl) 0px 0px;
    box-sizing: border-box;
    max-width: calc(100% - 347px);
  }
  .profile {
    width: 100%;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-13xl);
    line-height: normal;
    letter-spacing: normal;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
    font-family: var(--font-baloo-da);
  }

  @media screen and (max-width: 925px) {
    .sidebar {
      display: none;
      padding-top: var(--padding-xl);
      padding-bottom: var(--padding-7xl);
      box-sizing: border-box;
    }

    .profile-inner {
      padding-top: var(--padding-10xl);
      box-sizing: border-box;
      max-width: 100%;
    }

    .profile {
      gap: var(--gap-base);
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 700px) {
    .discover-parent {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 450px) {
    .side-bar-top {
      gap: 37px;
    }

    .general-parent {
      gap: var(--gap-58xl);
    }

    .sidebar {
      gap: var(--gap-32xl);
      padding-bottom: var(--padding-xl);
      box-sizing: border-box;
    }

    .discover1 {
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .profile-inner {
      padding-top: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
