<template lang="pug">
   .container
      // Lead
      section.lead
         .elevator
            h1 Hey I'm ittid 👋
            p Passionate about JavaScript, Vue, and Open Source Project at GitHub 
               | &amp; i'm creating open source projects using:
               br
               | JavaScript &amp; Vue.js

            .social
               strong GitHub: 
                  a(:href="items.html_url", target='_black') {{ items.login }}

         .newsletter-section
            img(:src="items.avatar_url")
            div
               h3 Email Newsletter
               p I write tutorials. Get an update when something new comes out by signing up below!
            a(href="#", class="button") Subscribe

      // Article
      section.content
         h2 Latest Articles
            router-link(to="/blog", tag="a", class="view_all btn")
               span view all
         //- Article is a Componenets
         Articles

      // Project
      //- Project is a Componenets
      Project

</template>

<script>
import axios from "axios";
import Articles from "../components/global/Articles";
import Project from "../components/global/Project";

export default {
   data() {
      return {
         items: [],
         errors: []
      };
   },
   created() {
      axios
         .get(`https://api.github.com/users/ittid/repos`)
         .then(response => {
            // JSON responses are automatically parsed.
            this.items = response.data[0].owner;
         })
         .catch(e => {
            this.errors.push(e);
         });
   },
   components: {
      Articles,
      Project
   }
};
</script>
