<template>
  <div class="listening-history-parent">
    <div class="listening-history4">
      <div class="history-items-container">
        <div class="history-items-container1">
          <div class="see-more-button">
            <div class="category11">Listening History</div>
          </div>
          <div class="see-all3">
            <div class="see-all4">See All</div>
          </div>
        </div>
        <HistoryItems
          image="/image1@2x.png"
          sheWillBeLoved="She Will Be Loved"
          maroon5="Maroon 5"
        /><HistoryItems
          image="/image-11@2x.png"
          sheWillBeLoved="Dumb Little Bug"
          propDisplay="inline-block"
          propMinWidth="119px"
          maroon5="Em Beihold"
          propMinWidth1="73px"
        />
        <div class="history-items2">
          <div class="frame-parent6">
            <div class="total-play-parent">
              <v-btn
                class="total-play-vbtn"
                color="#b6b6b6"
                variant="outlined"
                width="78.8"
                >120k</v-btn
              >
              <img
                class="friend-icon1"
                loading="lazy"
                alt=""
                src="/friend1.svg"
              />
              <img
                class="favourite-icon1"
                loading="lazy"
                alt=""
                src="/favourite1.svg"
              />
            </div>
            <div class="image-parent">
              <img
                class="image-icon9"
                loading="lazy"
                alt=""
                src="/image-2@2x.png"
              />
              <div class="track-info1">
                <div class="bg1" />
                <div class="it-would-be">It Would Be You</div>
                <div class="ben-hector">Ben Hector</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img class="scroll-icon4" alt="" src="/scroll.svg" />
    </div>
    <div class="music-card1">
      <img
        class="image-icon10"
        loading="lazy"
        alt=""
        src="/image-1@2x.png"
      /><FrameComponent group="/group2.svg" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import HistoryItems from "./HistoryItems.vue";
  import FrameComponent from "./FrameComponent.vue";

  export default defineComponent({
    name: "FrameComponent1",
    components: { HistoryItems, FrameComponent },
  });
</script>
<style scoped>
  .category11 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
  }
  .see-more-button {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) 0px 0px;
  }
  .see-all4 {
    flex: 1;
    position: relative;
    letter-spacing: -0.08px;
    line-height: 120%;
  }
  .see-all3 {
    width: 82px;
    border-radius: var(--br-25xl);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) var(--padding-xl);
    box-sizing: border-box;
    text-align: right;
    font-size: var(--font-size-sm);
    color: var(--color-foundation-dark-lighter);
  }
  .history-items-container1 {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
    font-size: var(--font-size-xl);
  }
  .total-play-vbtn {
    height: 32.8px;
    width: 78.8px;
    z-index: 1;
  }
  .friend-icon1 {
    height: 100%;
    width: 32px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    bottom: 0px;
    left: 278px;
    border-radius: var(--br-5xs);
    max-height: 100%;
    z-index: 1;
  }
  .favourite-icon1 {
    height: 100%;
    width: 32px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 64px;
    bottom: 0px;
    border-radius: var(--br-5xs);
    max-height: 100%;
    z-index: 1;
  }
  .total-play-parent {
    width: 430px;
    height: 32px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    position: relative;
    max-width: 100%;
  }
  .image-icon9 {
    height: calc(100% - 16px);
    width: 84px;
    position: absolute;
    margin: 0 !important;
    top: 8px;
    bottom: 8px;
    left: -42px;
    border-radius: var(--br-base);
    max-height: 100%;
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
    z-index: 1;
  }
  .bg1 {
    width: 644px;
    height: 100px;
    position: relative;
    box-shadow: 0px 0px 40px rgba(24, 12, 5, 0.02);
    border-radius: var(--br-base);
    background-color: var(--color-foundation-surface-white);
    display: none;
    max-width: 100%;
  }
  .it-would-be {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
    display: inline-block;
    min-width: 116px;
    z-index: 1;
  }
  .ben-hector {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 120%;
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 73px;
    z-index: 1;
  }
  .track-info1 {
    flex: 1;
    box-shadow: 0px 0px 40px rgba(24, 12, 5, 0.02);
    border-radius: var(--br-base);
    background-color: var(--color-foundation-surface-white);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xl) var(--padding-xl) var(--padding-9xl)
      var(--padding-47xl);
    box-sizing: border-box;
    gap: var(--gap-5xs);
    max-width: 100%;
  }
  .image-parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    max-width: 100%;
    margin-top: -16px;
  }
  .frame-parent6 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    max-width: 100%;
  }
  .history-items2 {
    width: 686px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-2xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .history-items-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .scroll-icon4 {
    height: 60px;
    width: 0px;
    position: absolute;
    margin: 0 !important;
    top: 168px;
    right: 1px;
    object-fit: contain;
    mix-blend-mode: normal;
  }
  .listening-history4 {
    height: 441px;
    flex: 1;
    border-radius: var(--br-5xl);
    background-color: var(--color-gray-500);
    overflow-y: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xl) var(--padding-lgi) 0px var(--padding-5xl);
    box-sizing: border-box;
    position: relative;
    max-width: 100%;
  }
  .image-icon10 {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-radius: var(--br-base);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .music-card1 {
    height: 441px;
    width: 280px;
    border-radius: var(--br-5xl);
    background-color: var(--color-gray-500);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-base) var(--padding-5xl);
    box-sizing: border-box;
    gap: var(--gap-5xl);
    min-width: 280px;
    text-align: center;
    font-size: var(--font-size-lg);
  }
  .listening-history-parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-13xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }

  @media screen and (max-width: 925px) {
    .music-card1 {
      flex: 1;
    }

    .listening-history-parent {
      flex-wrap: wrap;
    }
  }
  @media screen and (max-width: 700px) {
    .listening-history4 {
      min-width: 100%;
    }

    .listening-history-parent {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 450px) {
    .category11 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .history-items-container1 {
      flex-wrap: wrap;
    }

    .listening-history4 {
      height: auto;
    }
  }
</style>
