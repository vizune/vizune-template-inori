<script setup>
import { ref, watch } from 'vue';
import Header from './components/Header/Header.vue'
import Logo from './components/Header/Logo.vue'
import Navigation from './components/Header/Navigation.vue'
import Footer from './components/Footer/Footer.vue'
import Tabs from './components/Tabs/Tabs.vue'
import TabItem from './components/Tabs/TabItem.vue'
import FilterDropdown from './components/FilterDropdown.vue'
import StyleOne from './components/PostItems/StyleOne.vue'
import StyleTwo from './components/PostItems/StyleTwo.vue'
import StyleThree from './components/PostItems/StyleThree.vue'

const defaultFilter = "Filter Content goes here";
let filterContent = defaultFilter;
const filterSelected = ref('');
const filters = [
  "Filter One",
  "Filter Two",
  "Filter Three",
  "Filter Four",
  "Filter Five"
]
watch(filterSelected, (newFilterSelected) => {
  filterContent = newFilterSelected === '' ? defaultFilter : newFilterSelected;
})

const styleOneData = [
  {
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ultrices tellus. In commodo massa vitae finibus semper. Etiam eget.',
    thumbnail: 'https://placehold.co/250x250.png',
    slug: 'post-name1',
    publishDate: '13/10/2023',
    category: 'blog'
  },
  {
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a ultrices tellus. In commodo massa vitae finibus semper. Etiam eget.',
    thumbnail: 'https://placehold.co/250x250.png',
    slug: 'post-name2',
    publishDate: '14/10/2023',
    category: 'blog'
  }
]

const styleTwoData = [
  {
    title: 'Render 001: Guilty Crown',
    imageDimensions: '800 x 1200',
    asset: 'https://placehold.co/768x400.png',
    fileSize: '1.2 MB',
    publishDate: '13/10/2013',
    downloadUrl: 'http://vizune.com'
  },
  {
    title: 'Render 002: Hyperdimension Neptunia',
    imageDimensions: '1200 x 2200',
    asset: 'https://placehold.co/768x400.png',
    fileSize: '2.3 MB',
    publishDate: '14/10/2013',
    downloadUrl: 'http://vizune.com'
  },
  {
    title: 'Render 003: Granblue Fantasy',
    imageDimensions: '1300 x 750',
    asset: 'https://placehold.co/768x400.png',
    fileSize: '1.75 MB',
    publishDate: '14/10/2013',
    downloadUrl: 'http://vizune.com'
  }
]

const styleThreeData = [
  {
    title: 'Template: Inori',
    publishDate: '14/10/2023',
    category: 'Anime/Manga',
    series: 'Guilty Crown',
    character: 'Inori Yuzuriha',
    demoUrl: 'http://vizune.com',
    downloadUrl: 'http://vizune.com',
    asset: '/thumbnail.jpg',
  },
  {
    title: 'Template: Chie',
    publishDate: '14/10/2023',
    category: 'Video Game',
    series: 'Persona Q: Shadow of the Labyrinth',
    character: 'Chie Satonaka',
    demoUrl: 'http://vizune.com',
    downloadUrl: 'http://vizune.com',
    asset: 'https://placehold.co/750x375.png',
  }
]
</script>

