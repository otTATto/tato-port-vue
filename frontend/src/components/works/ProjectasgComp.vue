<!-- 
@brief 作品ページ「プロジェクト課題」
-->
<template>
  <div>
    
    <TitleComp
      :index="1"
      content="概要"
    />
    <ContentComp
      content="
      プロジェクト課題とは、東京理科大学 創域理工学部 情報計算科学科の学部 3 年次の必修科目であり、およそ 4 ヶ月わたるチーム開発のハッカソンです。
      わたしたちは、8 名のチームで、オンライン試験のカンニングを防止するための Web アプリケーション「試験防御壁」を開発し、全 15 チームの中で、最優秀賞を受賞しました。
      "
    />

    <TitleComp
      :index="2"
      content="“試験防御壁”とは"
    />
    <ContentComp
      content="
      使用者の端末や OS に依存しない利点を活かし、Web アプリケーションとして開発しました。
      アプリケーションは試験を受ける「学生版」と、試験を監督する「教師版」に分かれています。
      学生版では、試験時間中に Web カメラが起動し、映像がサーバー側に送信されます。機械学習モデルが映像を解析し、カンニングの兆候を検出します。
      教師版では、カンニングが検出された場合に通知が届き、カンニング行為の疑いのある学生を特定することができます。
      "
    />

   <TitleComp
      :index="3"
      content="開発の過程"
    />
    <ContentComp
      content="
      はじめはチーム内での技術力に差があり、限られた人に負担が集中しがちでしたが、チームリーダーとして率先して MTG を開き現状把握とタスクの分担を割り振ることで、メンバー全員で開発に取り組むことができました。
      Discord でのコミュニケーションや Notion でのドキュメント管理など、チーム内のインフラを真っ先に整え、誰もが円滑に会話・開発できる環境づくりを徹底しました。
      "
    />

    <ContentComp
      content="
      更に詳しい開発日記については、以下の Notion をご覧ください。
      "
    />

    <ButtonComp 
      link="https://tato-tato.notion.site/AI-b460b8b1d9fb49aca285a7af0c520d65?pvs=4"
      type="external"
      content="Notion"
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