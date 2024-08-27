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

<button type="button" id="modal-btn" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-basic-modal" data-hs-overlay="#hs-basic-modal"/>


<div id="hs-basic-modal" class="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-basic-modal-label">
  <div class="w-[90vw] lg:w-[60vw] m-3 sm:mx-auto">
    <div class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
      <div class="flex justify-between items-center py-3 px-4 border-b">
        <h3 id="hs-basic-modal-label" class="font-bold text-gray-800">
          #{{ shown_event_id }}-{{ shown_event_type }} 
        </h3>
        <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none" aria-label="Close" data-hs-overlay="#hs-basic-modal">
          <span class="sr-only">Close</span>
          <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>
      <div class="p-4 overflow-y-auto">
        <nuxt-img class="w-full max-w-[40vw] m-2" v-bind:src="'data:image/jpeg;base64,'+shown_event_photo" v-if="shown_event_photo!='NA'" />
        <nuxt-img class="w-full max-w-[40vw] m-2"  src="mqtt.jpg" v-else/>
        <p class="mt-1 text-gray-800">
          時間：{{ shown_event_time }}
        </p>
        <p class="mt-1 text-gray-800">
          相機：{{ shown_event_camera }}
          </p>
      </div>
      <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
        <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none" data-hs-overlay="#hs-basic-modal">
          Close
        </button>
        
      </div>
    </div>
  </div>
