<template>
  <div class="my-5 px-5 lg:px-[10vw] 2xl:px-[20vw] 4xl:px-[30vw]">

    <!-- タイトル -->
    <div class="my-5 font-bold md:text-center text-xl md:text-3xl">
      <h1>{{ title }}</h1>
    </div>

    <!-- タイプとタグ -->
    <div class="flex justify-start md:justify-center items-center mt-3">
      <!-- タイプ -->
      <div class="text-gray-400 text-sm md:text-base">
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

    <hr class="border-t border-1 border-TatoGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <!-- 詳細  -->
    <div>
      <component :is="comp" />
    </div>
    
  </div>
</template>

<script setup lang="ts">
  import ToneungabpComp from '../components/works/ToneungabpComp.vue'

  defineOptions({
    name: 'WorkDetail',
  })

  // パラメータの型定義
  interface Props {
    types: string[],
    tags?: string[],
  }
  const props = defineProps<Props>()

  // @brief ルートを取得
  import { useRoute } from 'vue-router'
  const route = useRoute()
  // @brief ルートのパラメータを取得
  const slug = route.params.slug as string
  console.log('slug:', slug)

  // @brief 作品ごとのデータ
  const worksData = [
    {
      slug: 'toneunga-bp',
      title: '利根運河ブランドプロジェクト',
      types: ['Engineer', 'Designer'],
      tags: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      comp: ToneungabpComp,
    },
  ]

  let title = '';
  let comp = null;
  let types = [];
  let tags = [];

  // @brief slug から title を取得
  for (const work of worksData) {
    if (work.slug === slug) {
      title = work.title;
      comp = work.comp;
      types = work.types;
      tags = work.tags;
    }
  }

  // @brief 見つからならければ、404 ページにリダイレクト
  if (title === '') {
    window.location.href = '/404'
  }


</script>

<style>

</style>