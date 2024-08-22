<template>
  <div class="charts-502">
    <div class="chart-content-wrapper">
      <div class="chart-content">
        <div class="category4">Wade Warren - Admin</div>
        <div class="chart-details">
          <div class="email-wadewarrenhotmailco">
            Email: : wadewarren@hotmail.co
          </div>
          <div class="user-details">
            <div class="user-role">
              <div class="name-wade-warren">Name: Wade Warren</div>
              <div class="role-admin">Role: Admin</div>
            </div>
            <div class="name-wade-warren">Joined at: June 2024</div>
          </div>
        </div>
      </div>
    </div>
    <div class="previous-next1">
      <div class="shadow" />
      <img class="icon37" loading="lazy" alt="" src="/icon-9.svg" />
      <img class="icon38" loading="lazy" alt="" src="/icon-10.svg" />
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Charts1",
  });
</script>
<style scoped>
  .category4 {
    position: relative;
    letter-spacing: 1px;
    line-height: 120%;
  }
  .email-wadewarrenhotmailco {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 20px;
  }
  .name-wade-warren {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
  }
  .role-admin {
    position: relative;
    letter-spacing: 0.5px;
    line-height: 120%;
    display: inline-block;
    min-width: 92px;
  }
  .user-role {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-sm);
  }
  .user-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-mid);
  }
  .chart-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-xs);
    font-size: var(--font-size-base);
    color: var(--color-foundation-dark-lighter);
  }
  .chart-content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: var(--gap-3xl-5);
    flex-shrink: 0;
  }
  .chart-content-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-3xs) 0px 0px;
  }
  .shadow {
    position: absolute;
    top: 0px;
    left: 0px;
    filter: blur(150px);
    border-radius: var(--br-25xl);
    background-color: var(--color-coral-100);
    width: 100%;
    height: 100%;
  }
  .icon37 {
    position: absolute;
    top: 14px;
    left: 56px;
    width: 16px;
    height: 16px;
    z-index: 1;
  }
  .icon38 {
    position: absolute;
    top: 14px;
    left: 20px;
    width: 16px;
    height: 16px;
    z-index: 1;
  }
  .previous-next1 {
    height: 44px;
    width: 92px;
    position: relative;
    flex-shrink: 0;
  }
  .charts-502 {
    align-self: stretch;
    border-radius: var(--br-5xl);
    background-color: var(--color-gray-500);
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0px var(--padding-17xl) var(--padding-121xl-5);
    gap: var(--gap-xl);
    text-align: left;
    font-size: var(--font-size-xl);
    color: var(--color-foundation-dark-dark);
    font-family: var(--font-baloo-da);
  }

  @media screen and (max-width: 450px) {
    .category4 {
      font-size: var(--font-size-base);
      line-height: 19px;
    }
  }
</style>
