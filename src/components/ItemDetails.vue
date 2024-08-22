<template>
  <div class="item-details" :style="itemDetailsStyle">
    <div class="item-stats">
      <div class="total-play1">
        <div class="bg2" />
        <div class="play-icons">
          <img
            class="vuesaxlinearmusicnote-icon1"
            alt=""
            src="/vuesaxlinearmusicnote.svg"
          />
        </div>
        <div class="k1">120k</div>
      </div>
      <img class="friend-icon2" loading="lazy" alt="" :src="friend" />
      <img class="favourite-icon2" loading="lazy" alt="" :src="favourite" />
    </div>
    <div class="item-image">
      <img
        class="image-icon11"
        loading="lazy"
        alt=""
        :src="image"
        :style="imageIconStyle"
      />
      <div class="item-user">
        <div class="bg3" :style="bGStyle" />
        <div class="tranphuc" :style="tranphucStyle">{{tranphuc}}</div>
        <div class="admin" :style="adminStyle">{{admin}}</div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ItemDetails",
    props: {
      friend: { type: String },
      favourite: { type: String },
      image: { type: String },
      tranphuc: { type: String },
      admin: { type: String },
      itemImagePadding: { type: [Object, Array, String, Number, Boolean] },
      propTop: { type: [Object, Array, String, Number, Boolean] },
      propWidth: { type: [Object, Array, String, Number, Boolean] },
      propMinWidth: { type: [Object, Array, String, Number, Boolean] },
      propDisplay: { type: String },
      propMinWidth1: { type: [Object, Array, String, Number, Boolean] },
    },
    computed: {
      itemDetailsStyle() {
        return {
          padding: this.itemImagePadding,
        };
      },
      imageIconStyle() {
        return {
          top: this.propTop,
        };
      },
      bGStyle() {
        return {
          width: this.propWidth,
        };
      },
      tranphucStyle() {
        return {
          minWidth: this.propMinWidth,
          display: this.propDisplay,
        };
      },
      adminStyle() {
        return {
          minWidth: this.propMinWidth1,
        };
      },
    },
  });
</script>
<style scoped>
  .bg2 {
    height: 32.8px;
    width: 78.8px;
    position: relative;
    border-radius: var(--br-5xs);
    border: 0.8px solid var(--color-foundation-orange-light-active);
    box-sizing: border-box;
    display: none;
  }
  .vuesaxlinearmusicnote-icon1 {
    width: 16px;
    height: 16px;
    position: relative;
    z-index: 1;
  }
  .play-icons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-11xs) 0px 0px;
  }
  .k1 {
    position: relative;
    letter-spacing: 1px;
    display: inline-block;
    min-width: 30px;
    z-index: 1;
  }
  .total-play1 {
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
  }
  .friend-icon2 {
    height: 100%;
    width: 32px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    bottom: 0px;
    left: 333px;
    max-height: 100%;
    z-index: 1;
  }
  .favourite-icon2 {
    height: 100%;
    width: 32px;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 119.8px;
    bottom: 0px;
    max-height: 100%;
    z-index: 1;
  }
  .item-stats {
    width: 540.8px;
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
  .image-icon11 {
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
  .bg3 {
    width: 870px;
    height: 100px;
    position: relative;
    box-shadow: 0px 0px 40px rgba(24, 12, 5, 0.02);
    border-radius: var(--br-base);
    background-color: var(--color-foundation-surface-white);
    display: none;
    max-width: 100%;
  }
  .tranphuc {
    position: relative;
    letter-spacing: 0.01em;
    line-height: 120%;
    display: inline-block;
    min-width: 68px;
    z-index: 1;
  }
  .admin {
    position: relative;
    font-size: var(--font-size-sm);
    letter-spacing: 0.01em;
    line-height: 17px;
    color: var(--color-foundation-dark-lighter);
    display: inline-block;
    min-width: 42px;
    z-index: 1;
  }
  .item-user {
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
  .item-image {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    max-width: 100%;
    margin-top: -16px;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-dark);
  }
  .item-details {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xs);
    color: var(--color-foundation-dark-lighter);
    font-family: var(--font-baloo-da);
  }
</style>
