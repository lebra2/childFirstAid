<!-- <template>
    <container>
        <div class="flex justify-center">
            <button class="" @click="visible = !visible"><p class="text-center text-gray-800 font-semibold">Tähtsad telefoninumbrid 🡻</p></button>
        </div>
        
        <div class="grid grid-cols-2" v-if="visible">
        <div class="my-4 px-6">
            <h4 class="text-gray-800">Kiirabi</h4>
            <p class="font-semibold text-gray-800">112</p>

            <h4 class="text-gray-800">Mürgistusteabekeskus</h4>
            <p class="font-semibold text-gray-800">16662</p>


        <p class="">Mürgistusteabekeskus: <br/><b>16662</b></p>
        <p class="">Perearsti nõuandetelefon: <br><b>1220</b></p>
        <p class="">Lastearsti (tasuline) nõuandeliin <br><b>1599</b></p>
      </div>
    <div class="my-4 px-6">
    <p class=" font-bold">Valvetoad:</p>
    <p class="">Kuressaare Haigla <br><b>452 0038</b></p>
    <p class="">Tallinna Lastehaigla <br><b>697 7146</b></p>
    <p class="">Tartu Ülikooli kliinikum <br><b>731 9512</b></p>
    <p class="">Regionaalhaigla <br><b>617 1369</b></p>
    <p class="">Lõuna-Eesti Haigla (Võru) <br><b>786 8511</b></p>
    <p class="">Narva Haigla <br><b>35 71 830</b></p>
</div>
</div>
    </container>
</template>
<script>
  export default {
    data() {
      return {
        visible: false,
      };
    },
  };

</script> -->

<template>
  <footer class="text-gray-800 w-full px-4 py-10  mx-auto">
  <!-- Grid -->
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
    <div>
      <div class="mt-3 grid space-y-3">
        <h4 class="text-md font-semibold">Üldine</h4>
        <p><a class="inline-flex gap-x-2 text-sm" href="#">Hädaabi</a><span class="inline text-red-600"><br> 112</span></p>
        <p><a class="inline-flex gap-x-2 text-sm" href="#">Mürgistusteabekeskus</a><span class="inline text-red-600"><br> 16662</span></p>
        <p><a class="inline-flex gap-x-2 text-sm" href="#">Perearsti nõuandetelefon</a> <span class="inline text-red-600"><br> 1220</span></p>
        <p><a class="inline-flex gap-x-2 text-sm" href="#">Lastearsti (tasuline) nõuandeliin</a><span class="inline text-red-600"><br> 1599</span></p>
      </div>
    </div>
    <!-- End Col -->

    <div>
      <div class="mt-3 grid space-y-3 text-gray-600">
        <h4 class="text-md font-semibold text-gray-800">Valvetoad</h4>
        <p><a class="inline-flex gap-x-2 text-sm" href="#">Kuressaare Haigla</a><span class="inline text-red-600"><br> 452 0038</span></p>
        <p><a class="inline-flex gap-x-2 text-sm" href="#">Tallinna Lastehaigla</a><span class="inline text-red-600"><br> 1697 7146</span></p>
        <p><a class="inline-flex gap-x-2 text-sm" href="#">Tartu Ülikooli kliinikum</a> <span class="inline text-red-600"><br> 731 9512</span></p>
        <p><a class="inline-flex gap-x-2 text-sm" href="#">Regionaalhaigla</a><span class="inline text-red-600"><br> 617 1369</span></p>
        <p><a class="inline-flex gap-x-2 text-sm" href="#">Lõuna-Eesti Haigla (Võru)</a><span class="inline text-red-600"><br> 786 8511</span></p>
        <p><a class="inline-flex gap-x-2 text-sm" href="#">Narva Haigla</a> <span class="inline text-red-600"><br> 35 71 830</span></p>
      </div>
    </div>
    <!-- End Col -->

    <div>
      <h4 class="text-md font-semibold">Kasutatud allikad</h4>

      <div class="mt-3 grid space-y-3 text-sm text-gray-600">
        <p><a class="inline-flex gap-x-2 cursor-pointer" href="https://www.redcross.org.uk/">British Red Cross</a></p>
        <p><a class="inline-flex gap-x-2 cursor-pointer" href="https://www.virtuaalkliinik.ee/">Virtuaalkliinik</a></p>
        <p><a class="inline-flex gap-x-2 cursor-pointer" href="https://agamina.ee/">MTÜ Aga Mina</a></p>
        <p><a class="inline-flex gap-x-2 cursor-pointer" href="https://www.16662.ee/et">Mürgistus Teabe Keskus</a></p>
      </div>
    </div>
    <!-- End Col -->

    <div>
      <h4 class="text-md font-semibold">Developers</h4>

      <div class="mt-3 grid space-y-3 text-sm">
        <p><a class="inline-flex gap-x-2 text-gray-600" href="#">GitHub</a> <span class="inline text-blue-600 dark:text-blue-500">— New</span></p>
      </div>

    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->

  <div class="pt-5 mt-5 border-t border-gray-200 dark:border-gray-400">
    <div class="sm:flex sm:justify-between sm:items-center">
      <div class="flex items-center gap-x-3">

        <div class="space-x-4 text-sm ml-4">
          <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Terms</a>
          <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Privacy</a>
          <a class="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200" href="#">Status</a>
        </div>
      </div>

      <div class="flex justify-between items-center">
        <div class="mt-3 sm:hidden">
          <a class="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a>
          <p class="mt-1 text-xs sm:text-sm text-gray-600 dark:text-gray-400">© 2023</p>
        </div>

        <!-- Social Brands -->
        <div class="space-x-4">
          <a class="inline-block text-gray-500 hover:text-gray-800 dark:hover:text-gray-200" href="#">
            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
</template>