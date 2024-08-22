<template>
  <div class="album-card">
    <img class="image-icon7" loading="lazy" alt="" :src="image" />
    <div class="genres">
      <div class="al-music-genre">{{alMusicGenre}}</div>
    </div>
    <div class="chart-positions">
      <div class="al-music-genre">Top 50</div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "AlbumCard",
    props: {
      image: { type: String },
      alMusicGenre: { type: String },
    },
  });
</script>
<style scoped>
  .image-icon7 {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-radius: var(--br-xs);
    max-width: 100%;
    overflow: hidden;
    max-height: 100%;
    object-fit: cover;
  }
  .al-music-genre {
    flex: 1;
    position: relative;
    letter-spacing: 0.01em;
  }
  .genres {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs);
  }
  .chart-positions {
    width: 113px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-9xs);
    box-sizing: border-box;
    font-size: var(--font-size-sm);
    color: var(--color-foundation-dark-lighter);
  }
  .album-card {
    align-self: stretch;
    width: 160px;
    border-radius: var(--br-base);
    border: 0.8px solid var(--color-foundation-orange-light-active);
    box-sizing: border-box;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-mini) var(--padding-xs);
    gap: var(--gap-3xs);
    text-align: left;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
</style>
