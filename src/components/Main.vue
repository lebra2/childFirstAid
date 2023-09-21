<script setup>
import Season from './Season.vue';
import Ennetamine from './Ennetamine.vue'

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

    <div class="bg-[#F6F6F7] p-4 text-md">
        <div>
            <a class="group overflow-hidden" href="#">
      <div class="sm:flex">
        <div class="flex-shrink-0 relative overflow-hidden w-full sm:w-56 h-44">
          <img class="transition-transform duration-500 ease-in-out w-full h-full absolute top-0 left-0 object-cover" src="https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
        </div>

        <div class="grow mt-4 sm:mt-0 sm:ml-6 sm:px-0">
          <h3 class="text-xl font-semibold text-gray-800">
            Päeva nipp
          </h3>
          <p class="mt-3 text-gray-600 my-4">
            Produce professional, reliable streams easily leveraging Preline's innovative broadcast studio
          </p>
          
        </div>
      </div>
    </a>
        </div>

        <div class="bg-white h-14 rounded-b-md font-medium border-b-2 overflow-hidden" id="dp1">
            <div class="flex justify-between items-center h-14 w-full">
                <p class="m-2 font-semibold text-gray-800 ">Hooajalised haigused</p>
                <img class="w-4 h-4 mr-4" src="../assets/Pictures/icons8-arrow-30.png" id="imgdp1" alt="" @click="extendMenu('dp1')">
            </div>
            <Season />
        </div>
        <div class="bg-white h-14 rounded-b-md font-medium border-b-2 overflow-hidden" id="dp2">
            <div class="flex justify-between items-center h-14 w-full">
                <p class="m-2 font-semibold text-gray-800">Ennetamine</p>
                <img class="w-4 h-4 mr-4" src="../assets/Pictures/icons8-arrow-30.png" id="imgdp2" alt="" @click="extendMenu('dp2')">
            </div>
            <Ennetamine />
        </div>
        <div class="bg-white h-14 rounded-b-md font-medium border-b-2 overflow-hidden" id="dp3">
            <div class="flex justify-between items-center h-14 w-full">
                <p class="m-2 font-semibold text-gray-800">Haigused</p>
                <img class="w-4 h-4 mr-4" src="../assets/Pictures/icons8-arrow-30.png" id="imgdp3" alt="" @click="extendMenu('dp3')">
            </div>
            <Season />
        </div>
        <div class="bg-white h-14 rounded-b-md font-medium border-b-2 overflow-hidden" id="dp4">
            <div class="flex justify-between items-center h-14 w-full">
                <p class="m-2 font-semibold text-gray-800">Olukorrad</p>
                <img class="w-4 h-4 mr-4" src="../assets/Pictures/icons8-arrow-30.png" id="imgdp4" alt="" @click="extendMenu('dp4')">
            </div>
            <Season />
        </div>
        

    </div>
</template>

