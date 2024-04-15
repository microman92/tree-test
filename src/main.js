import {
    createApp
} from 'vue'
import App from './App.vue'

import "@/assets/styles/style.scss";
import Task from "@/components/Task.vue";
import Queries from "@/components/Queries.vue";


const app = createApp(App)

app.component('Task', Task)
app.component('Queries', Queries)

    .mount('#app')