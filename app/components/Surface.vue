<script setup lang="ts">
withDefaults(defineProps<{
  as?: 'article' | 'aside' | 'div' | 'section'
  labelledBy?: string
}>(), {
  as: 'section',
  labelledBy: undefined,
})
</script>

<template>
  <component
    :is="as"
    class="ui-surface"
    :aria-labelledby="labelledBy"
  >
    <slot />
  </component>
</template>

<style scoped>
.ui-surface {
  padding: var(--ui-space-4);
  color: var(--ui-pen-primary);
  background: var(--ui-fill-surface);
  border: 1px solid var(--ui-edge-default);
  border-radius: var(--ui-radius-md);
}
</style>
