<template>
    <div class="w-screen lg:h-screen flex justify-center items-center bg-gradient-to-tr from-gray-950 from-30% via-blue-950 via-95% to-sky-950 to-100% px-5 lg:px-20 xl:px-40 pt-16 text-white">
        <!--Error Modal-->
        <div id="hs-scale-animation-modal" class="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-scale-animation-modal-label">
            <div class="hs-overlay-animation-target hs-overlay-open:scale-100 hs-overlay-open:opacity-100 scale-95 opacity-0 ease-in-out transition-all duration-200 sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
                <div class="w-full flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
                    <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                        <h3 id="hs-scale-animation-modal-label" class="font-bold text-gray-800 dark:text-white">
                            {{ errorModalTitle }}
                        </h3>
                        <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-scale-animation-modal">
                            <span class="sr-only">關閉</span>
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18"></path>
                                <path d="m6 6 12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="p-4 overflow-y-auto">
                        <p class="mt-1 text-gray-800 dark:text-neutral-400">
                            {{ errorModalMsg }}
        </p>
      </div>
      <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" data-hs-overlay="#hs-scale-animation-modal">
          關閉
        </button>
      </div>
    </div>
  </div>
</div>

        <client-only>
            <main class="w-full flex flex-wrap justify-center items-center  border-yellow-600">
                <div class="left h-screen sm:h-2/3 lg:h-full lg:w-1/2 w-full flex flex-col text-white lg:justify-between   border-blue-600">
                    <div class="w-full mt-16 sm:mt-40 mb-20">
                        <h1 class="text-6xl m-1">系統總覽</h1>
                        <p class="text-2xl m-1">
                            {{ msg }}
                        </p>
                        <button type="button" class="px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-scale-animation-modal" data-hs-overlay="#hs-scale-animation-modal"
                        v-if="errorModal">
            顯示更多資訊>
        </button>
                    </div>
    
                    <div class="flex flex-row flex-wrap justify-end lg:justify-start">
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
    
                <div class="right h-screen lg:h-full lg:w-1/2 w-full flex items-center text-slate-300   ">
                    <div class="w-full h-2/3 bg-slate-600 rounded-xl bg-opacity-50 p-4">
                        <div class="w-full h-1/6 text-md m-4">
                            <h2 class="text-4xl">最新紀錄</h2>
                            <p>共 {{ events }} 筆資料, 最後更新於: {{ last_update }}</p>
                        </div>
                        
                        <div class="w-full h-5/6">
                            <div class="w-full h-5/6 overflow-y-auto">
                                <div v-for="item in res" :key="item.timestamp" class="w-full h-1/6 p-2 flex flex-row justify-between items-center bg-opacity-25 border-b-2 border-slate-500 rounded-md duration-150 hover:text-white hover:translate-x-2" :class="item.color">
                                    <div class="w-1/6">{{ item.timestamp }}</div>
                                    <div class="w-1/6">{{ item.cameraId }}</div>
                                    <div class="w-1/3">{{ item.violationType }}</div>
                                    <div class="w-1/6">{{ item.level }}</div>
                                    <nuxt-img v-bind:src="'data:image/jpeg;base64,'+item.photo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </client-only>
    </div>
</template>

<script setup>

    const errorModal = ref(false)
    const errorModalTitle = ref('Error')
    const errorModalMsg = ref('')

    const config = useRuntimeConfig()
    const api_url = config.public.backend_url+'violation-statistics'

    //get today set to 2024-08-01 00:00:00
    const today = new Date('2024-08-01')
    today.setHours(0,0,0,0)
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate()+1)
    tomorrow.setHours(0,0,0,0)

    const reqUrl = api_url + '?startTime=' + today.toISOString() + '&endTime=' + tomorrow.toISOString()

    const msg = ref('')
    const events = ref(0)
    const criticals = ref(0)
    const warns = ref(0)

    // followings value will automatically set
    //const event_num = ref('0')
    const criticals_num = ref('0')
    const warns_num = ref('0')
    const events_num = ref('0')
    const last_update = ref('')
    
    // request objects
    const res = ref([])
    const loading = ref(true)
    
    // request function
    async function fetchData(){
        // reset value
        loading.value = true
        res.value = []
        events.value = 0
        criticals.value = 0
        warns.value = 0

        // send request, when failed, dump console message to modal
        try{
            const response = await fetch(reqUrl).then(res => {
                console.log(res)
                //refused to connect
                if(res==null){
                    errorModalTitle.value = "HTTP 請求失敗"
                    errorModalMsg.value = "伺服器拒絕連線、或網路錯誤造成請求無法送出"
                    throw new Error(res)
                }
                else if(!res.ok){
                    console.log(res)
                    errorModalTitle.value = "HTTP Error: " + res.status+" 請求失敗"
                    errorModalMsg.value = "Error message: " + res.statusText
                    throw new Error(res)
                }
                return res
            })
            const data = await response.json()
            res.value = data.violations
        }catch(e){
            msg.value = 'ㄜ...請確認後端伺服器運作正常！, 點更多可查看錯誤訊息'
            criticals_num.value = ':('
            warns_num.value = ':('
            events_num.value = ':('
            errorModal.value = true
            loading.value = false
            return
        }
        
        for(let i=0; i<res.value.length; i++){
            if(res.value[i].ruleId >= 200){
                res.value[i].color = 'bg-red-500'
                criticals.value++
            }else if(res.value[i].ruleId >= 100){
                res.value[i].color = 'bg-yellow-500'
                warns.value++
            }else{
                res.value[i].color = 'bg-gray-500'
            }
        }

        events.value = res.value.length
        // set message
        events_num.value = res.value.length

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
    
        loading.value = false
        last_update.value = new Date().toLocaleString()
    }
    

    function scrollToBottom(){
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })
    }
    
    //await fetchData()

    //fetch when onMounted
    

    onMounted(async () => {
        //console.log('updated log')
        criticals_num.value = '0'
        warns_num.value = '0'
        events_num.value = '0'
        // update last update time
        await fetchData()
    })

</script>