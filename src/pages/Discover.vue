<template>
  <div class="discover6">
    <div class="sidebar3">
      <div class="side-bar-top1">
        <img class="logo-icon3" loading="lazy" alt="" src="/logo@2x.png" />
        <div class="menu6">
          <div class="menu7">Menu</div>
          <nav class="navigation6">
            <div class="home9">
              <div class="home10">
                <img class="icon25" loading="lazy" alt="" src="/icon2.svg" />
                <div class="home11">Home</div>
              </div>
            </div>
            <div class="search6" @click="onSearchContainerClick">
              <img class="icon25" loading="lazy" alt="" src="/icon-1.svg" />
              <div class="search7">Search</div>
            </div>
            <div class="search6" @click="onPlaylistsContainerClick">
              <img class="icon25" loading="lazy" alt="" src="/icon-2.svg" />
              <div class="user3">User</div>
            </div>
            <div class="search6" @click="onAlbumsContainerClick">
              <img class="icon25" loading="lazy" alt="" src="/icon-3.svg" />
              <div class="home11">Music</div>
            </div>
            <div class="following3" @click="onFollowingContainerClick">
              <img class="icon25" loading="lazy" alt="" src="/icon-51.svg" />
              <div class="search7">Profile</div>
            </div>
          </nav>
        </div>
      </div>
      <div class="side-bar-bottom">
        <div class="menu6">
          <div class="general7">General</div>
          <div class="menu6">
            <div class="settings8" @click="onSettingsContainerClick">
              <img class="icon25" loading="lazy" alt="" src="/icon-5.svg" />
              <div class="settings9">Settings</div>
            </div>
            <div class="log-out6">
              <img class="icon25" loading="lazy" alt="" src="/icon-6.svg" />
              <div class="log-out7">Log out</div>
            </div>
          </div>
        </div>
        <div class="mobile-stream3">
          <div class="detail6">
            <div class="go-mobile3">Go Mobile</div>
            <div class="icon-download3">
              <img
                class="app-store-icon3"
                loading="lazy"
                alt=""
                src="/app-store@2x.png"
              />
              <img
                class="app-store-icon3"
                loading="lazy"
                alt=""
                src="/google-play@2x.png"
              />
            </div>
          </div>
          <div class="legal-privacy-container3">
            <p class="legal-privacy3">
              Legal ⁃ Privacy ⁃ Cookie Policy ⁃ Cookie Blog Manage ⁃ Imprint
              Resource Chart
            </p>
            <p class="language-english-us3">
              <span class="language3">Language</span>
              <span class="span3">: </span>
              <span>English (US)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <main class="content">
      <section class="main-content">
        <div class="discover7">
          <div class="discover8">
            <h3 class="discover9">Discover</h3>
            <img class="icon32" loading="lazy" alt="" src="/icon-7.svg" />
          </div>
          <div class="profile9">
            <img
              class="image-icon3"
              loading="lazy"
              alt=""
              src="/image@2x.png"
            />
            <div class="detail7">
              <div class="text3">
                <a class="wade-warren3">Wade Warren</a>
                <div class="premium3">Premium</div>
              </div>
              <img class="icon32" alt="" />
            </div>
          </div>
        </div>
        <Charts /><FrameComponent1 />
      </section>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Charts from "../components/Charts.vue";
  import FrameComponent1 from "../components/FrameComponent1.vue";

  export default defineComponent({
    name: "Discover",
    components: { Charts, FrameComponent1 },
    methods: {
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
      onSettingsContainerClick() {
        this.$router.push("/settings");
      },
    },
  });
</script>
<style scoped>
  .logo-icon3 {
    align-self: stretch;
    height: 63px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    z-index: 1;
  }
  .menu7 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 48px;
  }
  .icon25 {
    height: 20px;
    width: 20px;
    position: relative;
    min-height: 20px;
  }
  .home11 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 45px;
  }
  .home10 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
  }
  .home9 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: var(--color-foundation-orange-normal);
  }
  .search7 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 53px;
  }
  .search6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-xl);
    cursor: pointer;
  }
  .user3 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 36px;
  }
  .following3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-lgi);
    cursor: pointer;
  }
  .navigation6 {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
    font-family: var(--font-baloo-da);
  }
  .menu6 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .side-bar-top1 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 69px;
  }
  .general7 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 75px;
  }
  .settings9 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 66px;
  }
  .settings8 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-mini);
    cursor: pointer;
  }
  .log-out7 {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 59px;
  }
  .log-out6 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-mini);
  }
  .go-mobile3 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    text-transform: uppercase;
    display: inline-block;
    min-width: 90px;
  }
  .app-store-icon3 {
    align-self: stretch;
    width: 115px;
    position: relative;
    border-radius: var(--br-7xs);
    max-height: 100%;
    object-fit: cover;
    min-height: 39px;
  }
  .icon-download3 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--gap-xl);
  }
  .detail6 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .legal-privacy3 {
    margin: 0;
  }
  .language3 {
    color: var(--color-mediumblue);
  }
  .span3 {
    color: var(--color-foundation-dark-lighter);
  }
  .language-english-us3 {
    margin: 0;
    color: var(--color-gray-200);
  }
  .legal-privacy-container3 {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 150%;
  }
  .mobile-stream3 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .side-bar-bottom {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-135xl);
  }
  .sidebar3 {
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
    padding: var(--padding-5xl) var(--padding-13xl) var(--padding-21xl);
    gap: var(--gap-84xl);
  }
  .discover9 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.01em;
    line-height: 29px;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    min-width: 98px;
  }
  .icon32 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover8 {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 157px 0px 0px;
    gap: 8px 7px;
  }
  .image-icon3 {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren3 {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
  }
  .premium3 {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text3 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail7 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-11xl);
  }
  .profile9 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover7 {
    width: 1051px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .main-content {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-12xl-5);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-25xl) 0px 0px;
    box-sizing: border-box;
    max-width: calc(100% - 347px);
  }
  .discover6 {
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
    .sidebar3 {
      display: none;
      padding-top: var(--padding-xl);
      padding-bottom: var(--padding-7xl);
      box-sizing: border-box;
    }

    .content {
      padding-top: var(--padding-10xl);
      box-sizing: border-box;
      max-width: 100%;
    }

    .discover6 {
      gap: var(--gap-base);
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 700px) {
    .discover7 {
      flex-wrap: wrap;
    }

    .main-content {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 450px) {
    .side-bar-top1 {
      gap: 34px;
    }

    .side-bar-bottom {
      gap: var(--gap-58xl);
    }

    .sidebar3 {
      gap: var(--gap-32xl);
      padding-bottom: var(--padding-xl);
      box-sizing: border-box;
    }

    .discover9 {
      font-size: 19px;
      line-height: 23px;
    }

    .discover8 {
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .content {
      padding-top: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
