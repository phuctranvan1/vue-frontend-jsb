<template>
  <div class="history-items1">
    <div class="history-entries">
      <div class="user-actions">
        <div class="action-data">
          <img class="friend-icon" alt="" src="/friend1.svg" />
          <img class="favourite-icon" alt="" src="/favourite1.svg" />
          <img class="image-icon8" alt="" :src="image" />
          <div class="song-info-container">
            <div class="bg" />
            <div class="she-will-be" :style="sheWillBeStyle">
              {{sheWillBeLoved}}
            </div>
            <div class="maroon-5" :style="maroon5Style">{{maroon5}}</div>
          </div>
        </div>
      </div>
      <div class="total-play">
        <div class="play-count">
          <img
            class="vuesaxlinearmusicnote-icon"
            alt=""
            src="/vuesaxlinearmusicnote.svg"
          />
        </div>
        <div class="k">120k</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "HistoryItems",
    props: {
      image: { type: String },
      sheWillBeLoved: { type: String },
      maroon5: { type: String },
      propDisplay: { type: String },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propMinWidth1: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      sheWillBeStyle() {
        return {
          display: this.propDisplay,
          minWidth: this.propMinWidth,
        };
      },
      maroon5Style() {
        return {
          minWidth: this.propMinWidth1,
        };
      },
    },
  });
</script>
<style scoped>
  .friend-icon {
    height: 32px;
    width: 32px;
    position: absolute;
    margin: 0 !important;
    top: -16px;
    right: 120px;
    border-radius: var(--br-5xs);
    z-index: 1;
  }
  .favourite-icon {
    height: 32px;
    width: 32px;
    position: absolute;
    margin: 0 !important;
    top: -16px;
    right: 64px;
    border-radius: var(--br-5xs);
    z-index: 1;
  }
  .image-icon8 {
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
  .bg {
    width: 644px;
    height: 100px;
    position: relative;
    box-shadow: 0px 0px 40px rgba(24, 12, 5, 0.02);
    border-radius: var(--br-base);
    background-color: var(--color-foundation-surface-white);
    display: none;
    max-width: 100%;
  }
  .she-will-be {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
    z-index: 1;
  }
  .maroon-5 {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 120%;
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 61px;
    z-index: 1;
  }
  .song-info-container {
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
  .action-data {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    max-width: 100%;
  }
  .user-actions {
    width: 644px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
  .vuesaxlinearmusicnote-icon {
    width: 16px;
    height: 16px;
    position: relative;
  }
  .play-count {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .k {
    position: relative;
    letter-spacing: 1px;
    display: inline-block;
    min-width: 30px;
  }
  .total-play {
    height: 32.8px;
    width: 78.8px;
    border-radius: var(--br-5xs);
    border: 0.8px solid var(--color-foundation-orange-light-active);
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-7xs) var(--padding-2xs) var(--padding-7xs)
      var(--padding-smi);
    gap: var(--gap-6xs);
    z-index: 1;
    margin-left: -254px;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
  }
  .history-entries {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .history-items1 {
    width: 686px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 0px var(--padding-2xl);
    box-sizing: border-box;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
</style>
