<template>
  <div class="search8">
    <Sidebar
      logo="/logo@2x.png"
      icon1="/icon-16.svg"
      :onPlaylistsContainerClick="onPlaylistsContainerClick"
      icon2="/icon-2.svg"
      appStore="/app-store@2x.png"
      googlePlay="/google-play@2x.png"
    />
    <main class="search-inner">
      <footer class="frame-parent">
        <div class="frame-group">
          <header class="discover-wrapper">
            <div class="discover12">
              <div class="discover13">
                <div class="search9">Search</div>
                <img class="icon35" alt="" src="/icon-7.svg" />
              </div>
              <div class="profile11">
                <img
                  class="image-icon5"
                  loading="lazy"
                  alt=""
                  src="/image@2x.png"
                />
                <div class="detail9">
                  <div class="text5">
                    <a class="wade-warren5">Wade Warren</a>
                    <div class="premium5">Premium</div>
                  </div>
                  <img class="icon35" loading="lazy" alt="" />
                </div>
              </div>
            </div>
          </header>
          <div class="charts-50">
            <div class="category2">Enter your search here</div>
            <div class="charts-50-parent">
              <div class="charts-501">
                <img
                  class="vuesaxlineararrow-right-icon"
                  alt=""
                  src="/vuesaxlineararrowright@2x.png"
                />
              </div>
              <img class="previous-next" alt="" src="/previous--next.svg" />
            </div>
          </div>
          <div class="listening-history2">
            <div class="listening-history-child" />
            <div class="listening-history-inner">
              <div class="frame-container">
                <div class="see-all-container">
                  <div class="see-all2">See All</div>
                </div>
                <div class="category3">Search Result</div>
              </div>
            </div>
            <img class="scroll-icon2" loading="lazy" alt="" src="/scroll.svg" />
          </div>
        </div>
        <FrameComponent
          propAlignSelf="stretch"
          propPosition="unset"
          propTop="unset"
          propLeft="unset"
          propBorderRadius="20px"
          propBackgroundColor="#fff"
          propWidth="unset"
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
      </footer>
    </main>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import Sidebar from "../components/Sidebar.vue";
  import FrameComponent from "../components/FrameComponent.vue";

  export default defineComponent({
    name: "Search",
    components: { Sidebar, FrameComponent },
    methods: {
      onPlaylistsContainerClick() {
        this.$router.push("/user");
      },
    },
  });
</script>
<style scoped>
  .search9 {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 29px;
    display: inline-block;
    min-width: 77px;
    white-space: nowrap;
  }
  .icon35 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover13 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 0px 178px 0px 0px;
    gap: var(--gap-6xs);
  }
  .image-icon5 {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren5 {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
    white-space: nowrap;
  }
  .premium5 {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text5 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail9 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-11xl);
  }
  .profile11 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover12 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 100%;
    gap: var(--gap-xl);
  }
  .discover-wrapper {
    width: 1051px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-8xs);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-5xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .category2 {
    position: absolute;
    top: 33px;
    left: 38px;
    letter-spacing: 1px;
    line-height: 120%;
    z-index: 1;
  }
  .vuesaxlineararrow-right-icon {
    width: 16px;
    height: 16px;
    position: relative;
    object-fit: contain;
    z-index: 1;
  }
  .charts-501 {
    position: absolute;
    top: 1.5px;
    left: 0px;
    width: 1008px;
    height: 44px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
  .previous-next {
    position: absolute;
    top: 0px;
    left: 959px;
    width: 92px;
    height: 44px;
    z-index: 1;
  }
  .charts-50-parent {
    position: absolute;
    top: 23px;
    left: 80px;
    width: 1014px;
    height: 45.5px;
  }
  .charts-50 {
    align-self: stretch;
    height: 93px;
    position: relative;
    border-radius: var(--br-5xl);
    background-color: var(--color-gray-500);
    overflow-x: auto;
    flex-shrink: 0;
  }
  .listening-history-child {
    width: 118px;
    height: 44px;
    position: relative;
    flex-shrink: 0;
    display: none;
  }
  .see-all2 {
    width: 81px;
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
    display: inline-block;
    flex-shrink: 0;
  }
  .see-all-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
  }
  .category3 {
    position: relative;
    font-size: var(--font-size-xl);
    letter-spacing: 1px;
    line-height: 120%;
    color: var(--color-foundation-dark-dark);
    text-align: left;
  }
  .frame-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .listening-history-inner {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-mini) 0px var(--padding-smi);
    box-sizing: border-box;
    max-width: 100%;
  }
  .scroll-icon2 {
    width: 0px;
    flex: 1;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    mix-blend-mode: normal;
  }
  .listening-history2 {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-5xl);
    background-color: var(--color-gray-500);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-lg) var(--padding-2xs) 194px;
    box-sizing: border-box;
    gap: var(--gap-27xl);
    max-width: 100%;
    text-align: right;
    font-size: var(--font-size-sm);
    color: var(--color-foundation-dark-lighter);
  }
  .frame-group {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 26px;
    max-width: 100%;
  }
  .frame-parent {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 115px;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
  .search-inner {
    height: 913px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-25xl) 0px 0px;
    box-sizing: border-box;
    max-width: calc(100% - 347px);
  }
  .search8 {
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
  }

  @media screen and (max-width: 1050px) {
    .frame-parent {
      gap: 57px;
    }
  }
  @media screen and (max-width: 1000px) {
    .search-inner {
      padding-top: var(--padding-10xl);
      box-sizing: border-box;
      max-width: 100%;
    }

    .search8 {
      padding-left: var(--padding-xl);
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 725px) {
    .listening-history2 {
      gap: var(--gap-4xl);
    }

    .frame-parent {
      gap: 29px;
    }

    .search8 {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 450px) {
    .discover13 {
      padding-right: var(--padding-xl);
      box-sizing: border-box;
    }

    .category2 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .category3 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .listening-history2 {
      padding-top: var(--padding-xl);
      padding-bottom: 126px;
      box-sizing: border-box;
    }

    .search-inner {
      padding-top: var(--padding-xl);
      box-sizing: border-box;
    }
  }
</style>