<template>
  <div class="site-container flex flex-col grow">
    <div class="flex">
      <Header />
      <div class="bg-stizza flex flex-col justify-between w-full max-w-[21.25rem]">
        <Logo />
        <Navigation />
      </div>
    </div>
    <div class="bg-white px-4 lg:px-6 pt-12 pb-24 bg-footer-lace bg-bottom bg-repeat-x grow">
      <h1>Inori web template</h1>
      <div class="flex">
        <img src="/avatar.png" alt="Guilty Crown Avatar" class="inline-block mr-2 mb-2 w-[100px] h-[100px]" />
        <div>
          <p>
            This web template features <em>Inori Yuzuriha from Guilty Crown</em> and was built with Vue, Vite and Tailwind. 
            It was originally built in HTML / Bootstrap back in 2015 and you can still check out the <a href="http://vizune.com/demos/templates/inori/" target="_blank">demo</a> 
            and the download <a href="https://github.com/vizune/vizune-template-archive/tree/main/inori" target="_blank">code source from my Github</a>. 
          </p>
          <p>
            There are a variety of components available such as Tabs, Select Dropdown and SVG sprite for social icons (I'm planning on writing a tutorial on this topic). 
            I recommend using an online <a href="https://svg-sprite-generator.vercel.app/" target="_blank">SVG sprite generator</a>, drag and drop all your SVG icons from 
            <code>src/assets/icons</code> onto the page then paste the code provided into <em>_sprite.svg</em> for safe keeping and update SVG code on index.html too.
          </p>
        </div>
      </div>

      <h2>Tabs component</h2>
      <Tabs>
        <TabItem title="Tab 1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras semper leo eu lectus tristique, quis semper augue tempor. 
            Donec diam nulla, hendrerit ac augue blandit, scelerisque rhoncus nulla. Vivamus sem neque, elementum vel quam sed, dictum ultrices mauris. 
            Duis in sem sapien. Sed accumsan varius nisi quis consequat. Morbi consequat iaculis urna vitae pretium. 
            Quisque pharetra, ligula in maximus eleifend, dui ipsum ultrices ex, vitae rutrum ipsum sem in purus. Sed et elit non sem malesuada vestibulum. 
            Morbi pretium suscipit nisi, a posuere tortor efficitur sed. Duis varius turpis nec urna porttitor, quis porttitor neque pretium. 
            Phasellus ac nisl vestibulum, ullamcorper velit vitae, laoreet quam. In efficitur quis nunc id maximus. Duis placerat volutpat placerat. 
            Nunc interdum dui sed sem imperdiet egestas.</p>
        </TabItem>
        <TabItem title="Tab 2">
          <p>Integer metus ante, scelerisque sit amet eros eget, interdum venenatis felis. Nunc sit amet libero eget nulla vulputate sodales. 
            Nunc non tortor non tortor interdum blandit non eu leo. Pellentesque iaculis risus erat, ut viverra quam viverra sit amet. 
            Quisque eget sollicitudin sapien, et facilisis orci. Integer pharetra auctor ullamcorper. Aliquam pulvinar placerat ornare. 
            Cras enim sapien, placerat a nibh in, feugiat imperdiet dui. Phasellus eleifend et arcu ut varius. Nulla commodo libero vel sapien congue ullamcorper. </p>
        </TabItem>
        <TabItem title="Tab 3">
          <p>Quisque ac auctor libero, vitae venenatis erat. Quisque augue ante, auctor vitae eros sed, tristique vestibulum dui. 
            Mauris tincidunt, urna ut faucibus aliquam, erat ex vehicula enim, a iaculis ligula nibh quis metus. In hac habitasse platea dictumst. 
            Nunc a est ac quam molestie egestas. Ut massa nibh, volutpat vitae leo vitae, eleifend porttitor libero. Donec posuere tristique rutrum. 
            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce luctus nisl a mi viverra, imperdiet hendrerit purus molestie. 
            Duis tincidunt, nisi eu molestie rutrum, nibh massa suscipit massa, quis faucibus libero odio sit amet purus. Morbi placerat pellentesque sapien. 
            Integer feugiat tellus non iaculis rhoncus. Duis in erat nibh. Fusce velit erat, luctus non mi congue, aliquam suscipit elit. Praesent a mauris diam.</p>
        </TabItem>
      </Tabs>

      <h2>Filter dropdown</h2>
      <FilterDropdown v-model="filterSelected" :values="filters">
        <option value="">Filter content...</option>
        <option v-for="item in filters" :key="item" :value="item">{{ item }}</option>
      </FilterDropdown>
      <p class="text-center mt-6 text-lg font-bold
      ">{{ filterContent }}</p>

      <h2>Post styles</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <StyleOne 
          v-for="post in styleOneData"
          :title="post.title"
          :description="post.description"
          :thumbnail="post.thumbnail"
          :slug="post.slug"
          :publishDate="post.publishDate"
          :category="post.category"
        />
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">
        <StyleTwo 
          v-for="download in styleTwoData"
          :title="download.title"
          :imageDimensions="download.imageDimensions"
          :asset="download.asset"
          :fileSize="download.fileSize"
          :publishDate="download.publishDate"
          :downloadUrl="download.downloadUrl"
        />
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-8">
        <StyleThree 
          v-for="template in styleThreeData"
          :title="template.title"
          :publishDate="template.publishDate"
          :category="template.category"
          :series="template.series"
          :character="template.character"
          :demoUrl="template.demoUrl"
          :downloadUrl="template.downloadUrl"
          :asset="template.asset"
        />
      </div>
      
    </div>
    <Footer />
  </div>
</template>

