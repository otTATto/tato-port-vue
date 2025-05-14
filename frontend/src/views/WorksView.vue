<template>
  <div class="my-5 px-5 lg:px-[10vw] 2xl:px-[20vw] 4xl:px-[30vw]">
    <h1 class="my-5 font-MaruGothic font-bold text-center underline decoration-wavy text-red-400 text-xl">
      全体的な軌跡
    </h1>

    <hr class="border-t border-1 border-TatoGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <WorkCard 
      :date="{ 
        text: '✅ 現在',
        class: 'text-green-500'
      }"
      :title="{
        size: 'big',
        text: '重度運動機能障害者 支援システム 研究開発 ＠産総研'
      }"
      image=""
      :types="[
        'Engineer',
        'Study'
      ]"
      :tags="[
        '画像処理', 
        'C++', 
        'Python', 
        'OpenCV', 
        'Git/GitHub'
      ]"
      description="国立研究開発法人 産業技術総合研究所 人間情報インタラクション研究部門 依田研究室のもとで、重度運動機能障害者の支援システムの研究開発を行っています。システム面では、Visual Studio 上での C++ による Windows アプリケーション開発がメインです。"
      :detail="{
        type: 'external',
        link: 'http://gesture-interface.jp/'
      }"
    />

    <hr class="border-t-3 border-dotted border-TatoLightGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <WorkCard 
      :id="'toneunga-bp'"
      :date="{ 
        text: '✅ 現在',
        class: 'text-green-500'
      }"
      :title="{
        size: 'big',
        text: '利根運河ブランドプロジェクト'
      }"
      :image="bannerToneungaBp"
      :types="[
        'Engineer',
        'Design'
      ]"
      :tags="[
        'WordPress', 
        'Adobe Illustrator'
      ]"
      description="東京理科大学 野田キャンパスの近くにある「利根運河」の魅力を発信するためのプロジェクトに、主にデザイナーとして携わりました。利根運河をモチーフにデザインした商品を、地域のイベントや大学の学会などで販売しています。"
      :detail="{
        type: 'internal',
        link: '/works/toneunga-bp/'
      }"
    />

    <hr class="border-t-3 border-dotted border-TatoLightGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <WorkCard 
      :date="{ 
        text: '🏆 2025.03',
        class: 'text-gray-400'
      }"
      :title="{
        size: 'big',
        text: '情報処理学会 全国大会 学生奨励賞 受賞'
      }"
      :image="bannerIpsj"
      :types="[
        'Study'
      ]"
      :tags="[
        '自然言語処理', 
        'LLM'
      ]"
      description="情報処理学会の第 87 回 全国大会において、「雑談対話言語モデルの個人性に注目した性能評価に関する検討」という研究題目で発表し、学生奨励賞をいただきました。"
      :detail="{
        type: '',
        link: ''
      }"
    />

    <hr class="border-t-3 border-dotted border-TatoLightGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <WorkCard 
      :date="{ 
        text: '🏆 2024.12',
        class: 'text-gray-400'
      }"
      :title="{
        size: 'big',
        text: 'ゲーム開発学特論 最優秀賞 受賞'
      }"
      :image="bannerCygames"
      :types="[
        'Engineer'
      ]"
      :tags="[
        'C#', 
        'PHP',
        'MySQL',
        'Laravel',
        'Unity',
        'Git/GitHub'
      ]"
      description="株式会社 Cygames さんによる大学院の授業「ゲーム開発学特論」において、チームで Unity を用いたゲーム開発を行い、最優秀賞をいただきました。"
      :detail="{
        type: '',
        link: ''
      }"
    />

    <hr class="border-t-3 border-dotted border-TatoLightGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <WorkCard 
      :id="'project-asg'"
      :date="{ 
        text: '🏆 2023.12',
        class: 'text-gray-400'
      }"
      :title="{
        size: 'big',
        text: 'プロジェクト課題 最優秀賞 受賞'
      }"
      :image="bannerProjectAsg"
      :types="[
        'Engineer'
      ]"
      :tags="[
        'HTML', 
        'CSS',
        'JavaScript',
        'Python',
        'Bootstrap',
        'Firebase',
        'Flask',
        'Git/GitHub'
      ]"
      description="学部 3 年で実施される「プロジェクト課題」というハッカソンのような授業において、チームでオンライン試験におけるカンニング検知システム「試験防衛壁」を開発し、最優秀賞をいただきました。"
      :detail="{
        type: 'internal',
        link: '/works/project-asg/'
      }"
    />

    <hr class="border-t-3 border-dotted border-TatoLightGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <WorkCard 
      :date="{ 
        text: '🎨 2023.10',
        class: 'text-gray-400'
      }"
      :title="{
        size: 'big',
        text: '理科大学生アイドルグループ ロゴ制作'
      }"
      :image="bannerIdol"
      :types="[
        'Design'
      ]"
      :tags="[
        'Adobe Photoshop', 
        'Adobe Illustrator'
      ]"
      description="現役理科大生のみから構成されるアイドルグループ「放課後スターライト」のロゴデザインを制作しました。"
      :detail="{
        type: 'external',
        link: 'https://idol.co.jp/'
      }"
    />

    <hr class="border-t-3 border-dotted border-TatoLightGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <WorkCard 
      :date="{ 
        text: '🎨 2023.06, 2024.06',
        class: 'text-gray-400'
      }"
      :title="{
        size: 'big',
        text: '水辺で乾杯ポスター制作'
      }"
      :image="bannerMizbe"
      :types="[
        'Design'
      ]"
      :tags="[
        'Adobe Illustrator'
      ]"
      description="利根運河沿いにある「運河水辺公園」で開催される「水辺で乾杯！利根運河」というイベントのロゴデザインおよびポスターを、2 年連続で制作しました。"
      :detail="{
        type: 'external',
        link: 'https://lp.224.works/mizbering/'
      }"
    />

    <hr class="border-t border-1 border-TatoGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <h1 class="my-5 font-MaruGothic font-bold text-center underline decoration-wavy text-red-400 text-xl">
      その他の制作・開発
    </h1>

    <hr class="border-t border-1 border-TatoGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <WorkCard 
      :date="{ 
        text: '2025.04',
        class: 'text-gray-400'
      }"
      :title="{
        size: 'small',
        text: 'ポートフォリオサイト制作'
      }"
      :image="bannerPortfolio"
      :types="[
        'Engineer',
        'Design'
      ]"
      :tags="[
        'HTML',
        'CSS',
        'TypeScript',
        'Vue.js',
        'Tailwind CSS',
        'Docker',
        'Adobe After Effects'
      ]"
      description="これまでの自分の活動をまとめたポートフォリオサイトを制作しました。Vue.js と Tailwind CSS を使用しており、Top ページのローディングアニメーションには、Adobe After Effects で制作したテキストアニメーションを GIF 化して使用しています。"
      :detail="{
        type: '',
        link: ''
      }"
    />

    <hr class="border-t-3 border-dotted border-TatoLightGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <WorkCard 
      :date="{ 
        text: '2024.06',
        class: 'text-gray-400'
      }"
      :title="{
        size: 'small',
        text: 'カウントダウンゲーム「7.777秒チャレンジ」制作'
      }"
      image=""
      :types="[
        'Engineer',
        'Design'
      ]"
      :tags="[
        'HTML',
        'CSS',
        'JavaScript',
        'Adobe Illustrator'
      ]"
      description="途中で数字が見えなくなるカウントダウンゲーム「7.777 秒チャレンジ」を制作しました。地域のイベントでの出店時に、多くの子供たちに遊んでもらいました。"
      :detail="{
        type: 'external',
        link: 'https://chal7777.web.app/'
      }"
    />

    <hr class="border-t-3 border-dotted border-TatoLightGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <WorkCard 
      :date="{ 
        text: '2024.04',
        class: 'text-gray-400'
      }"
      :title="{
        size: 'small',
        text: 'こどもと一緒に学ぶ有機農法 イベントポスター制作'
      }"
      image=""
      :types="[
        'Design'
      ]"
      :tags="[
        'Adobe Photoshop',
        'Adobe Illustrator'
      ]"
      description="地域の有機野菜農園「えか農園」さんのイベント出店時に、有機野菜の魅力を伝えるためのポスターを制作しました。"
      :detail="{
        type: '',
        link: ''
      }"
    />

    <hr class="border-t-3 border-dotted border-TatoLightGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <WorkCard 
      :date="{ 
        text: '2024.04, 2025.04',
        class: 'text-gray-400'
      }"
      :title="{
        size: 'small',
        text: '理科大こいのぼり制作'
      }"
      :image="bannerKoinobori"
      :types="[
        'Design'
      ]"
      :tags="[
        'Adobe Illustrator'
      ]"
      description="東京理科大学「理工学部」が「創域理工学部」に変更することを記念し、新しい学部ロゴマークをモチーフにした「理科大こいのぼり」を作成しました。毎年、利根運河を泳ぎます。"
      :detail="{
        type: '',
        link: ''
      }"
    />

    <hr class="border-t-3 border-dotted border-TatoLightGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <WorkCard 
      :date="{ 
        text: '2023.10',
        class: 'text-gray-400'
      }"
      :title="{
        size: 'small',
        text: 'フォント当てゲーム「FontGuessr」制作'
      }"
      image=""
      :types="[
        'Engineer'
      ]"
      :tags="[
        'HTML',
        'CSS',
        'JavaScript',
        'Firebase',
        'Adobe Fonts'
      ]"
      description="見た目だけでフォント名を言い当てられる特殊能力「絶対フォント感」の獲得を目指し、フォント名を当てるゲーム「FontGuessr」を制作しました。"
      :detail="{
        type: 'external',
        link: 'https://fontguessr.web.app/'
      }"
    />

    <hr class="border-t-3 border-dotted border-TatoLightGreen -mx-5 lg:-mx-[10vw] 2xl:-mx-[20vw] my-3" />

    <WorkCard 
      :date="{ 
        text: '2023.09',
        class: 'text-gray-400'
      }"
      :title="{
        size: 'small',
        text: 'AI チャットツール制作'
      }"
      image=""
      :types="[
        'Engineer'
      ]"
      :tags="[
        'HTML',
        'CSS',
        'JavaScript',
        'Firebase',
        'OpenAI API'
      ]"
      description="OpenAI の API を使用して、架空のキャラクターと会話できるチャットツールを制作しました。東北を代表するキャラクター「ずんだもん」と会話できます。"
      :detail="{
        type: '',
        link: ''
      }"
    />

    

  </div>
</template>

<script setup lang="ts">
  import WorkCard from '../components/WorkCard.vue';

  // @brief 画像のインポート
  import bannerToneungaBp from '@/img/works/banner_toneungaBp.webp'
  import bannerIpsj from '@/img/works/banner_ipsj.webp'
  import bannerCygames from '@/img/works/banner_cygames.webp'
  import bannerProjectAsg from '@/img/works/banner_projectAsg.webp'
  import bannerIdol from '@/img/works/banner_idol.webp'
  import bannerMizbe from '@/img/works/banner_mizbe.webp'
  import bannerPortfolio from '@/img/works/banner_portfolio.webp'
  import bannerKoinobori from '@/img/works/banner_koinobori.webp'

  defineOptions({
    name: 'WorksTop'
  })
</script>

<style>

</style>