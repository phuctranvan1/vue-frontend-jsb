<template>
  <div class="detail-parent" :style="frameDivStyle">
    <div class="detail10">
      <div class="text6" :style="textStyle">
        <div class="living-my-best1" :style="livingMyBestStyle">
          Living My Best Life
        </div>
        <div class="dababy1">Ben Hector</div>
      </div>
      <div class="play-bar" :style="playBarStyle">
        <img class="group-icon1" loading="lazy" alt="" :src="group" />
        <div class="time-play" :style="timePlayStyle">
          <div class="div">1:21</div>
          <div class="div1">-2:36</div>
        </div>
      </div>
    </div>
    <div class="player-actions">
      <div class="actions" :style="actionsStyle">
        <div class="icon-wrapper">
          <img class="icon46" loading="lazy" alt="" src="/icon-11.svg" />
        </div>
        <div class="icon-wrapper">
          <img class="icon46" loading="lazy" alt="" src="/icon-12.svg" />
        </div>
        <img class="icon48" loading="lazy" alt="" src="/icon-13.svg" />
        <div class="icon-wrapper">
          <img class="icon46" alt="" src="/icon-14.svg" />
        </div>
        <div class="icon-wrapper">
          <img class="icon46" alt="" src="/icon-15.svg" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "FrameComponent",
    props: {
      group: { type: String },
      propAlignSelf: { type: String },
      propPosition: { type: String },
      propTop: { type: [Object, Array, String, Number, Boolean] },
      propLeft: { type: [Object, Array, String, Number, Boolean] },
      propBorderRadius: { type: String },
      propBackgroundColor: { type: String },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propOverflow: { type: String },
      propPadding: { type: [Object, Array, String, Number, Boolean] },
      propPadding1: { type: [Object, Array, String, Number, Boolean] },
      propAlignSelf1: { type: String },
      propWidth1: { type: [Object, Array, String, Number, Boolean] },
      propDisplay: { type: String },
      propPadding2: { type: [Object, Array, String, Number, Boolean] },
      propAlignSelf2: { type: String },
      propWidth2: { type: [Object, Array, String, Number, Boolean] },
      propFlex: { type: String },
    },
    computed: {
      frameDivStyle() {
        return {
          alignSelf: this.propAlignSelf,
          position: this.propPosition,
          top: this.propTop,
          left: this.propLeft,
          borderRadius: this.propBorderRadius,
          backgroundColor: this.propBackgroundColor,
          width: this.propWidth,
          overflow: this.propOverflow,
          padding: this.propPadding,
        };
      },
      textStyle() {
        return {
          padding: this.propPadding1,
        };
      },
      livingMyBestStyle() {
        return {
          alignSelf: this.propAlignSelf1,
          width: this.propWidth1,
          display: this.propDisplay,
        };
      },
      playBarStyle() {
        return {
          padding: this.propPadding2,
        };
      },
      timePlayStyle() {
        return {
          alignSelf: this.propAlignSelf2,
          width: this.propWidth2,
        };
      },
      actionsStyle() {
        return {
          flex: this.propFlex,
        };
      },
    },
  });
</script>
<style scoped>
  .living-my-best1 {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.5px;
    line-height: 150%;
  }
  .dababy1 {
    width: 112px;
    position: relative;
    font-size: var(--font-size-sm);
    line-height: 17px;
    color: var(--color-gray-300);
    display: inline-block;
    mix-blend-mode: normal;
  }
  .text6 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .group-icon1 {
    align-self: stretch;
    height: 7px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .div {
    position: relative;
    line-height: 120%;
    display: inline-block;
    mix-blend-mode: normal;
    min-width: 18px;
  }
  .div1 {
    position: relative;
    line-height: 120%;
    display: inline-block;
    mix-blend-mode: normal;
    min-width: 27px;
  }
  .time-play {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .play-bar {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--gap-9xs);
    text-align: left;
    font-size: var(--font-size-3xs);
    color: var(--color-gray-400);
  }
  .detail10 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-5xl);
  }
  .icon46 {
    width: 24px;
    height: 24px;
    position: relative;
  }
  .icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) 0px 0px;
  }
  .icon48 {
    height: 56px;
    width: 56px;
    position: relative;
  }
  .actions {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .player-actions {
    align-self: stretch;
    height: 56px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-base);
    box-sizing: border-box;
  }
  .detail-parent {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xs);
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
</style>
