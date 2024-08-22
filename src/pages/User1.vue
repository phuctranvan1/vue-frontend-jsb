<template>
  <div class="user4">
    <section class="listening-history1">
      <div class="history-category">
        <div class="category1">List of users</div>
        <div class="see-all-button">
          <div class="see-all1">See All</div>
        </div>
      </div>
      <div class="history-list">
        <div class="history-items">
          <div class="history-item1">
            <ItemDetails
              friend="/friend.svg"
              favourite="/favourite.svg"
              image="/image1@2x.png"
              tranphuc="tranphuc"
              admin="Admin"
            /><ItemDetails
              itemImagePadding="0px 6px 0px 0px"
              friend="/friend-1.svg"
              favourite="/favourite-1.svg"
              image="/image-11@2x.png"
              propTop="8px"
              propWidth="864px"
              tranphuc="Listerine"
              propMinWidth="67px"
              propDisplay="inline-block"
              admin="Sysadmin"
              propMinWidth1="64px"
            /><ItemDetails
              itemImagePadding="0px 5px 0px 0px"
              friend="/friend-2.svg"
              favourite="/favourite-2.svg"
              image="/image-2@2x.png"
              propTop="8px"
              propWidth="865px"
              tranphuc="User1"
              propMinWidth="42px"
              propDisplay="inline-block"
              admin="User"
              propMinWidth1="31px"
            />
          </div>
          <div class="list-scroller">
            <img class="scroll-icon1" alt="" src="/scroll.svg" />
          </div>
        </div>
      </div>
    </section>
    <header class="discover10">
      <div class="discover11">
        <h3 class="user5">User</h3>
        <img class="icon34" loading="lazy" alt="" src="/icon-7.svg" />
      </div>
      <div class="profile10">
        <img class="image-icon4" alt="" src="/image@2x.png" />
        <div class="detail8">
          <div class="text4">
            <a class="wade-warren4">Wade Warren</a>
            <div class="premium4">Premium</div>
          </div>
        </div>
      </div>
    </header>
    <Sidebar
      frameDivPosition="absolute"
      frameDivTop="0px"
      frameDivLeft="0px"
      logo="/logo@2x.png"
      :onSearchContainerClick="onSearchContainerClick"
      icon1="/icon-1.svg"
      playlistsColor="#99938f"
      icon2="/icon-31.svg"
      albumsColor="#ff7e3a"
      appStore="/app-store@2x.png"
      googlePlay="/google-play@2x.png"
    /><FrameComponent
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
  import Sidebar from "../components/Sidebar.vue";
  import FrameComponent from "../components/FrameComponent.vue";

  export default defineComponent({
    name: "User1",
    components: { ItemDetails, Sidebar, FrameComponent },
    methods: {
      onSearchContainerClick() {
        this.$router.push("/search");
      },
    },
  });
</script>
<style scoped>
  .category1 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    display: inline-block;
    min-width: 126px;
  }
  .see-all1 {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
  }
  .see-all-button {
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
  .history-category {
    width: 911px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .history-item1 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xl);
    min-width: 565px;
    max-width: 100%;
  }
  .scroll-icon1 {
    width: 0px;
    flex: 1;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    mix-blend-mode: normal;
  }
  .list-scroller {
    height: 185px;
    width: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-106xl) 0px 0px;
    box-sizing: border-box;
  }
  .history-items {
    width: 924px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-35xl);
    max-width: 100%;
  }
  .history-list {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
  }
  .listening-history1 {
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
  .user5 {
    margin: 0;
    position: relative;
    font-size: inherit;
    letter-spacing: 0.01em;
    line-height: 29px;
    font-weight: 400;
    font-family: inherit;
    display: inline-block;
    min-width: 52px;
    white-space: nowrap;
  }
  .icon34 {
    height: 16px;
    width: 16px;
    position: relative;
  }
  .discover11 {
    width: 278px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    gap: var(--gap-5xs);
  }
  .image-icon4 {
    height: 50px;
    width: 50px;
    position: relative;
    border-radius: var(--br-xs);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    min-height: 50px;
  }
  .wade-warren4 {
    text-decoration: none;
    position: relative;
    color: inherit;
    display: inline-block;
    min-width: 98px;
    white-space: nowrap;
  }
  .premium4 {
    position: relative;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 49px;
  }
  .text4 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .detail8 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
  .profile10 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-base);
    font-size: var(--font-size-base);
  }
  .discover10 {
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
  .user4 {
    width: 100%;
    height: 960px;
    position: relative;
    background-color: var(--color-whitesmoke-200);
    overflow: hidden;
    line-height: normal;
    letter-spacing: normal;
  }

  @media screen and (max-width: 625px) {
    .history-category {
      flex-wrap: wrap;
    }

    .history-item1 {
      min-width: 100%;
    }

    .user4 {
      height: auto;
      min-height: 960;
    }
  }
  @media screen and (max-width: 450px) {
    .category1 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }
  }
</style>
