<template>
    <div class="flex px-6 py-4 justify-between items-center font-['Jetbrains']">
      <div class="text-xl font-medium">
        <img src="../assets/Pictures/beebifine.png" class="max-w-12 max-h-12" alt="">
      </div>
      <h1 class="text-2xl font-medium">Beebifine</h1>
      <nav class="lg:flex hidden sticky">
        <router-link to="/">
          <h1 class="px-4 hover:bg-pink-500 hover:-skew-y-3" href="#">Home</h1>
      </router-link>
      <router-link to="/Disko" class="px-4 hover:bg-pink-500 hover:-skew-y-3" href="">Muusika</router-link>
      <a class="px-4 hover:bg-pink-500 hover:-skew-y-3" href="https://www.youtube.com/channel/UCrTLs2NxHzsAk7x1zkg8LrA">Biidid</a>
      <a class="px-4 hover:bg-pink-500 hover:-skew-y-3" href="#minust">Minust</a>
    
      </nav>
      <button class="lg:hidden flex focus:outline-none " @click="isOpen = !isOpen">
        <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24">
          <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
          <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.828-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.828z"/>
        </svg>
      </button>
    </div>
    
    <nav class="py-4 p-2 font-['Jetbrains'] lg:hidden bg-[#34534]" v-if="isOpen">
        <a class="block px-4 py-2" href="">Teema 1</a>
        <a class="block px-4 py-2" href="">Teema 1</a>
        <a class="block px-4 py-2" href="">Teema 1</a>
        <a class="block px-4 py-2" href="">Teema 1</a>
        <a class="block px-4 py-2" href="">Teema 1</a>
      
    </nav>
    
  </template>
  
  <script>
  export default {
    data() {
      return {
        isOpen: false,
      };
    },
  };
  
  
  </script>
  