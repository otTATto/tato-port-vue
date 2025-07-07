<template>
  <div>
    <h3 class="font-Gothic text-xl font-bold text-neutral-400 mt-10 mb-3">
      <span class="text-base text-neutral-400/50">{{ (index).toString().padStart(2, '0') }}. </span>{{ content }}
    </h3>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'TitleComp'
  })

  defineProps({
    index: {
      type: Number,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  });
</script>

<style>

</style>