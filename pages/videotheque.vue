<template>
  <div fluid fill-height v-cloak>
    <v-row class="justify-center align-center">
      <v-col cols="12">
        <h1 class="headline mt-5 primary--text">NOTRE VIDÉOTHÈQUE</h1>
      </v-col>
    </v-row>

    <v-row class="justify-center align-center">
      <v-col cols="12">
        <h1 class="headline primary--text">Projet "En Roue Libre"</h1>
      </v-col>
    </v-row>

    <VideosList class="mb-5" :videos="playlists[0].videos || []"></VideosList>

    <v-row class="align-center my-5 d-flex justify-center">
      <v-col cols="12" md="6">
        <nuxt-link to="/blog">
          <v-btn class="ma-5" color="primary">Voir le blog</v-btn></nuxt-link
        >
      </v-col>
      <v-col cols="12" md="6">
        <v-btn
          href="https://www.youtube.com/@lechappeedescoproprietes5782"
          target="_blank"
          rel="noopener noreferrer"
          class="ma-5"
          color="primary"
          >Voir la chaine Youtube
          <v-icon class="ml-3">mdi-youtube</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="align-center d-flex justify-center">
      <v-col cols="12">
        <nuxt-link to="/">
          <v-btn class="ma-5 button" color="primary"
            >Retour à l'accueil</v-btn
          ></nuxt-link
        >
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VideosList from "~/components/VideosList.vue";
import playlistsQuery from "~/apollo/playlists.gql";
import videosQuery from "~/apollo/videos.gql";
export default {
  components: {
    VideosList,
  },
  apollo: {
    videos: {
      prefetch: true,
      query: videosQuery,
    },
    playlists: {
      prefetch: true,
      query: playlistsQuery,
    },
  },
  data() {
    return {
      articles: [],
      videos: [],
      categories: [],
      playlists: [],
    };
  },

  head() {
    return {
      title: "La Vidéothèque",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
      ],
    };
  },
};
</script>
