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
        <div class="">
            <RouterLink to="/ennetamine1" class="bg-white h-14 rounded-b-md font-medium border-b-2 items-center justify-between flex"><p class="m-2 text-gray-600">Mürgistus</p></RouterLink>

        </div>
        <div class="">
            <RouterLink to="/ennetamine2" class="bg-white h-14 rounded-b-md font-medium border-b-2 items-center justify-between flex"><p class="m-2 text-gray-600">Põletused</p></RouterLink>

        </div>
        <div class="">
            <RouterLink to="/ennetamine2" class="bg-white h-14 rounded-b-md font-medium border-b-2 items-center justify-between flex"><p class="m-2 text-gray-600">Coming Soon</p></RouterLink>

        </div>
        <div class="">
            <RouterLink to="/ennetamine2" class="bg-white h-14 rounded-b-md font-medium border-b-2 items-center justify-between flex"><p class="m-2 text-gray-600">Coming Soon</p></RouterLink>

        </div>
        <div class="">
            <RouterLink to="/ennetamine2" class="bg-white h-14 rounded-b-md font-medium border-b-2 items-center justify-between flex"><p class="m-2 text-gray-600">Coming Soon</p></RouterLink>

        </div>
    </div>
</template>