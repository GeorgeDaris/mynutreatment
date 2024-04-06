<template>
  <div class="button" :class="size ? size : ''">
    <slot />
  </div>
</template>

<script lang="ts" setup>
interface Size {
  type: "small" | "regular" | "large"
}

const props = defineProps<{
  size: {
    type: Size,
    required: false
  }
}>()
</script>

<style scoped>
.button {
  display: block;
  width: fit-content;
  padding-inline: 1rem;
  padding-block: 0.5rem;
  border: var(--border-regular) solid var(--dark-blue);
  border-radius: var(--radius-lg); 
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: var(--primary-green);
    position: absolute;
    bottom: -0.5rem;
    right: -0.5rem;
    z-index: -1;
    transition: all 0.3s;
  }

  &:hover::after {
    bottom: 0rem;
    right: 0rem;
  }

  &.small {
    font-size: smaller;
  }

  &.large {
    font-size: larger;
  }

  &:deep(a, button) {
    text-decoration: none;
    color: inherit;
  }
}
</style>