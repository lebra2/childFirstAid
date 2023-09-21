<script setup>
import Season from './Season.vue';
import Ennetused from './Ennetused.vue'
import HEnnetused from './HEnnetused.vue'

function extendMenu(id) {
    const dropdown = document.getElementById(id)
    const dropdownImg = document.getElementById('img' + id)

    if(dropdown.classList.contains('h-auto')) {
        dropdown.classList.add('h-14')
        dropdown.classList.remove('h-auto')
        dropdownImg.classList.remove('rotate-90')
        
    } else {
        dropdown.classList.remove('h-14')
        dropdown.classList.add('h-auto')
        dropdownImg.classList.add('rotate-90')
    }
}
</script>

<template>
    <div class="bg-[#F6F6F7] pb-4 text-sm">
        <div class="bg-white h-14 rounded-b-md font-medium border-b-2 overflow-hidden" id="dp5">
            <div class="flex justify-between items-center h-14 w-full">
                <p class="m-2 text-gray-600">Olukordade ennetamine</p>
                <img class="w-4 h-4 mr-4" src="../assets/Pictures/icons8-arrow-30.png" id="imgdp5" alt="" @click="extendMenu('dp5')">
            </div>
            <Ennetused />
        </div>
        <div class="bg-white h-14 rounded-b-md font-medium border-b-2 overflow-hidden" id="dp6">
            <div class="flex justify-between items-center h-14 w-full">
                <p class="m-2 text-gray-600">Haiguste ennetamine</p>
                <img class="w-4 h-4 mr-4" src="../assets/Pictures/icons8-arrow-30.png" id="imgdp6" alt="" @click="extendMenu('dp6')">
            </div>
            <HEnnetused />
        </div>
    </div>
</template>