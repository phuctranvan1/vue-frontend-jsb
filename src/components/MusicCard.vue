<template>
  <div class="music-card">
    <div class="card-image">
      <img class="image-icon6" loading="lazy" alt="" src="/image-1@2x.png" />
    </div>
    <div class="card-details">
      <div class="music-title">
        <div class="living-my-best">Living My Best Life</div>
        <div class="artist-name">
          <div class="dababy">Ben Hector</div>
        </div>
      </div>
    </div>
    <div class="card-actions">
      <img class="group-icon" loading="lazy" alt="" src="/group.svg" />
      <div class="action-buttons">
        <div class="button-container">
          <div class="button-spacer-parent">
            <div class="button-spacer">1:21</div>
            <div class="button-spacer1">-2:36</div>
          </div>
          <div class="button-icons">
            <div class="icon-buttons-parent">
              <div class="icon-buttons">
                <img class="icon39" loading="lazy" alt="" src="/icon-11.svg" />
              </div>
              <div class="icon-buttons">
                <img class="icon39" loading="lazy" alt="" src="/icon-12.svg" />
              </div>
              <img class="icon41" loading="lazy" alt="" src="/icon-13.svg" />
              <div class="icon-buttons">
                <img class="icon39" loading="lazy" alt="" src="/icon-14.svg" />
              </div>
              <div class="icon-buttons">
                <img class="icon39" loading="lazy" alt="" src="/icon-15.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "MusicCard",
  });
</script>
<style scoped>
  .image-icon6 {
    height: 213px;
    width: 248px;
    position: relative;
    border-radius: var(--br-base);
    overflow: hidden;
    flex-shrink: 0;
    object-fit: cover;
  }
  .card-image {
    width: 1006px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .living-my-best {
    align-self: stretch;
    position: relative;
    letter-spacing: 0.5px;
    line-height: 150%;
  }
  .dababy {
    flex: 1;
    position: relative;
    line-height: 17px;
    mix-blend-mode: normal;
  }
  .artist-name {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-49xl);
    font-size: var(--font-size-sm);
    color: var(--color-gray-300);
  }
  .music-title {
    width: 248px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
  }
  .card-details {
    width: 1010px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  .group-icon {
    align-self: stretch;
    height: 7px;
    position: relative;
    max-width: 100%;
    overflow: hidden;
    flex-shrink: 0;
  }
  .button-spacer {
    position: relative;
    line-height: 120%;
    display: inline-block;
    mix-blend-mode: normal;
    min-width: 18px;
  }
  .button-spacer1 {
    position: relative;
    line-height: 120%;
    display: inline-block;
    mix-blend-mode: normal;
    min-width: 27px;
  }
  .button-spacer-parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--gap-xl);
  }
  .icon39 {
    width: 24px;
    height: 24px;
    position: relative;
  }
  .icon-buttons {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) 0px 0px;
  }
  .icon41 {
    height: 56px;
    width: 56px;
    position: relative;
  }
  .icon-buttons-parent {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-base);
  }
  .button-icons {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-lg) 0px var(--padding-sm);
  }
  .button-container {
    align-self: stretch;
    width: 248px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xs);
  }
  .action-buttons {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: 0px var(--padding-xl);
  }
  .card-actions {
    align-self: stretch;
    height: 92px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-9xs);
    text-align: left;
    font-size: var(--font-size-3xs);
    color: var(--color-gray-400);
  }
  .music-card {
    align-self: stretch;
    flex: 1;
    border-radius: var(--br-5xl);
    background-color: var(--color-gray-500);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-base) var(--padding-lg) var(--padding-5xl)
      var(--padding-3xl);
    box-sizing: border-box;
    gap: var(--gap-5xl);
    max-width: 100%;
    text-align: center;
    font-size: var(--font-size-lg);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }
</style>
