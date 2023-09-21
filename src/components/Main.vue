<template>

    <div class="bg-[#F6F6F7] h-screen py-2 text-xl font-[Sans-Serif]">
        <div class="flex-col border border-black bg-white my-4 mx-2 text-md pl-2 h-32 flex text-center rounded-lg drop-shadow-lg ">
            <h1 class="underline">Päeva nipp</h1>
            <p class="text-sm mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ipsa eligendi aliquid nulla soluta voluptatum provident</p>
        </div>

        <div class="px-2">
            <RouterLink to="/haigus1" class="bg-[#FFDDDE] mt-3 h-14 rounded-md drop-shadow-sm items-center justify-center flex">Hooajalised haigused</RouterLink>
        </div>
        <div class="px-2">
            <RouterLink to="/haigus1" class="bg-yellow-50 mt-3 h-14 rounded-md drop-shadow-sm items-center justify-center flex">Teema 2</RouterLink>
        </div>
        <div class="px-2">
            <RouterLink to="/haigus1" class="bg-green-100 mt-3 h-14 rounded-md drop-shadow-sm items-center justify-center flex">Teema 3</RouterLink>
        </div>
        <div class="px-2">
            <RouterLink to="/haigus1" class="bg-purple-100 mt-3 h-14 rounded-md drop-shadow-sm items-center justify-center flex">Teema 4</RouterLink>
        </div>
        <div class="px-2">
            <RouterLink to="/haigus1" class="bg-[#FFDDDE] mt-3 h-14 rounded-md drop-shadow-sm items-center justify-center flex">Hooajalised haigused</RouterLink>
        </div>

        <div class="mt-8 mx-2 text-center">
            Facebook Posts
            <img class="mt-2" src="../assets/Pictures/fbpostexample.png" alt="">
            <img class="mt-2" src="../assets/Pictures/fbpostexample.png" alt="">
        </div>

    </div>
</template>

