<template>
  <v-container fluid fill-height class="align-center d-flex justify-center">
    <v-col cols="10">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="video in videos" :key="video.id">
          <v-card height="100%" width="100%" class="ma-2">
            <div class="video-responsive">
              <iframe
                defer
                :src="yt_api + video.URL"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <v-card-title class="primary justify-center">
              <h1
                class="body-1 white--text text-decoration-underline text-truncate"
              >
                {{ video.Titre }}
              </h1>
            </v-card-title>
            <v-card-actions class="primary d-flex justify-center">
              <v-btn
                :href="youtube_api + video.URL"
                target="_blank"
                rel="noopener noreferrer"
                class="mb-5 button primary--text"
                >Voir sur youtube<v-icon color="primary" class="ml-3">{{
                  mdiYoutube
                }}</v-icon></v-btn
              >
            </v-card-actions>
          </v-card>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </v-col>
  </v-container>
</template>
<script>
import { mdiYoutube } from "@mdi/js";

export default {
  data() {
    return {
      yt_api: "https://www.youtube-nocookie.com/embed/",
      youtube_api: "https://www.youtube.com/watch?v=",
      mdiYoutube,
      swiperOption: {
        breakpoints: {
          1500: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 90,
          },
          768: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 1,
          },
          430: {
            slidesPerView: 1,
          },
          300: {
            slidesPerView: 1,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  props: {
    videos: Array,
    playlists: Array,
  },
};
</script>
