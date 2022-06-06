<template lang="pug">
   section.content
      h2 Open Source Projects
      .project
         .each(v-for="project of projects")
            h2 
               a(:href="project.html_url", class="project-link", target="_blank")
                  span(class="p-icon") 💾
                  .p-title {{ project.name }}
            p {{ project.description }}
            div.source
               a(:href="project.html_url", class="btn prj", target="_blank") source
</template>

<script>
import axios from "axios";

export default {
   name: "Project",
   data() {
      return {
         projects: [],
         errors: []
      };
   },
   created() {
      axios
         .get(`https://api.github.com/users/ittid/repos`)
         .then(response => {
            // JSON responses are automatically parsed.
            this.projects = response.data;
         })
         .catch(e => {
            this.errors.push(e);
         });
   }
};
</script>
