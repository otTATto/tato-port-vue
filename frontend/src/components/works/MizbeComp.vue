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
      地域交流施設「利根運河交流館」の方と一緒に、地域を盛り上げる夏祭りイベントを企画したのが始まりでした。
      "
    />

    <ButtonComp 
      link="https://idol.co.jp/"
      type="external"
      content="水辺で乾杯！利根運河 公式サイト"
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