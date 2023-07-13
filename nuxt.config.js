import colors from "vuetify/es5/util/colors";

export default {
  head: {
    titleTemplate: "L'Échappée des copropriétés - %s",
    htmlAttrs: {
      lang: "fr",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "L’association l’Échappée des Copropriétés est née de « l’Échappée des Copropriétés en roue libre », un projet autofinancé et mené par Manon LEROY durant l’été 2017. Après quatre années à suivre des copropriétaires avec l'Association des Responsables de Copropriété (ARC), elle constate des manques dans les politiques publiques, la loi et l’accompagnement des copropriétés.",
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "Copropriétés, L'Échappée des copropriétés, copro,Toulouse, France,Association des Responsables de Copropriété (ARC), ARC,politiques publiques, la loi, accompagnement des copropriétés, aides copropriétés",
      },
      { hid: "language", name: "language", content: "French" },
      { hid: "revisit-after", name: "revisit-after", content: "1 days" },
      { name: "format-detection", content: "telephone=no" },
      // Open Graph / Facebook
      { hid: "og:type", property: "og:type", content: "website" },
      {
        hid: "og:url",
        property: "og:url",
        content: "https://www.echappee-copro.org",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "L'Échappée des copropriétés",
      },
      {
        hid: "og:description",
        property: "og:description",
        content:
          "L’association l’Échappée des Copropriétés est née de « l’Échappée des Copropriétés en roue libre », un projet autofinancé et mené par Manon LEROY durant l’été 2017. Après quatre années à suivre des copropriétaires avec l'Association des Responsables de Copropriété (ARC), elle constate des manques dans les politiques publiques, la loi et l’accompagnement des copropriétés.",
      },
      // Twitter
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary_large_image",
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "https://www.echappee-copro.org",
      },
      {
        hid: "twitter:title",
        property: "twitter:title",
        content: "L'Échappée des copropriétés",
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content:
          "L’association l’Échappée des Copropriétés est née de « l’Échappée des Copropriétés en roue libre », un projet autofinancé et mené par Manon LEROY durant l’été 2017. Après quatre années à suivre des copropriétaires avec l'Association des Responsables de Copropriété (ARC), elle constate des manques dans les politiques publiques, la loi et l’accompagnement des copropriétés.",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  css: ["~/assets/css/styles.css"],
  loading: "~/components/loading.vue",
  plugins: ["~/plugins/carousel.js"],
  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/apollo",
    "@nuxtjs/markdownit",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@nuxtjs/google-analytics",
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "https://echappee-copro.fr/graphql",
      },
    },
  },
  markdownit: {
    preset: "default",
    html: true,
    linkify: true,
    breaks: true,
    injected: true,
    runtime: true,
    typographer: true,
  },
  vuetify: {
    customVariables: ["~/assets/css/styles.scss"],
    defaultAssets: false,
    icons: {
      iconfont: "mdi",
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: "#FF8C00",
          secondary: "#ECBE12",
          tertiary: "#ffffeb",
          accent: "#FAEA1C",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  googleAnalytics: {
    id: "UA-141781775-3",
  },
  robots: {
    UserAgent: "*",
    Allow: "/",
    UserAgent: "Googlebot",
    Allow: "/",
    Sitemap: "https://www.echappee-copro.org/sitemap.xml",
  },
  sitemap: {
    hostname: "https://www.echappee-copro.org",
    Default: {
      changefreq: "daily",
      priority: 1,
      lastmod: new Date(),
    },
    routes: [
      {
        url: "/",
        changefreq: "daily",
        priority: 1,
        lastmod: new Date(),
      },
      {
        url: "/activites",
        changefreq: "daily",
        priority: 0.9,
        lastmod: new Date(),
      },
      {
        url: "/blog",
        changefreq: "daily",
        priority: 0.9,
        lastmod: new Date(),
      },
      {
        url: "/contact",
        changefreq: "daily",
        priority: 0.9,
        lastmod: new Date(),
      },
      {
        url: "/videotheque",
        changefreq: "daily",
        priority: 0.9,
        lastmod: new Date(),
      },
      {
        url: "/qui_sommes_nous",
        changefreq: "daily",
        priority: 0.9,
        lastmod: new Date(),
      },
      {
        url: "/vision",
        changefreq: "daily",
        priority: 0.9,
        lastmod: new Date(),
      },
      {
        url: "/mentions_legales",
        changefreq: "daily",
        priority: 0.1,
        lastmod: new Date(),
      },
      {
        url: "/plan_du_site",
        changefreq: "daily",
        priority: 0.1,
        lastmod: new Date(),
      },
    ],
  },
};
