<!-- 
@brief 
-->
<template>
  <div>

    <TitleComp
      :index="1"
      content="概要"
    />
    <ContentComp
      content="
      利根運河ブランドプロジェクトは、東京理科大学 野田キャンパスの近くを流れる「利根運河」の魅力を発信するための学生プロジェクトで、地域の NPO 法人と連携し、イベント出店などの活動をしています。
      私は主にデザイナーとして、コーヒーやお菓子、入浴剤などの商品のパッケージデザイン制作に携わった他、公式サイトや SNS の制作・運営を行いました。
      "
    />

    <TitleComp
      :index="2"
      content="デザイナーとしてのやりがい"
    />
    <ContentComp
      content="
      地域のイベントに出店し、デザインした商品を自分の手で販売すると、喜んで買ってくれる人々の声を直接聞くことができ、他に例えようのない達成感を感じました。
      自分のワクワクを誰かと共有できる、そんな素晴らしい体験でした。特に子どもたちの笑顔はいつもパワフルで、デザイン制作の苦労を忘れさせてくれるほどでした。
      中には過去に購入してくれた方がリピートしてくれることもあり、それを知るたびに地域に密着した活動ができたことを実感し、とても嬉しく思います。
      "
    />
    <ContentComp
      content="
      私はこれからも何かを創り続ける人でありたい、そう思える大きなきなきっかけになりました。
      デザインの力とシステム開発の力の両方を携えて、人々がワクワクするような何かを、ワクワクしながら創り続けていきたいです。
      "
    />

    <TitleComp
      :index="3"
      content="公式サイト"
    />
    <ContentComp
      content="
      これまでの活動実績や、展開中の商品の情報などついては、以下の公式サイトをご覧ください。
      "
    />

    <ButtonComp 
      link="https://224.works/"
      type="external"
      content="公式サイト"
      class="mt-5"
    />

  </div>
</template>

<script setup lang="ts">
  import TitleComp from '../parts/TitleComp.vue';
  import ContentComp from '../parts/ContentComp.vue';
  import ButtonComp from '../parts/ButtonComp.vue';

  defineOptions({
    name: 'ToneungabpComp'
  })
</script>

<style>

</style>