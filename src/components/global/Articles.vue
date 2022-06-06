<template lang="pug">
   section.posts
      div.post_cont(v-for="post of posts")
         a(:href="post.url", target="_blank") 
            .each
               .img_wrapper
                  img(:src="post.urlToImage")
               .title
                  h2 {{ post.title }}
                  .datetime {{ post.publishedAt }}
               div.category
                  span(class="btn label") label

</template>

<script>
import axios from "axios";

export default {
   name: "Articles",
   data() {
      return {
         posts: [],
         errors: []
      };
   },
   created() {
      axios
         .get(
            `https://newsapi.org/v2/everything?q=apple&from=2022-06-05&to=2022-06-05&sortBy=popularity&apiKey=53245c35f8b643869eaa84a31a394e64`
         )
         .then(response => {
            // JSON responses are automatically parsed.
            this.posts = response.data.articles;
         })
         .catch(e => {
            this.errors.push(e);
         });
   }
};
</script>
