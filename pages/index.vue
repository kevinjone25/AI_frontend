<template>
    <div class="w-screen sm:h-screen flex justify-center items-center bg-gradient-to-tr from-gray-950 from-30% via-blue-950 via-95% to-sky-950 to-100% px-5 lg:px-20 xl:px-40 pt-16 text-white">
        <main class="w-full flex flex-wrap justify-center items-center  border-yellow-600">
            <div class="left h-screen sm:h-full md:h-2/3 lg:w-1/2 w-full flex flex-col text-white sm:justify-between   border-blue-600">
                <div class="w-full mt-16 sm:mt-40 mb-20">
                    <h1 class="text-6xl m-1">系統總覽</h1>
                    <p class="text-2xl m-1">
                        {{ msg }}
                    </p>
                </div>

                <div class="flex flex-row flex-wrap justify-end">
                    <nuxt-link to="/violations/criticals">
                        <div class="w-32 h-32 xl:w-44 xl:h-44 flex flex-col justify-between bg-red-500 bg-opacity-50 rounded-xl m-1 p-4 hover:translate-x-0.5 hover:bg-red-800 duration-300">
                        <h2 class="font-bold text-2xl xl:text-3xl text-red-50">嚴重</h2>
                        <p class="self-end font-black text-6xl xl:text-7xl text-red-300">{{ criticals_num }}</p>
                        </div>
                    </nuxt-link>
                    
                    <nuxt-link to="/violations/warns">
                        <div class="w-32 h-32 xl:w-44 xl:h-44 flex flex-col justify-between bg-yellow-600 bg-opacity-60 rounded-xl m-1 p-4 hover:translate-x-0.5 hover:bg-yellow-700 duration-300">
                            <h2 class="font-bold text-2xl xl:text-3xl text-yellow-50">警告</h2>
                            <p class="self-end font-black text-6xl xl:text-7xl text-yellow-50">{{ warns_num }}</p>
                        </div>
                    </nuxt-link>
                    <nuxt-link to="/violations">
                        <div class="w-32 h-32 xl:w-44 xl:h-44 flex flex-col justify-between bg-gray-600 bg-opacity-60 rounded-xl m-1 p-4 hover:translate-x-0.5 hover:bg-gray-700 duration-300">
                            <h2 class="font-bold text-2xl xl:text-3xl text-gray-50">全部</h2>
                            <p class="self-end font-black text-6xl xl:text-7xl text-gray-300">{{ events_num }}</p>
                        </div>
                    </nuxt-link>

                    <div class="sm:hidden w-32 h-32 xl:w-44 xl:h-44 flex flex-col justify-between bg-gray-600 bg-opacity-60 rounded-xl m-1 p-4 hover:translate-x-0.5 hover:bg-gray-700 duration-300" @click="scrollToBottom()">
                            <h2 class="font-bold text-2xl xl:text-3xl text-gray-50">快速查看</h2>
                            <p class="self-end font-black text-6xl xl:text-7xl text-gray-300"><svg class="h-12 w-12 text-slate-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="4"  stroke-linecap="round"  stroke-linejoin="round">  <line x1="12" y1="5" x2="12" y2="19" />  <polyline points="19 12 12 19 5 12" /></svg></p>
                        </div>

                </div>
            </div>

            <div class="right h-screen sm:h-full md:h-2/3 lg:w-1/2 w-full flex items-center text-slate-300   ">
                <div class="w-full h-2/3 bg-slate-600 rounded-xl bg-opacity-50 p-4">
                    <div class="w-full h-1/6 text-md m-4">
                        <h2 class="text-4xl">最新紀錄</h2>
                        <p>共 {{ events }} 筆資料, 最後更新於: YYYY/MM/DD HH:MM:SS</p>
                    </div>
                    
                    <div class="w-full h-5/6">
                        <div class="w-full h-5/6 overflow-y-auto">
                            <div v-for="item in res" :key="item.timestamp" class="w-full h-1/6 p-2 flex flex-row justify-between items-center bg-opacity-25 border-b-2 border-slate-500 rounded-md duration-150 hover:text-white hover:translate-x-2" :class="item.color">
                                <div class="w-1/6">{{ item.timestamp }}</div>
                                <div class="w-1/6">{{ item.cameraId }}</div>
                                <div class="w-1/3">{{ item.violationType }}</div>
                                <div class="w-1/6">{{ item.level }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script setup>

    const msg = ref('')
    const events = ref(0)
    const criticals = ref(0)
    const warns = ref(0)

    // followings value will automatically set
    //const event_num = ref('0')
    const criticals_num = ref('0')
    const warns_num = ref('0')
    const events_num = ref('0')
    // mock data
    /*
        level: 0 - normal, 1 - warning, 2 - critical
    */
    const res = ref([
        {
            "timestamp": "2024-08-08T07:34:17.320Z",
            "cameraId": "01機房左側",
            "violationType": "進食",
            "ruleId": "201"
        },
        {
            "timestamp": "2024-08-09T07:34:17.320Z",
            "cameraId": "01機房左側",
            "violationType": "私人設備拍攝行為",
            "ruleId": "202"
        },{
            "timestamp": "2024-08-10T07:34:17.320Z",
            "cameraId": "01機房左側",
            "violationType": "機櫃門開啟",
            "ruleId": "101"
        },{
            "timestamp": "2024-08-10T07:34:17.320Z",
            "cameraId": "01機房左側",
            "violationType": "人員進入機房",
            "ruleId": "001"
        },{
            "timestamp": "2024-08-08T07:34:17.320Z",
            "cameraId": "01機房左側",
            "violationType": "進食",
            "ruleId": "201"
        },
        {
            "timestamp": "2024-08-09T07:34:17.320Z",
            "cameraId": "01機房左側",
            "violationType": "私人設備拍攝行為",
            "ruleId": "202"
        },{
            "timestamp": "2024-08-10T07:34:17.320Z",
            "cameraId": "01機房左側",
            "violationType": "機櫃門開啟",
            "ruleId": "101"
        },{
            "timestamp": "2024-08-10T07:34:17.320Z",
            "cameraId": "01機房左側",
            "violationType": "人員進入機房",
            "ruleId": "001"
        }
    ])

    res.value.forEach((item) => {
        if(item.ruleId > 200){
            criticals.value++
        }else if(item.ruleId > 100){
            warns.value++
        }
        events.value++

        //parse timestamp
        item.timestamp = new Date(item.timestamp).toLocaleString()

        //color
        if(item.ruleId > 200){
            item.color = 'bg-red-500'
            item.level = '嚴重'
        }
        else if(item.ruleId > 100){
            item.color = 'bg-yellow-500'
            item.level = '警告'
        }
        else{
            item.color = 'bg-gray-500'
            item.level = '一般'
        }

    })

    // set message
    events_num.value = events.value
    if(events.value>99)
        events_num.value = '99+' 

    if(criticals.value>0 || warns.value>0) {
        if(criticals.value){
            criticals_num.value = criticals.value
            msg.value = '目前有 ' + criticals.value + ' 筆嚴重違規紀錄,'
            // avoid of overflow
            if(criticals.value > 99)
                criticals_num.value = '99+'
        }
        if(warns.value){
            warns_num.value = warns.value
            msg.value += '目前有 ' + warns.value + ' 筆警告紀錄,'
            // avoid of overflow
            if(warns.value > 99)
                warns_num.value = '99+'
        }
        msg.value += '請查看!'
    }else if(criticals.value==0 && warns.value==0){
        msg.value = '目前沒有新的違規紀錄！'
    }else{
        msg.value = '錯誤！'
        criticals_num.value = 'Error'
        warns_num.value = 'Error'
        events_num.value = 'Error'
    }

    function scrollToBottom(){
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })
    }

</script>