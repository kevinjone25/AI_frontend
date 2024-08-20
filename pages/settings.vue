<template>
    <div class="w-screen h-screen flex justify-center items-center bg-gradient-to-tr from-gray-950  from-30% via-blue-950 via-95% to-sky-950 to-100% px-5 lg:px-20 xl:px-40 pt-16 text-white">
        <div class="grid grid-cols-6 grid-rows-12 w-full h-full border border-white mt-16">
            <header class="col-span-6 row-span-2 w-full h-full border border-green-400 flex flex-col justify-end items-end sm:items-start sm:py-4">
                <div class="flex flex-col sm:flex-row items-end">
                    <NuxtLink to="/settings/info">
                        <h1 class="text-6xl sm:text-6xl font-bold">
                        系統設定
                        </h1>
                    </NuxtLink>
                    <h2 class="hidden sm:block text-3xl">/{{ pageName }}</h2>
                    <div class="sm:hidden flex items-end m-2 text-xl">
                        <label for="pageSelect">選擇頁面：</label>
                        <select name="pageSelect" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 block xl:hidden" @change="pushRoute($event)">
                            <option v-for="list in lists" :value="list.path">{{ list.name }}</option>
                        </select>
                    </div>
                </div>
                
            </header>
            <aside class="row-span-10 row-start-3 hidden sm:flex w-full h-full  flex-col border">
                <div v-for="list in lists" :key="list.name">
                    <nuxt-link :to="list.path" class="text-3xl text-white">{{ list.name }}</nuxt-link>
                </div>
            </aside>
            <main class="col-span-6 sm:col-span-5 row-span-10 row-start-3 w-full h-full border border-blue-500">
                <NuxtLayout>
                    <NuxtPage />
                </NuxtLayout>
            </main>
        </div>
    </div>
</template>


    
<script setup>
    const router = useRouter()
    const pageName = ref('首頁(系統狀態)')
    //push to /settings/info
    
    const pushToInfo = () => {
        router.push('/settings/info')
    }

    function pushRoute(event){
        //push to selected route
        router.push(event.target.value)


    }

    function pageNameChanger(){
        switch (router.currentRoute.value.path) {
            case '/settings/info':
                pageName.value = '首頁(系統狀態)'
                break
            case '/settings/access':
                pageName.value = '權限設置'
                break
            case '/settings/overwrite':
                pageName.value = '警告覆寫'
                break
            case '/settings/notification':
                pageName.value = '通知設定'
                break
            case '/settings/log':
                pageName.value = '系統日誌'
                break
        }
    }


    const lists = ref([
        { name: '系統狀態', path: '/settings/info' },
        { name: '權限設置', path: '/settings/access' },
        { name: '警告覆寫', path: '/settings/overwrite'},
        { name: '通知設定', path: '/settings/notification'},
        { name: '系統日誌', path: '/settings/log'}
        ])

    onMounted(() => {
        //if path is /settings, push to /settings/info
        if (router.currentRoute.value.path === '/settings' || router.currentRoute.value.path === '/settings/')
            pushToInfo()

        pageNameChanger()
        
        })

    onUpdated(() => {
        pageNameChanger()
        
        })
    

</script>

