<template>
    <div class="relative w-screen h-screen px-10 lg:px-20 xl:px-40">
        <div class="root w-screen h-screen fixed z-[-1]"/>
        <div class="relative w-full flex flex-col justify-center h-screen bg-gradient-to-t from-[#00000080] to-transparent ">
            <div class="mt-[20vh] my-4">
                <div class="my-4">
                    <nuxt-link to="/violations" class="text-white border-2 p-2 rounded-lg text-xl">
                        &lt; 返回總覽
                    </nuxt-link>
                </div>

                <div class="text-slate-200">
                    <h2 class="text-6xl font-black my-2">{{ title }}</h2>
                    <h4 class="text-2xl">顯示區間: {{ start_local }} ~ {{ end_local }}</h4>
                </div>

                <div class="w-full bg-slate-400 bg-opacity-40 flex text-white justify-center items-center my-4 p-4 rounded-md text-center text-xl">
                    <label for="StartDate" class="w-1/5">開始時間</label>
                    <Datepicker v-model="StartDate" class="w-1/5" required/>
                    <label for="EndDate" class="w-1/5">結束時間</label>
                    <Datepicker v-model="EndDate" class="w-1/5" required />
                    <button @click="getEvents" class="w-16 bg-blue-300 hover:bg-blue-600 mx-12 p-2 rounded-md">查詢</button>
                </div>
            </div>
        </div>

        <main class="sticky top-10 z-10 text-white -mt-32 h-auto w-full flex justify-center items-center">
                <div class="loader" v-if="loading"></div>
                <div class="w-full overflow-y-auto bg-black" v-if="!loading">
                            <div v-for="item in res" :key="item.timestamp" class="w-full h-1/3 p-2 flex flex-row justify-between items-center bg-opacity-25 border-b-2 border-slate-500 rounded-md duration-150 hover:text-white" :class="item.color">
                                <div class="w-1/6">{{ item.timestamp }}</div>
                                <div class="w-1/6">{{ item.cameraId }}</div>
                                <div class="w-1/3">{{ item.violationType }}</div>
                                <div class="w-1/6">{{ item.level }}</div>
                            </div>
                        </div>
        </main>
    </div>
</template>
<script setup lang="ts">
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';
    
    //loader
    const loading = ref(true)

    // query & params
    const route = useRoute()
    const list = ref(route.params.list)
    const eventID = ref(route.query.id)
    const msg = ref('')
    const title = ref('違規紀錄總覽')

    // datepicker default value
    const EndDate = ref(new Date())
    // a week ago
    const StartDate = ref(new Date(new Date().setDate(new Date().getDate() - 7)))

    // RFC3339 (local timezone)
    const start = ref(StartDate.value.toISOString())
    const end = ref(EndDate.value.toISOString())

    const start_local = ref(StartDate.value.toLocaleString())
    const end_local = ref(EndDate.value.toLocaleString())

    if(eventID.value === undefined){
        msg.value = 'eventID is undefined'
    }else{
        msg.value = 'eventID is ' + eventID.value
    }
    switch(list.value){

        case 'criticals':
            title.value = '嚴重違規紀錄'
            break
        case 'warns':
            title.value = '警告違規紀錄'
            break
        case 'all':
        default:
            title.value = '違規紀錄'
            list.value = 'all' //overwrite the list value
            break
    }

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


    function getEvents(){
        // transform date format to RFC3339
        start.value = StartDate.value.toISOString()
        end.value = EndDate.value.toISOString()
        console.log(start)
        console.log(end)
    }

    onMounted(()=>{
        //wait 3 seconds to simulate loading
        setTimeout(()=>{
            loading.value = false
        }, 3000)
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

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.dp__main{
    width: auto;
}
</style>