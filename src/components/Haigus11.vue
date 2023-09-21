<template>
    <div class="bg-[#F6F6F7] text-xl font-[Sans-Serif]">
        <div class="">
            <iframe class="p-4 w-full h-64" src="https://www.youtube.com/embed/GymXjJJ7Ugo?si=cz_xKLKxEahJ3Xf0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="p-4 text-sm">
            <h1 class="text-lg">Sellest:</h1>
        <p class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem alias mollitia animi corporis ex optio natus sit, commodi aut consequatur veniam, explicabo, totam sapiente. Distinctio tenetur molestias explicabo ut quam!</p>
        </div>
        
        <ul>
            <li>
                
        <ol class="text-sm space-y-1 list-decimal list-inside p-4">
            <h1 class="text-lg">Haiguse ennetus:</h1>

            <li>You might feel like you are being really "organized" o</li>
            <li>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</li>
            <li>Nesting tons of folders in your source code is also not helpful.</li>
        </ol>
            </li>
        </ul>
        <div class=text-md>
            <div class="px-4">
            <RouterLink to="/haigus1" class="bg-white h-14 rounded-b-md font-medium border-b-2 items-center justify-between flex"><p class="m-2">Tee seda</p></RouterLink>
            </div>
            <div class="px-4">
            <RouterLink to="/haigus1" class="bg-white h-14 rounded-b-md font-medium border-b-2 items-center justify-between flex"><p class="m-2">Tee seda</p></RouterLink>
            </div>
            <div class="px-4">
            <RouterLink to="/haigus1" class="bg-white h-14 rounded-b-md font-medium border-b-2 items-center justify-between flex"><p class="m-2">Tee seda</p></RouterLink>
            </div>
            <div class="px-4">
            <RouterLink to="/haigus1" class="bg-white h-14 rounded-b-md font-medium border-b-2 items-center justify-between flex"><p class="m-2">Tee seda</p></RouterLink>
            </div>
        </div>
        <div class="p-2">
            <h1 class="font-bold text-xl ml-2 my-4">Q&As</h1>
        <container>
            <div class="drop-shadow-md bg-white mt-3 p-2">
                <div class="">
                <button class="" @click="visible = !visible"><p class="">Mida teha kui mul jalg sygeleb 🡻</p></button>
            </div>
        
            <div class="" v-if="visible">
                <div class="">
                    <p class=text-sm>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maxime dolor a, iusto ad rerum velit accusamus quidem libero!</p>
                </div>
            </div>
            </div>

        </container>
        <container>
            <div class="drop-shadow-md bg-white mt-3 p-2">
                <div class="">
                <button class="" @click="visible = !visible"><p class="">Mida teha kui mul jalg sygeleb 🡻</p></button>
            </div>
        
            <div class="" v-if="visible">
                <div class="">
                    <p class=text-sm>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maxime dolor a, iusto ad rerum velit accusamus quidem libero!</p>
                </div>
            </div>
            </div>

        </container>
        <container>
            <div class="drop-shadow-md bg-white mt-3 p-2">
                <div class="">
                <button class="" @click="visible = !visible"><p class="">Mida teha kui mul jalg sygeleb 🡻</p></button>
            </div>
        
            <div class="" v-if="visible">
                <div class="">
                    <p class=text-sm>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, maxime dolor a, iusto ad rerum velit accusamus quidem libero!</p>
                </div>
            </div>
            </div>

        </container>
        </div>

    </div>
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