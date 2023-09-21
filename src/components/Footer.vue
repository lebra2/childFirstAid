<template>
    <container>
        <div class="flex justify-center">
            <button class="" @click="visible = !visible"><p class="text-center">Tähtsad telefoninumbrid 🡻</p></button>
        </div>
        
        <div class="grid grid-cols-2" v-if="visible">
            <div class="my-4">
    <p class="px-6">Kiirabi: <br><b>112</b></p>
    <p class="px-6">Mürgistusteabekeskus: <br/><b>16662</b></p>
    <p class="px-6">Perearsti nõuandetelefon: <br><b>1220</b></p>
    <p class="px-6">Lastearsti (tasuline) nõuandeliin <br><b>1599</b></p>
</div>
    <div class="my-4">
    <p class="px-6 font-bold">Valvetoad:</p>
    <p class="px-6">Kuressaare Haigla <br><b>452 0038</b></p>
    <p class="px-6">Tallinna Lastehaigla <br><b>697 7146</b></p>
    <p class="px-6">Tartu Ülikooli kliinikum <br><b>731 9512</b></p>
    <p class="px-6">Regionaalhaigla <br><b>617 1369</b></p>
    <p class="px-6">Lõuna-Eesti Haigla (Võru) <br><b>786 8511</b></p>
    <p class="px-6">Narva Haigla <br><b>35 71 830</b></p>
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

</script>