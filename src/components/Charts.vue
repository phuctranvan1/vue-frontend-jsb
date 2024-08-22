<template>
  <div class="charts-503">
    <div class="charts-header">
      <div class="chart-title">
        <div class="category10">Charts: Top 50</div>
      </div>
      <div class="previous-next2">
        <img class="icon44" alt="" src="/icon-10.svg" />
        <img class="icon44" alt="" src="/icon-9.svg" />
      </div>
    </div>
    <div class="album-cards">
      <AlbumCard
        image="/image-12@2x.png"
        alMusicGenre="Al Music Genre"
      /><AlbumCard image="/image-21@2x.png" alMusicGenre="Pop" /><AlbumCard
        image="/image-3@2x.png"
        alMusicGenre="Hip Hop"
      /><AlbumCard image="/image-4@2x.png" alMusicGenre="Rock" /><AlbumCard
        image="/image-5@2x.png"
        alMusicGenre="R&B Soul"
      /><AlbumCard image="/album-image@2x.png" alMusicGenre="Country" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";
  import AlbumCard from "./AlbumCard.vue";

  export default defineComponent({
    name: "Charts",
    components: { AlbumCard },
  });
</script>
<style scoped>
  .category10 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
  }
  .chart-title {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) 0px 0px;
  }
  .icon44 {
    height: 16px;
    width: 16px;
    position: relative;
    min-height: 16px;
  }
  .previous-next2 {
    filter: blur(150px);
    border-radius: var(--br-25xl);
    background-color: var(--color-coral-100);
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-sm) var(--padding-xl);
    gap: var(--gap-xl);
  }
  .charts-header {
    width: 1008px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
    max-width: 100%;
  }
  .album-cards {
    width: 1070px;
    height: 220px;
    overflow-x: auto;
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-13xl);
    max-width: 106%;
    font-size: var(--font-size-base);
  }
  .charts-503 {
    align-self: stretch;
    border-radius: var(--br-5xl);
    background-color: var(--color-gray-500);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base-5) var(--padding-5xl);
    box-sizing: border-box;
    gap: var(--gap-xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }

  @media screen and (max-width: 700px) {
    .album-cards {
      gap: var(--gap-base);
    }
  }
  @media screen and (max-width: 450px) {
    .category10 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .charts-header {
      flex-wrap: wrap;
    }
  }
</style>
