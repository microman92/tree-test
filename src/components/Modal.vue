<template>
    <div class="modal">
        <button class="close" @click="modalClose">
            <img src="@/assets/img/close.svg" alt="">
        </button>

        <h3 class="modal__title">Контактная информация</h3>
        <div class="modal__addres">
            <div class="modal__addres_img">
                <img src="@/assets/img/loc.svg" alt="">
                <span>Наш офис</span>
            </div>
            <h4 class="modal__addres_title">Санкт-Петербург, ул. Такая-то, д. 1</h4>
            <a href="#!">Показать на карте</a>
        </div>
        <div class="modal__contacts">
            <div class="modal__contacts-left">
                <p class="modal__contacts-left_text">Звоните: <span>+7 (495) 123-45-67</span></p>
                <p class="modal__contacts-left_text">Пишите: <span>info@test.ru</span></p>
            </div>
            <div class="modal__contacts_btn">Заказать звонок</div>
        </div>
        <div class="modal__workhour">
            <div class="modal__workhour_img">
                <img src="@/assets/img/work.svg" alt="">
                <span>Режим работы: </span>
            </div>
            <h4 class="modal__workhour_title">Пн-Пт — с 10:00 до 18:00
                <span>Сб-Вс — выходной</span>
            </h4>
        </div>
        <div class="modal__socials">
            <span>Мы в соцсетях</span>
            <div class="modal__socials_icons">

                <a href="#!" class="modal__socials_icons-img">
                    <img src="@/assets/img/telegram.svg" alt="">
                </a>

                <a href="#!" class="modal__socials_icons-img">
                    <img src="@/assets/img/vk.svg" alt="">
                </a>

                <a href="#!" class="modal__socials_icons-img">
                    <img src="@/assets/img/yandex.svg" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    modalVal: Boolean
})
const emit = defineEmits(['Close'])

const modalClose = () => {
    emit('Close')
}

</script>

