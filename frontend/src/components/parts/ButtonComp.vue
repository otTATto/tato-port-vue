<template>
    <div
      v-if="link !== ''"
      class="flex justify-end items-center">
      <RouterLink 
        v-if="type === 'internal'"
        :to="link" 
        class="font-extrabold mx-1 pl-3 pr-3 py-1 border-2 border-TatoGreen rounded-full hover:bg-TatoGreen text-TatoGreen hover:text-white transition duration-400 ease-in-out">
        {{ content }}
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </RouterLink>
      <a 
        v-else-if="type === 'external'"
        :href="link" 
        target="_blank" 
        rel="noopener noreferrer"
        class="font-extrabold mx-1 pl-3 pr-3 py-1 border-2 border-TatoGreen rounded-full hover:bg-TatoGreen text-TatoGreen hover:text-white transition duration-400 ease-in-out">
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="mr-1" />
        {{ content }}
      </a>
    </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'ButtonComp'
  })

  defineProps({
    link: {
      type: String,
      required: true
    },
    type: {
      type: String,
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