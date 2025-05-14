<template>
  <div class="my-5 px-5 lg:px-[20vw] 2xl:px-[30vw] 4xl:px-[40vw]">

    <!-- 戻るボタン -->
    <RouterLink :to="`/works#${slug}`">
      <div class="bg-TatoGreen rounded-t -mx-5 lg:-mx-[20vw] 2xl:-mx-[30vw] -mt-5 py-3">
        <div class="text-center text-white">
          <font-awesome-icon :icon="['fas', 'angle-left']" class="" />
          作品一覧 に戻る
        </div>
      </div>
    </RouterLink>

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
    <div class="md:hidden text-gray-400 font-MaruGothic text-sm overflow-x-auto whitespace-nowrap mr-2 mt-3">
      <span
        v-for="t in tags"
        :key="t"
        :class="`text-${t} border-2 border-gray-400 rounded-full px-2 mx-0.5 inline-block`"
      >
        {{ t }}
      </span>
    </div>

    <hr class="border-t border-1 border-TatoGreen -mx-5 lg:-mx-[20vw] 2xl:-mx-[30vw] mt-6 mb-3" />

    <!-- 詳細  -->
    <div class="my-10">
      <component :is="comp" />
    </div>

    <!-- 戻るボタン -->
    <RouterLink :to="`/works#${slug}`">
      <div class="bg-TatoGreen rounded-b -mx-5 lg:-mx-[20vw] 2xl:-mx-[30vw] -mb-5 py-3">
        <div class="text-center text-white">
          <font-awesome-icon :icon="['fas', 'angle-left']" class="" />
          作品一覧 に戻る
        </div>
      </div>
    </RouterLink>
    
  </div>
</template>

<script setup lang="ts">
  // @brief 各作品のコンポーネントをインポート
  import ProjectasgComp from '../components/works/ProjectasgComp.vue';
  import ToneungabpComp from '../components/works/ToneungabpComp.vue';

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
      slug: 'project-asg',
      title: 'プロジェクト課題',
      types: ['Engineer'],
      tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Bootstrap', 'Firebase', 'Flask', 'Git/GitHub'],
      comp: ProjectasgComp,
    },
    {
      slug: 'toneunga-bp',
      title: '利根運河ブランドプロジェクト',
      types: ['Engineer', 'Design'],
      tags: ['WordPress', 'Adobe Ilustrator'],
      comp: ToneungabpComp,
    },
  ]

  let title: string = '';
  let comp: any = null;
  let types: string[] = [];
  let tags: string[] = [];

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