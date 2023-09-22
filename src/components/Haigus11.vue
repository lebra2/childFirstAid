<script setup>
let visible = false;

const props = defineProps({
    videoLink: String,
    sellestPara: String,
    haiguseEnnet1: String,
    haiguseEnnet2: String,
    haiguseEnnet3: String,
    teeSeda1: String,
    teeSeda2: String,
    teeSeda3: String,
    teeSeda4: String,
    kysimus1: String,
    kysimus2: String,
    kysimus3: String,
    vastus1: String,
    vastus2: String,
    vastus3: String,
    midatehaV: String,
    midatehaV2: String,
    midatehaV3: String,
})
</script>

<template>
    <div class="bg-[#F6F6F7] divide-y divide-gray-300">
        <div class="">
            <iframe class="px-4 w-full h-64" :src="videoLink" allowfullscreen></iframe>
        </div>
        <div class="px-4 my-8">
            <h1 class="text-md font-semibold my-2">Sellest:</h1>
            <h2 class="text-sm">{{ sellestPara }}</h2>
        </div>
        <ol class="px-4 my-8 list-decimal list-inside text-gray-800">
            <h1 class="text-md font-semibold my-2">Ennetused</h1>
            <li class="text-sm">{{ haiguseEnnet1 }}</li>
            <li class="text-sm">{{ haiguseEnnet2}}</li>
            <li class="text-sm">{{haiguseEnnet3}}</li>
        </ol>
        <div class="my-8">
            <ol class="list-decimal px-4 list-inside text-gray-800">
            <h1 class="text-md font-semibold my-2">Mida teha?</h1>
            <li class="text-sm">{{ midatehaV }}</li>
            <li class="text-sm">{{ midatehaV2 }}</li>
            <li class="text-sm">{{midatehaV3}} </li>
        </ol>
        </div>

        <!-- questions and answers -->

        <!-- FAQ -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto ">
  <!-- Grid -->
  <div class="grid md:grid-cols-5 gap-10 ">
    <div class="md:col-span-2 ">
      <div class="max-w-xs ">
        <h2 class="text-md font-semibold md:text-4xl md:leading-tight">Frequently<br>asked questions</h2>
        <p class="mt-1 hidden md:block text-gray-800">Answers to the most frequently asked questions.</p>
      </div>
    </div>
    <!-- End Col -->

    <div class="md:col-span-3">
      <!-- Accordion -->
      <div class="hs-accordion-group divide-y divide-gray-300">
        <div class="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
          <button class="text-md hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
            {{kysimus1}}
            <svg class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
            <p class="text-gray-600 text-sm">
              {{vastus1}}
            </p>
          </div>
        </div>
        <div class="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
          <button class="text-md hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
            {{kysimus2}}
            <svg class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
            <p class="text-gray-600 text-sm">
              {{vastus2}}
            </p>
          </div>
        </div>
        <div class="hs-accordion pb-3 active" id="hs-basic-with-title-and-arrow-stretched-heading-one">
          <button class="text-md hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-left text-gray-800 transition hover:text-gray-500" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
            {{kysimus3}}
            <svg class="hs-accordion-active:hidden block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <svg class="hs-accordion-active:block hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
            <p class="text-gray-600 text-sm">
              {{vastus3}}
            </p>
          </div>
        </div>

      </div>
      <!-- End Accordion -->
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End FAQ -->


        

    </div>
</template>
