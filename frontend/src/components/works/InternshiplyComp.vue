<!-- 
@brief 作品ページ「LINEヤフー株式会社 サマーインターン 参加」
-->
<template>
  <div>
    
    <TitleComp
      :index="1"
      content="概要"
    />
    <ContentComp
      content="
      LINEヤフー株式会社のサマーインターンシップに参加し、6 週間にわたり、LINEギフトにおけるフロントエンド開発業務に従事しました。
      2025年10月末に実施された「ハロウィンギフトくじ」の実装を主に担当しました。
      詳しくは、以下の LINEヤフー Tech Blog に記事を公開していますので、ぜひご覧ください。
      "
    />

    <ButtonComp 
      link="https://techblog.lycorp.co.jp/ja/20251113b"
      type="external"
      content="LINEヤフー Tech Blog"
      class="mt-5"
    />
    

  </div>
</template>

<script setup lang="ts">
  import TitleComp from '../parts/TitleComp.vue';
  import ContentComp from '../parts/ContentComp.vue';
  import ButtonComp from '../parts/ButtonComp.vue';

  defineOptions({
    name: 'ProjectasgComp'
  })
</script>

<style>

</style>