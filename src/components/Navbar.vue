<template>
    <nav class="nav">
        <a href="" class="logo">
            <img src="@/assets/img/logo.svg" alt="Логотип">
        </a>
        <ul class="nav__list">
            <li class="nav__list_link" v-for="link in links" :key="link"><a href="">{{ link }}</a></li>
        </ul>

        <div class="nav__right">
            <span class="nav__right_lang">En</span>
            <div class="nav__right_contact">
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
                <button @click="modalOpen">
                    Контакты
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
    links: Array,
    modal: Boolean
})

const emit = defineEmits(['open'])



const modalOpen = () => {
    emit('open')
}



</script>

