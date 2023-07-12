
<template>
  <v-container fill-height fluid class="justify-center align-center">
    <v-row class="align-center">
      <v-col cols="12">
        <h1 class="headline primary--text titre">
          {{ articles[0].Titre }}
        </h1>
      </v-col>
    </v-row>
    <v-col cols="12" md="8" sm="10">
      <v-row class="align-center mb-3">
        <v-avatar>
          <v-img :src="api_url + articles[$route.params.id - 1].Avatar[0].url">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-avatar>
        <h3 class="primary--text ml-2 title">
          {{ articles[$route.params.id - 1].Auteur }}
        </h3>
      </v-row>

      <v-row class="justify-center">
        <p class="text-left body-1">
          {{ articles[$route.params.id - 1].Description }}
        </p>
      </v-row>
      <v-row class="my-5 d-flex justify-center">
        <v-col cols="8">
          <v-img
            :src="api_url + articles[$route.params.id - 1].Media_contenu[0].url"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular
                  indeterminate
                  color="grey lighten-5"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-col>
      </v-row>
      <v-row>
        <div
          class="text-left"
          v-html="$md.render(articles[$route.params.id - 1].Contenue1)"
        ></div>
      </v-row>
      <v-row>
        <div
          class="text-left"
          v-html="$md.render(articles[$route.params.id - 1].Contenu2)"
        ></div>
      </v-row>
      <v-row>
        <div
          class="text-left"
          v-html="$md.render(articles[$route.params.id - 1].Contenu3)"
        ></div>
      </v-row>
      <v-row>
        <p
          class="text-center body-2"
          v-if="articles[$route.params.id - 1].Publication"
        >
          Publié le
          {{
            moment(articles[$route.params.id - 1].Publication)
              .locale("fr")
              .format("LL")
          }}
          par
          {{ articles[$route.params.id - 1].Auteur }}
        </p>
      </v-row>

      <v-row class="align-center d-flex justify-center">
        <v-col cols="12">
          <v-btn to="/blog" class="ma-5 button" color="primary"
            >Retour au blog
          </v-btn>
        </v-col>
      </v-row>
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
      title: "",
      description: "",
      id: "",
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: articlesQuery,
    },
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.description,
        },
      ],
    };
  },
};
</script>