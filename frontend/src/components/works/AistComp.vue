<!-- 
@brief 作品ページ「重度運動機能障害者 支援システム 研究開発 ＠産総研」
-->
<template>
  <div>
    
    <TitleComp
      :index="1"
      content="きっかけ"
    />
    <ContentComp
      content="
      プロジェクト課題というハッカソン形式の授業にて最優秀賞をいただいたことをきっかけに、
      研究室の先輩からお声がけいただいて、筑波にある産業技術総合研究所の依田研究室でのアルバイトが始まりました。
      "
    />

    <div class="
      mt-5 
      grid space-y-3 justify-end
      md:flex md:space-y-0 md:space-x-1"
    >
      <ButtonComp 
        link="/works/#project-asg"
        type="internal"
        content="プロジェクト課題とは"
        class=""
      />

      <ButtonComp 
        link="http://gesture-interface.jp/"
        type="external"
        content="依田研究室について"
        class=""
      />
    </div>
    

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