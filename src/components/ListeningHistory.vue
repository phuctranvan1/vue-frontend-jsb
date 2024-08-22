<template>
  <section class="listening-history3">
    <div class="category5">Settings</div>
    <div class="frame-div">
      <div class="frame-parent1">
        <div class="category-group">
          <div class="category6">Choose mode:</div>
          <div class="category-container">
            <div class="category6">Change Password</div>
            <div class="frame-wrapper">
              <div class="frame-parent2">
                <div class="frame-parent3">
                  <div class="password-input-wrapper">
                    <div class="password-input">
                      <div class="old-password">Old Password:</div>
                      <div class="new-password-wrapper">
                        <div class="new-password">New Password:</div>
                      </div>
                      <div class="confirm-new-password">
                        Confirm New Password:
                      </div>
                    </div>
                  </div>
                  <div class="frame-parent4">
                    <div class="frame-wrapper1">
                      <div class="frame-parent5">
                        <div class="rectangle-parent">
                          <div class="frame-child" />
                          <div class="frame-item" />
                        </div>
                        <div class="frame-inner" />
                      </div>
                    </div>
                    <div class="rectangle-group">
                      <div class="rectangle-div" />
                      <div class="category8">Save</div>
                    </div>
                  </div>
                </div>
                <div class="frame-wrapper2">
                  <div class="rectangle-container">
                    <div class="frame-child1" />
                    <div class="category9">Restore Default</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="scroll-container">
          <img class="scroll-icon3" loading="lazy" alt="" src="/scroll.svg" />
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "ListeningHistory",
  });
</script>
<style scoped>
  .category5 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    display: inline-block;
    min-width: 85px;
  }
  .category6 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
  }
  .old-password {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    min-width: 111px;
  }
  .new-password {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
    display: inline-block;
    min-width: 118px;
  }
  .new-password-wrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px 0px var(--padding-8xs);
  }
  .confirm-new-password {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
  }
  .password-input {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mini);
  }
  .password-input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-9xs) 0px 0px;
  }
  .frame-child {
    height: 22px;
    width: 100%;
    position: absolute;
    margin: 0 !important;
    top: 0px;
    right: 0px;
    left: 0px;
    border-radius: var(--br-8xs);
    background-color: var(--color-gray-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
  }
  .frame-item {
    align-self: stretch;
    flex: 1;
    position: relative;
    border-radius: var(--br-8xs);
    background-color: var(--color-gray-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    max-width: 100%;
  }
  .rectangle-parent {
    align-self: stretch;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-15xl) 0px 0px;
    box-sizing: border-box;
    position: relative;
    gap: var(--gap-xs);
    max-width: 100%;
  }
  .frame-inner {
    align-self: stretch;
    height: 22px;
    position: relative;
    border-radius: var(--br-8xs);
    background-color: var(--color-gray-100);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
  }
  .frame-parent5 {
    align-self: stretch;
    width: 331px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-lgi);
    max-width: 100%;
  }
  .frame-wrapper1 {
    align-self: stretch;
    height: 97px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
  .rectangle-div {
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-orange-normal);
    width: 150px;
    height: 41px;
  }
  .category8 {
    position: absolute;
    top: 9px;
    left: 52px;
    letter-spacing: 1px;
    line-height: 120%;
    display: inline-block;
    width: 110px;
    z-index: 1;
  }
  .rectangle-group {
    width: 162px;
    height: 41px;
    position: relative;
  }
  .frame-parent4 {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    gap: var(--gap-27xl);
    min-width: 256px;
    max-width: 100%;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
  }
  .frame-parent3 {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xl);
    max-width: 100%;
  }
  .frame-child1 {
    height: 41px;
    width: 216px;
    position: absolute;
    margin: 0 !important;
    top: -9px;
    left: -33px;
    border-radius: var(--br-xl);
    background-color: var(--color-foundation-orange-normal);
  }
  .category9 {
    flex: 1;
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
    z-index: 1;
  }
  .rectangle-container {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  }
  .frame-wrapper2 {
    width: 196px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-133xl) 0px 0px;
    box-sizing: border-box;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
  }
  .frame-parent2 {
    width: 848px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-32xl);
    max-width: 100%;
  }
  .frame-wrapper {
    align-self: stretch;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;
    max-width: 100%;
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
  }
  .category-container {
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xs);
    max-width: 105%;
    flex-shrink: 0;
  }
  .category-group {
    width: 935px;
    border-radius: var(--br-xl);
    border: 1px solid var(--color-black);
    box-sizing: border-box;
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-12xl) var(--padding-17xl) var(--padding-41xl);
    gap: var(--gap-23xl);
    max-width: calc(100% - 23px);
  }
  .scroll-icon3 {
    width: 0px;
    flex: 1;
    position: relative;
    max-height: 100%;
    object-fit: contain;
    mix-blend-mode: normal;
  }
  .scroll-container {
    height: 195px;
    width: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-116xl) 0px 0px;
    box-sizing: border-box;
  }
  .frame-parent1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-4xl);
    max-width: 100%;
  }
  .frame-div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 0px var(--padding-12xs) 0px var(--padding-5xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  .listening-history3 {
    position: absolute;
    top: 108px;
    left: 346px;
    border-radius: var(--br-5xl);
    background-color: var(--color-gray-500);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-5xl) var(--padding-9xs) var(--padding-100xl)
      var(--padding-5xl);
    box-sizing: border-box;
    gap: var(--gap-11xl);
    max-width: 100%;
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }

  @media screen and (max-width: 675px) {
    .frame-parent5 {
      flex: 1;
    }

    .frame-parent3 {
      flex-wrap: wrap;
      min-width: 100%;
    }
  }
  @media screen and (max-width: 450px) {
    .category5 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .category6 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .category8 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }

    .category9 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }
  }
</style>
