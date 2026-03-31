// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./tailwind.css";
import "./style.css";
import './custom.css'
import Vercount from './components/Vercount.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'doc-footer-before': () => h(Vercount),
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('Vercount', Vercount)
  },
} satisfies Theme;
