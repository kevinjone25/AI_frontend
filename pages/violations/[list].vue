<template>
    <div class="relative w-screen h-screen px-2 lg:px-20 xl:px-40">
        <div class="root w-screen h-screen fixed z-[-1]"/>
        <div class="relative w-full flex flex-col justify-center h-screen bg-gradient-to-t from-[#00000080] to-transparent ">
            <div class="flex flex-wrap w-full border-blue-700">
                <div class="left flex flex-col flex-wrap justify-around w-full my-6 md:w-1/2 text-slate-200 backdrop-blur-sm md:backdrop-blur-0">
                    <div class="my-4">
                        <nuxt-link to="/violations" class="text-white border-2 p-2 rounded-lg text-xl" v-if="list!=='all'">
                            &lt; 返回總覽
                        </nuxt-link>
                    </div>

                    <h2 class="text-4xl md:text-6xl font-black my-2 ">違規紀錄</h2>
                        <div class="flex flex-col">
                            <h4 class="text-xl md:text-2xl">當前顯示區間： {{ start_local }} ~ {{ end_local }}, </h4>
                            <h4 class="text-xl md:text-2xl inline-flex">選擇顯示等級： <p v-if="filter[0]">一般, </p> <p v-if="filter[1]">警告, </p><p v-if="filter[2]">嚴重</p></h4>
                            <h4 class="text-xl md:text-2xl">共 {{ res.length }} 筆資料</h4>
                            <button type="button" class="md:hidden m-1 ms-0 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-bottom" data-hs-overlay="#hs-offcanvas-bottom">
                        更改時間與等級
</button>
                        </div>
                

                </div>
                <div class="right hidden md:block w-full md:w-1/2">
                    <div class="w-full bg-slate-700 bg-opacity-40 flex flex-col flex-wrap text-white justify-center items-center my-4 p-4 rounded-md text-center text-xl backdrop-blur-md rounded-md">
                        <h2 class="text-3xl m-4"> 過濾器及時間區間設定</h2>
                    <!-- Select level -->
                    <div class="w-full m-2 flex flex-row items-center h-full selection">
                        <label for="select" class="w-1/5">顯示等級</label>
                        <select multiple data-hs-select='{
                            "placeholder": "選擇顯示等級",
                            "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                            "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 ps-4 pe-9 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-200 dark:text-neutral-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600",
                            "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-2 border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                            "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span  data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-blue-600 dark:text-blue-500 \" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                            "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"shrink-0 size-3.5 text-gray-500 dark:text-neutral-500 \" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
                        }' class="w-4/5 hidden hs-select" @change="selectorHandler($event)" v-model="selectedValue">
                            <option value="4">嚴重</option>
                            <option value="2">警告</option>
                            <option value="1">一般</option>
                        </select>
                        <!-- End Select -->
                    </div>
                    <!--DatePicker-->
                    <div class="flex items-center justify-around w-full m-2">
                            <label for="StartDate" class="w-1/5">開始時間</label>
                            <Datepicker v-model="StartDate" class="rounded-lg" required/>
                        </div>
                        <div class="flex items-center justify-around w-full m-2">
                            <label for="EndDate" class="w-1/5">結束時間</label>
                            <Datepicker v-model="EndDate" class="rounded-lg" required />
                        </div>
                    
                    <button @click="getEvents()" class="w-16 bg-[#005cb2] hover:bg-blue-600 m-4 p-2 rounded-md self-end">
                        查詢
                    </button>
                </div>
                </div>
                <div id="hs-offcanvas-bottom" class="hs-overlay h-[50vh] hs-overlay-open:translate-y-0 translate-y-full fixed bottom-0 inset-x-0 transition-all duration-300 transform size-full z-[80] bg-white border-b dark:bg-neutral-800 dark:border-neutral-700 hidden" role="dialog" tabindex="-1" aria-labelledby="hs-offcanvas-bottom-label">
                    <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                        <h3 id="hs-offcanvas-bottom-label" class="font-bold text-gray-800 dark:text-white">
      過濾器及時間區間設定
    </h3>
    <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-offcanvas-bottom" id="selector-offcanvas-btn">
      <span class="sr-only">Close</span>
      <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"></path>
        <path d="m6 6 12 12"></path>
      </svg>
    </button>
  </div>
  <div class="w-full bg-opacity-40 flex flex-col flex-wrap text-white justify-center items-center my-4 p-4 rounded-md text-center text-xl backdrop-blur-md">
                        
                    <!-- Select level -->
                    <div class="w-full m-2 flex flex-row items-center h-full selection">
                        <label for="select" class="w-2/5">顯示等級</label>
                        <select multiple data-hs-select='{
                            "placeholder": "選擇顯示等級",
                            "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                            "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 ps-4 pe-9 flex gap-x-2 text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-200 dark:text-neutral-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-neutral-600",
                            "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-2 border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                            "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                            "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span  data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-blue-600 dark:text-blue-500 \" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
                            "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"shrink-0 size-3.5 text-gray-500 dark:text-neutral-500 \" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
                        }' class="w-4/5 hidden hs-select" @change="selectorHandler($event)" v-model="selectedValue">
                            <option value="4">嚴重</option>
                            <option value="2">警告</option>
                            <option value="1">一般</option>
                        </select>
                        <!-- End Select -->
                    </div>
                    <!--DatePicker-->
                    <div class="flex items-center w-full m-2">
                            <label for="StartDate" class="w-2/5">開始時間</label>
                            <Datepicker v-model="StartDate" class="rounded-lg" required/>
                        </div>
                        <div class="flex items-center w-full m-2">
                            <label for="EndDate" class="w-2/5">結束時間</label>
                            <Datepicker v-model="EndDate" class="rounded-lg" required />
                        </div>
                    
                    <button @click="getEvents()" class="w-16 bg-[#005cb2] hover:bg-blue-600 m-4 p-2 rounded-md self-end">
                        查詢
                    </button>
                </div>
