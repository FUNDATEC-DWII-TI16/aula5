<template>
  <div>
    <div class="page-a-content">
      Conteudo da pagina A
    </div>
    <header-component />
    <component-a></component-a>
    <component-b></component-b>
    <footer-component />
  </div>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import ComponentA from "./components/ComponentA.vue";
import ComponentB from "./components/ComponentB.vue";
import FooterComponent from "./components/FooterComponent.vue";

export default {
  name: "App",
  components: {
    HeaderComponent,
    ComponentA,
    ComponentB,
    FooterComponent,
  },
};
</script>

<style scoped>
.page-a-content {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;
}
</style>