</div>

        <client-only>
            <main class="w-full flex flex-wrap justify-center items-center  border-yellow-600">
                <div class="left h-screen sm:h-2/3 lg:h-full lg:w-1/2 w-full flex flex-col text-white lg:justify-between border-blue-600">
                    <div class="w-full mt-16 sm:mt-40 mb-20">
                        <h1 class="text-6xl m-1">系統總覽</h1>
                        <p class="text-2xl m-1">
                            {{ msg }}
                        </p>
                        <button type="button" class="px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-scale-animation-modal" data-hs-overlay="#hs-scale-animation-modal"
                        v-if="errorModal" id="error-btn">
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
    
                <div class="right h-screen lg:w-1/2 w-full flex items-center text-slate-300 border-red-300  ">
                    <div class="w-full h-2/3 bg-slate-700 rounded-xl bg-opacity-50 p-4">
                        <div class="w-full h-full flex flex-col justify-center items-center border-blue-300">
                            <h2 class="text-4xl m-4">最新紀錄</h2>
            
                            <div class="w-full h-5/6 mt-4 overflow-y-scroll flex flex-col items-center ">
                                
                                <div class="w-full">
                                <!-- Item -->
                                <div class="flex gap-x-3 hover:animate-pulse hover:text-white" @click="refresh()">
                                    <!-- Left Content -->
                                    <div class="w-16 text-end"/>
                                        
                                    <!-- End Left Content -->
                                    <!-- Icon -->
                                    <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                                        <div class="relative z-10 size-7 flex justify-center items-center">
                                            <div class="size-2 rounded-full bg-blue-400"></div>
                                            </div>
                                        </div>
                                        <!-- End Icon -->

                                        <!-- Right Content -->
                                    <div class="grow pt-0.5 pb-8">
                                        <h3 class="flex gap-x-1.5 font-semibold text-slate-400">
                                            上次更新：{{ last_update }}
                                        </h3>
                                        <p class="mt-1 text-sm text-slate-400">
                                            {{ lu_text }}
                                        </p>
                                    </div>
                                    <!-- End Right Content -->
                                </div>
                            <!-- End Item -->
                            <div class="flex gap-x-3 animate-pulse rounded-lg" v-if="loading">
                                <!-- Left Content -->
                                    <div class="w-16 text-end"/>
                                        
                                    <!-- End Left Content -->
                                    <!-- Icon -->
                                    <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px]">
                                        <div class="relative z-10 size-7 flex justify-center items-center">
                                            <div class="size-2 rounded-full bg-blue-400 animate-ping"></div>
                                            </div>
                                        </div>
                                        <!-- End Icon -->

                                        <!-- Right Content -->
                                    <div class="grow pt-0.5 pb-8">
                                        <h3 class="flex gap-x-1.5 font-semibold text-slate-400">
                                            更新中...
                                        </h3>
                                    </div>
                                    <!-- End Right Content -->

                            </div>
                                <div class="flex gap-x-3 rounded-lg" v-if="nodata">
                                    <!-- Left Content -->
                                    <div class="w-16 text-end"/>
                                        
                                    <!-- End Left Content -->
                                    <!-- Icon -->
                                    <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px]">
                                        <div class="relative z-10 size-7 flex justify-center items-center">
                                            <div class="size-2 rounded-full bg-slate-500"></div>
                                            </div>
                                        </div>
                                        <!-- End Icon -->

                                        <!-- Right Content -->
                                    <div class="grow pt-0.5 pb-8">
                                        <h3 class="flex gap-x-1.5 font-semibold text-slate-400">
                                            目前沒有新事件
                                        </h3>
                                    </div>
                                    <!-- End Right Content -->
                                    </div>
                            </div>
                                <div v-for="item in res" :key="item.timestamp" class="w-full" @click="showDetail(item)">
                                    <!-- Item -->
                                <div class="flex gap-x-3 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg">
                                    <!-- Left Content -->
                                    <div class="w-16 text-end">
                                        <span class="text-xs text-slate-400">{{ new Date(item.timestamp).toLocaleTimeString('zh-TW') }}</span>
                                    </div>
                                    <!-- End Left Content -->
                                    <!-- Icon -->
                                    <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                                        <div class="relative z-10 size-7 flex justify-center items-center">
                                            <div class="size-2 rounded-full" :class="item.color"></div>
                                            </div>
                                        </div>
                                        <!-- End Icon -->

                                        <!-- Right Content -->
                                    <div class="grow pt-0.5 pb-8">
                                        <h3 class="flex gap-x-1.5 font-semibold text-white text-xl">
                                            <!--critical icon-->
                                            <div v-if="item.level == 4">
                                                <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />  
                                                    <line x1="15" y1="9" x2="9" y2="15" /> 
                                                    <line x1="9" y1="9" x2="15" y2="15"/>
                                                </svg>
                                            </div>

                                            <!--warning icon-->
                                            <div v-if="item.level == 2">
                                                <svg class="h-8 w-8 text-yellow-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                                                </svg>
                                            </div>

                                            <!--info icon-->
                                            <div v-if="item.level == 1">
                                                <svg class="h-8 w-8 text-slate-200"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" >  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="16" x2="12" y2="12" />  <line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                                            </div>
                                            #{{ (item._id).slice(-6) }}-{{ item.violationType }}
                                        </h3>
                                        <p class="mt-1 text-sm text-white flex items-center">
                                            <svg class="h-6 w-6 m-1 text-gray-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />  <circle cx="12" cy="10" r="3" /></svg>
                                            {{ item.cameraId }}
                                        </p>
                                    </div>
                                    <!-- End Right Content -->
                                </div>
                            <!-- End Item -->
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
    import { set } from '@vueuse/core';

    const shown_event_id = ref('')
    const shown_event_photo = ref('')
    const shown_event_time = ref('')
    const shown_event_camera = ref('')
    const shown_event_type = ref('')

    const errorModal = ref(false)
    const errorModalTitle = ref('Error')
    const errorModalMsg = ref('')

    const config = useRuntimeConfig()
    const api_url = config.public.backend_url+'violation-statistics'

    //get today 0~now
    //const today = new Date('2024-08-26')
    const today = new Date()
    today.setHours(8,0,0,0)
    const tomorrow = new Date()
    tomorrow.setHours(8,0,0,0)
    tomorrow.setDate(tomorrow.getDate()+1)

    const reqUrl = api_url + '?startTime=' + today.toISOString() + '&endTime=' + tomorrow.toISOString()

    const msg = ref('連線中...')
    const events = ref(0)
    const criticals = ref(0)
    const warns = ref(0)

    // followings value will automatically set
    //const event_num = ref('0')
    const criticals_num = ref('0')
    const warns_num = ref('0')
    const events_num = ref('0')
    const last_update = ref('更新中...')
    const lu_text = ref('請稍後...')
    
    // request objects
    const res = ref([])
    const loading = ref(true)
    const nodata = ref(false)
    
    // request function
    async function fetchData(){
        // reset value
        loading.value = true
        res.value = []
        events.value = 0
        criticals.value = 0
        warns.value = 0
        last_update.value = '更新中...'
        lu_text.value = '請稍後...'

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
                    throw new Error()
                }
                return res
            })
            last_update.value = new Date().toLocaleString('zh-TW')
            lu_text.value = '資料整理中...'

            const data = await response.json()
            res.value = data.violations
            //sort by timestamp
            if(res.value.length>0)
                res.value.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)
            else{
                loading.value = false
                nodata.value = true
                lu_text.value = '更新完畢, 點我再次更新'
                msg.value = '今日到目前為止沒有新的違規紀錄！'
                return
            }

        }catch(e){
            //select error-btn
            document.getElementById('error-btn').click()
            msg.value = '請確認後端伺服器運作正常！, 點更多可查看錯誤訊息'
            criticals_num.value = ':('
            warns_num.value = ':('
            events_num.value = ':('
            errorModal.value = true
            loading.value = false
            return
        }
        
        for(let i=0; i<res.value.length; i++){
            if(res.value[i].ruleId == 404){
                res.value[i].color = 'border-yellow-500 bg-yellow-500'
                warns.value++
                res.value[i].level = 2
            }else if(res.value[i].ruleId >= 200){
                res.value[i].color = 'border-red-500 bg-red-500'
                criticals.value++
                res.value[i].level = 4
            }else if(res.value[i].ruleId >= 100){
                res.value[i].color = 'border-yellow-500 bg-yellow-500'
                warns.value++
                res.value[i].level = 2
            }else{
                res.value[i].color = 'bg-gray-500'
                res.value[i].level = 1
            }
        }

        events.value = res.value.length
        lu_text.value = '共有 ' + events.value + ' 筆資料, 點我可以再次更新'

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
            msg.value = '今日到目前為止沒有新的違規紀錄！'
        }else{
            msg.value = '錯誤！'
            criticals_num.value = 'Error'
            warns_num.value = 'Error'
            events_num.value = 'Error'
        }
        loading.value = false
    }
    

    function scrollToBottom(){
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })
    }
    async function refresh(){
        loading.value = true
        nodata.value = false
        await fetchData()
    }

    function showDetail(item){
        //select offcanvas button
        const offcanvas = document.getElementById('modal-btn')
        if(offcanvas === null){
            console.log('offcanvas button not found')
            return
        }

        //set offcanvas data
        //get last 6 characters of the id
        shown_event_id.value = (item._id).slice(-6)
        
        shown_event_photo.value = item.photo
        
        //transform date format to local
        shown_event_time.value = new Date(item.timestamp).toLocaleString()
        shown_event_camera.value = item.cameraId
        shown_event_type.value = item.violationType


        offcanvas.click()
        console.log(item)
    }

    //fetch when onMounted
    onMounted(async () => {
        // reset value
        criticals_num.value = '0'
        warns_num.value = '0'
        events_num.value = '0'
        
        await fetchData()

        //set interval to fetch data every 5 minutes
        setInterval(async () => {
            await fetchData()
        }, 300000)

    })

</script>

<style scoped>
.loader {
    border: 0.5rem solid #f3f3f3; /* Light grey */
    border-top: 0.5rem solid #555; /* Blue */
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
    animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
</style>