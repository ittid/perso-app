<template lang="pug">
   #app
      Header
      #main-content
         router-view
      Footer
</template>

<script>
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

export default {
   el: "#app",
   name: "App",
   components: {
      Header,
      Footer
   }
};
</script>
