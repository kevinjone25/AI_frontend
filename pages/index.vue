<template>
    <div class="w-screen h-screen bg-black flex justify-center items-center">
        <div class="w-full max-w-6xl h-full flex flex-col text-white">
            <div class="w-full mt-40 mb-20">
                <h1 class="text-6xl m-1">Dashboard</h1>
                <p class="text-2xl m-1">
                    目前有 10 筆嚴重等級違規, 10 筆警告等級違規, 請查看！
                </p>
            </div>
            <div class="flex flex-row">
                <div class="w-44 h-44 flex flex-col justify-between bg-red-500 bg-opacity-50 rounded-xl m-1 p-4 hover:translate-x-0.5 hover:bg-red-700 duration-300">
                    <h2 class="font-bold text-3xl text-red-50">嚴重</h2>
                    <p class="self-end font-black text-7xl text-red-300">10</p>
                </div>
                <div class="w-44 h-44 flex flex-col justify-between bg-yellow-600 bg-opacity-60 rounded-xl m-1 p-4 hover:translate-x-0.5 hover:bg-yellow-700 duration-300">
                    <h2 class="font-bold text-3xl text-yellow-50">警告</h2>
                    <p class="self-end font-black text-7xl text-yellow-400">10</p>
                </div>
                <div class="w-44 h-44 flex flex-col justify-between bg-gray-600 bg-opacity-60 rounded-xl m-1 p-4 hover:translate-x-0.5 hover:bg-gray-700 duration-300">
                    <h2 class="font-bold text-3xl text-gray-50">所有紀錄</h2>
                    <p class="self-end font-black text-4xl">logs</p>
                </div>
            </div>
        </div>
    </div>
</template>
