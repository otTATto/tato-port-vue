<!-- 
@brief 作品ページ「理科大学生アイドルグループ ロゴ制作」
-->
<template>
  <div>
    
    <TitleComp
      :index="1"
      content="きっかけ"
    />
    <ContentComp
      content="
      大学の知人が 2023 年の秋に、理科大生によって構成される理系アイドルグループ「放課後スターライト」を立ち上げたのをきっかけに、デザイナーとしてプロジェクトに参加しました。
      "
    />

    <ButtonComp 
      link="https://idol.co.jp/"
      type="external"
      content="放課後スターライト公式サイト"
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