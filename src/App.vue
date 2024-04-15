<template>
  <div>
    <Navbar :links="links" @open="openModal" />
    <Main />
    <Transition name="modal">
      <Modal v-if="modalVal" @Close="CloseModal" />
    </Transition>
    <button class="arrow__btn">
      <img src="@/assets/img/arrow.svg" alt="">
    </button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import Main from "./components/Main.vue";
import Modal from "./components/Modal.vue";

const links = ['Преимущества', 'Услуги', 'Виджет', 'Кому', 'Тарифы', 'Блог']

const modalVal = ref(false)

const openModal = () => {
  modalVal.value = !modalVal.value
}
const CloseModal = () => {
  modalVal.value = false
}

</script>

