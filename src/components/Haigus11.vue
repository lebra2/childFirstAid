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
})
</script>

<template>
    <div class="bg-[#F6F6F7] text-xl font-[Sans-Serif]">
        <div class="">
            <iframe class="p-4 w-full h-64" :src="videoLink" allowfullscreen></iframe>
        </div>
        <div class="p-4 text-sm">
            <h1 class="text-lg">Sellest:</h1>
        <p class="">{{ sellestPara }}</p>
        </div>
        
        <ul>
            <li>
                
        <ol class="text-sm space-y-1 list-decimal list-inside p-4">
            <h1 class="text-lg">Haiguse ennetus:</h1>

            <li>{{ haiguseEnnet1 }}</li>
            <li>{{ haiguseEnnet2 }}</li>
            <li>{{ haiguseEnnet3 }}</li>
        </ol>
            </li>
        </ul>
        <div class=text-md>
            <div class="px-4">
            <RouterLink to="/haigus1" class="bg-white h-14 rounded-b-md font-medium border-b-2 items-center justify-between flex"><p class="m-2">{{ teeSeda1 }}</p></RouterLink>
            </div>
            <div class="px-4">
            <RouterLink to="/haigus1" class="bg-white h-14 rounded-b-md font-medium border-b-2 items-center justify-between flex"><p class="m-2">{{ teeSeda2 }}</p></RouterLink>
            </div>
            <div class="px-4">
            <RouterLink to="/haigus1" class="bg-white h-14 rounded-b-md font-medium border-b-2 items-center justify-between flex"><p class="m-2">{{ teeSeda3 }}</p></RouterLink>
            </div>
            <div class="px-4">
            <RouterLink to="/haigus1" class="bg-white h-14 rounded-b-md font-medium border-b-2 items-center justify-between flex"><p class="m-2">{{ teeSeda4 }}</p></RouterLink>
            </div>
        </div>
        <div class="p-2">
            <h1 class="font-bold text-xl ml-2 my-4">Q&As</h1>
        </div>

    </div>
</template>
