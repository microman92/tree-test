<template>
    <main class="main">
        <div class="main__content">
            <div class="main__content-left">
                <h1 class="main__content-left_title">Техническая поддержка сайтов, CRM систем и мобильных приложений</h1>
                <p class="main__content-left_desc">Профессиональное техническое сопровождение и обслуживание сайтов: полный
                    комплекс услуг от опытных экспертов</p>
                <button class="main__content-left_btn">
                    Подключиться
                </button>
            </div>
            <div class="main__content_right">

                <div class="main__content_right-item Analytics">
                    <div class="Analytics__block">
                        <div class="Analytics__block-left"></div>
                        <div class="Analytics__block-right"></div>
                    </div>
                    <h5 class="Analytics__title">Аналитика</h5>
                    <div class="Analytics__progress">
                        <CircleProgressBar :value="85" :max="100" :strokeWidth="7" :size="145" :colorBack="'#D9D9D9'"
                            :colorUnfilled="'#506CCF'" :animationDuration="'4s'" :rounded="true"
                            class="Analytics__progress-blue" />

                        <CircleProgressBar :value="-50" :max="100" :strokeWidth="7" :size="110" :colorBack="'#D9D9D9'"
                            :colorUnfilled="'#5DCAB2'" :animationDuration="'4s'" :rounded="true"
                            class="Analytics__progress-green" />

                    </div>
                    <div class="Analytics__bottom">
                        <div class="Analytics__bottom_item"></div>
                        <div class="Analytics__bottom_item"></div>
                    </div>

                </div>


                <div class="main__content_right-item task">
                    <h5 class="task__title">Запросы</h5>
                    <div class="square"></div>
                    <Task />
                </div>
                <div class="main__content_right-item queries">
                    <div class="queries__top">
                        <h5 class="quries__top_title"></h5>
                        <div class="quries__top_info">
                            <span>Список задач</span>

                            <div class="quries__top_info-right">
                                <span>Задачи</span>
                                <CircleProgressBar :value="50" :max="100" :strokeWidth="7" :size="50" :colorBack="'#D9D9D9'"
                                    :colorUnfilled="'#506CCF'" :animationDuration="'4s'" :rounded="true"
                                    class="quries__top_info-cicle" />
                                <img src="@/assets/img/photo.png" alt="">
                                <span>Категория</span>
                            </div>

                        </div>
                    </div>
                    <Queries />
                </div>

            </div>
        </div>
    </main>
</template>

<script setup>
import { CircleProgressBar } from 'circle-progress.vue';



</script>
