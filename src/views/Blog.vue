<template lang="pug">
   .article_page
      .content
         h1 Articles
         .categories
            a(href="#") Code
            a(href="#") Design
            a(href="#") Personal
            a(href="#") Popular
            a(href="#") Tools
         .search_container
            input(type="search", class="search_ipt" placeholder="Type here to filter posts...")
            span(class="article_length") {{ articleLenght.length }}
         .article_section
            Articles 
</template>

<script>
// @ is an alias to /src
import Articles from "@/components/global/Articles";

import axios from "axios";

export default {
   data() {
      return {
         articleLenght: []
      };
   },
   created() {
      axios
         .get(
            `https://newsapi.org/v2/everything?q=apple&from=2022-06-05&to=2022-06-05&sortBy=popularity&apiKey=53245c35f8b643869eaa84a31a394e64`
         )
         .then(response => {
            // JSON responses are automatically parsed.
            this.articleLenght = response.data.articles;
         });
   },
   components: {
      Articles
   }
};
</script>