</div>

            </div>
        </div>

        <main class="sticky top-10 z-10 text-white h-auto w-full -mt-32 flex justify-center items-center duration-75">
                <div class="loader" v-if="loading"></div>
                <ClientOnly>
                    <div class="w-full overflow-y-auto bg-black border-2 p-4 rounded-xl" v-if="!loading">
                        <div v-for="item in res" :key="item.timestamp">
                            <div class="w-full h-1/3 m-2 p-2 flex flex-row justify-between items-center bg-opacity-25 border-l-8 rounded-md duration-150 hover:bg-slate-500 odd:bg-slate-700" :class="item.color" @click="showDetail(item)" v-if="filter[item.level]" >
                                <div class="w-1/6">{{ new Date(item.timestamp).toLocaleString('zh-TW') }}</div>
                                <div class="w-1/6"> #{{ (item._id).slice(-6) }}</div>
                                <div class="w-1/6">{{ item.cameraId }}</div>
                                <div class="w-1/3">{{ item.violationType }}</div>
                                
                            </div>
                        </div> 
                    </div>
                </ClientOnly>
        </main>

        <!--invisible button, in order to control the offcanvas-->
        <button type="button" class="hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-offcanvas-right" data-hs-overlay="#hs-offcanvas-right" id="offcanvas_btn"/>
        <!--offcanvas-->
        <div id="hs-offcanvas-right" class="w-full md:w-[80vw] lg:w-[60vw] hs-overlay hs-overlay-open:translate-x-0 hidden translate-x-full fixed top-0 end-0 transition-all duration-300 transform h-full z-[80] bg-white border-s dark:bg-neutral-800 dark:border-neutral-700" role="dialog" tabindex="-1" aria-labelledby="hs-offcanvas-right-label">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                <h3 id="hs-offcanvas-right-label" class="font-bold text-gray-800 dark:text-white text-3xl">
                    事件紀錄 - #{{ shown_event_id }}
                </h3>
                <button type="button" class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-offcanvas-right">
                    <span class="sr-only">Close</span>
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="m-8">
                <div class="flex flex-col items-center">
                    <nuxt-img class="w-full max-w-[40vw] m-2" v-bind:src="'data:image/jpeg;base64,'+shown_event_photo" v-if="shown_event_photo!='NA'" />
                    <nuxt-img class="w-full max-w-[40vw] m-2"  src="mqtt.jpg" v-else/>
                    <!--info table-->
                    <div class="flex flex-row justify-between w-full mx-4 text-2xl text-white">
                        <table >
                        
                            <tr class="">
                                <td class="px-6 py-4">事件時間</td>
                                <td class="px-6 py-4">{{ new Date(shown_event_time).toLocaleString('zh-TW') }}</td>
                            </tr>
                            <tr class="">
                                <td class="px-6 py-4">相機編號</td>
                                <td class="px-6 py-4">{{ shown_event_camera }}</td>
                            </tr>
                            <tr class="">
                                <td class="px-6 py-4">違規類型</td>
                                <td class="px-6 py-4">{{ shown_event_type }}</td>
                            </tr>
                            
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

    import Datepicker from '@vuepic/vue-datepicker';
    import '~/assets/css/datepicker.css'

    const errorModal = ref(false)
    const errorModalTitle = ref('Error')
    const errorModalMsg = ref('')

    const config = useRuntimeConfig()
    const api_url = config.public.backend_url+'violation-statistics'
    const res = ref([])

    //get today set to 2024-08-01 00:00:00
    const defaultEnd = new Date()
    defaultEnd.setHours(8,0,0,0)
    const defaultStart = new Date()
    defaultStart.setHours(8,0,0,0)
    defaultStart.setDate(defaultEnd.getDate()-7)

    let reqUrl = api_url + '?startTime=' + defaultStart.toISOString() + '&endTime=' + defaultEnd.toISOString()

    //switchs
    const loading = ref(true)
    const modalIsOn = ref(false)
    const selectedValue=ref([])

    // query & params
    const route = useRoute()
    const list = ref(route.params.list)
    const eventID = ref(route.query.id)
    const msg = ref('')
    const title = ref('-總覽')

    // datepicker default value
    const EndDate = ref(new Date())
    // a week ago
    const StartDate = ref(new Date(new Date().setDate(new Date().getDate() - 7)))

    // RFC3339 (local timezone)
    const start = ref(StartDate.value.toISOString())
    const end = ref(EndDate.value.toISOString())

    const start_local = ref(StartDate.value.toLocaleString('zh-TW'))
    const end_local = ref(EndDate.value.toLocaleString('zh-TW'))

    // filter data
    const filter = ref([true, true, true])

    // offcanvas' data
    const shown_event_id = ref('')
    const shown_event_photo = ref('')
    const shown_event_time = ref('')
    const shown_event_camera = ref('')
    const shown_event_type = ref('')

    // if given list name, set filter
    if(list.value === 'warns'){
        selectedValue.value = [2]
        filter.value = [false, true, false]
    }else if(list.value === 'criticals'){
        selectedValue.value = [4]
        filter.value = [false, false, true]
    }else{
        selectedValue.value = [4, 2, 1]
        filter.value = [true, true, true]
    }



    // request function
    async function fetchData(){
        // reset value
        loading.value = true
        res.value = []
        start_local.value = new Date(StartDate.value).toLocaleString('zh-TW')
        end_local.value = new Date(EndDate.value).toLocaleString('zh-TW')

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

                loading.value = false
                return res
            })
            const data = await response.json()
            res.value = data.violations
            //sort by timestamp
            res.value.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1)
            

        }catch(e){
            msg.value = '請確認後端伺服器運作正常！, 點更多可查看錯誤訊息'
            errorModal.value = true
            loading.value = false
            return
        }

        for(let i=0; i<res.value.length; i++){
            //TODO: here should be replaced by the real ruleId
            if(res.value[i].ruleId == 404){
                res.value[i].color = 'border-yellow-500'
                res.value[i].level = 1
            }else if(res.value[i].ruleId >= 200){
                res.value[i].color = 'border-red-500'
                res.value[i].level = 2
            }else if(res.value[i].ruleId >= 100){
                res.value[i].color = 'border-yellow-500'
                res.value[i].level = 1
            }else{
                res.value[i].color = 'border-gray-500'
                res.value[i].level = 0
            }
        }
    }
    
    function showDetail(item){
        //select offcanvas button
        const offcanvas = document.getElementById('offcanvas_btn')
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

    //apply filter and refetch data
    async function getEvents(){
        document.getElementById('selector-offcanvas-btn').click()
        // for filter
        // get selected value
        let result = 0
        for(let i=0; i<selectedValue.value.length; i++){
            // cast to int

            result += parseInt(selectedValue.value[i])
        }
        console.log(result)
        
        //filter: 0: general 1: warning 2: severe
        //selecor: 1: general 2: warning 4: severe
        switch(result){
            case 7:
                filter.value = [true, true, true]
                break
            case 6:
                filter.value = [false, true, true]
                break
            case 5:
                filter.value = [true, false, true]
                break
            case 4:
                filter.value = [false, false, true]
                break
            case 3:
                filter.value = [true, true, false]
                break
            case 2:
                filter.value = [false, true, false]
                break
            case 1:
                filter.value = [true, false, false]
                break
            case 0:default:
                filter.value = [true, true, true]
                break
        }

        console.log(filter.value)

        // for fetching
        // transform date format to RFC3339
        // set time to current time + 8 hours
        start.value = new Date(StartDate.value.getTime() + 8*60*60*1000).toISOString()
        end.value = new Date(EndDate.value.getTime() + 8*60*60*1000).toISOString()
        loading.value = true
        reqUrl = api_url + '?startTime=' + start.value + '&endTime=' + end.value
        await fetchData()
        
    }

    function selectorHandler(event){
        console.log(selectedValue.value)
    }

    onMounted(async()=>{
        //wait 3 seconds to simulate loading
        await fetchData()
    })
</script>

<style scoped>
.root{
    background-image: url('/server.jpg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    
}

.loader {
    border: 0.5rem solid #f3f3f3; /* Light grey */
    border-top: 0.5rem solid #555; /* Blue */
    border-radius: 100%;
    width: 4rem;
    height: 4rem;
    animation: spin 1s ease-in-out infinite;
}

.dp__main{
    width: 80%;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

</style>