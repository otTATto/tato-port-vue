<!-- 
@brief 作品カードのコンポーネント
@param title: 作品のタイトル
@detail 作品のタイトル、説明、画像を表示する
@detail WorksView.vue で使用される
-->
<template>
  <div class="my-10">
    <!-- タイトル -->
    <h3 :class="[
      title.size === 'big' ? 'text-3xl' : 'text-2xl',
    ]">
      <span :class="date.class">{{ date.text }}</span>
      {{ title.text }}
    </h3>
    <!-- 画像 -->
    <div class="w-full my-3">
      <img v-if="image" :src="image" :alt="`${title.text} の画像`"
        class="rounded-lg" v-prevent-image-actions
      />
    </div>
    <!-- タイプとタグ（PC） -->
    <div class="flex justify-start items-center mt-3">
      <!-- タイプ -->
      <div class="text-gray-400">
        <span
          v-for="(type, index) in types"
          :key="index"
          :class="[`text-${type} font-medium border-2 border-${type} bg-${type}Light rounded-full px-2`, types.length > 1 && index < types.length - 1 ? 'mr-1' : '']"
        >
          {{ type }}
        </span>
      </div>
      <span class="text-gray-300 font-MaruGothic mx-2"> 
          / 
      </span>
      <!-- タグ（PC） -->
      <div class="hidden md:block text-gray-400 font-MaruGothic text-sm mr-2 ">
        <span
          v-for="t in tags"
          :key="t"
          :class="`text-${t} border-2 border-gray-400 rounded-full px-2 mx-0.5`"
        >
          {{ t }}
        </span>
      </div>
    </div>
    <!-- タグ（スマホ） -->
    <div class="md:hidden text-gray-400 font-MaruGothic text-sm overflow-x-auto whitespace-nowrap mr-2 my-3">
      <span
        v-for="t in tags"
        :key="t"
        :class="`text-${t} border-2 border-gray-400 rounded-full px-2 mx-0.5 inline-block`"
      >
        {{ t }}
      </span>
    </div>
    <!-- 説明 -->
    <div class="text-gray-600 mt-2 mb-5 font-MaruGothic font-medium pl-[10vw] text-sm xl:text-base">
      {{ description }}
    </div>
    <!-- 詳細  -->
    <!-- 
      @brief 詳細リンクの表示
      @detail detail.link が空でない場合に表示する
      @detail detail.type が 'internal' の場合は RouterLink を使用
      @detail detail.type が 'external' の場合は a タグを使用
    -->
    <div
      v-if="detail.link !== ''"
      class="flex justify-end items-center">
      <RouterLink 
        v-if="detail.type === 'internal'"
        :to="detail.link" 
        class="text-TatoLightGreen hover:text-red-400 transition duration-400 ease-in-out">
        View More
        <font-awesome-icon :icon="['fas', 'arrow-right']" />
      </RouterLink>
      <a 
        v-else-if="detail.type === 'external'"
        :href="detail.link" 
        target="_blank" 
        rel="noopener noreferrer"
        class="font-extrabold mx-1 pl-3 pr-3 py-1 border-2 border-TatoGreen rounded-full hover:bg-TatoGreen text-TatoGreen hover:text-white transition duration-400 ease-in-out">
        <font-awesome-icon :icon="['fas', 'arrow-up-right-from-square']" class="mr-1" />
        View More
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineOptions({
    name: 'WorkCard'
  })

  // パラメータの型定義
  interface Props {
    date: { text: string, class: string },
    title: { text: string, size: string },
    image?: string,
    types: string[],
    tags?: string[],
    description?: string,
    detail: { type: string, link: string }
  }
  const props = defineProps<Props>()
</script>

<style>

</style>