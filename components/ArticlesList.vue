<template>
  <v-container fluid fill-height class="align-center d-flex justify-center">
    <v-col cols="10">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="article in articles" :key="article.id">
          <v-card
            class="ma-5 card-article"
            color="#fafaa5"
            height="100%"
            width="100%"
          >
            <div class="primary">
              <v-list-item dark>
                <v-list-item-avatar>
                  <v-img :src="api_url + article.Avatar[0].url">
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="title text-justify">
                    {{ article.Titre }}
                  </v-list-item-title>
                  <v-list-item-subtitle class="text-justify body-1"
                    >par {{ article.Auteur }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </div>
            <nuxt-link :to="`/blog/articles/${article.id}`">
              <v-img
                contain
                nuxt-link
                :to="`/blog/articles/${article.id}`"
                :src="api_url + article.Media_contenu[0].url"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </nuxt-link>
            <div>
              <v-card-text class="body-1 text-left text-truncate pa-1">
                {{ article.Description }}
              </v-card-text>
              <v-card-text class="body-1 text-justify">
                Publié le
                {{ moment(article.Publication).locale("fr").format("LL") }}
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn
                  nuxt-link
                  :to="`/blog/articles/${article.id}`"
                  class="ma-5 button"
                  color="primary"
                  >Lire l'article</v-btn
                >
              </v-card-actions>
            </div>
          </v-card></swiper-slide
        >
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </v-col>
  </v-container>
</template>
<script>
import articlesQuery from "~/apollo/articles.gql";
var moment = require("moment");
export default {
  data() {
    return {
      api_url: "https://echappee-copro.fr",
      articles: [],
      moment: moment,
      swiperOption: {
        breakpoints: {
          1500: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
          1300: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 90,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 90,
          },
          600: {
            slidesPerView: 1,
            spaceBetween: 90,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 90,
          },
          430: {
            slidesPerView: 1,
            spaceBetween: 90,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 90,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
    },
  },
};
</script>
