<template lang="pug">
   .newsletter
      .content
         h1 Newsletter
         p If you like my stuff and hate spam, join other developers in receiving my email newsletter. 👇 One-click unsubscribe anytime.
         .subscribe_area
            form(@submit="handleError" action="" method="POST" novalidate class="form_area")
               input(type="email" class="input_email" v-model="email" placeholder="type your e-mail")
               button(type='submit' class="sub-button") subscribe
            small(v-for="err in error" class="msg_area") {{ err }}
</template>

<script>
// @ is an alias to /src

export default {
   data() {
      return {
         error: [],
         email: null
      };
   },
   methods: {
      handleError: function(e) {
         // Empty The Error Array Before Start
         this.error = [];

         // Email Feild Is Empty:
         if (!this.email) {
            this.error.push("Email Wasn't Found!");
         } else if (this.email.includes("@") === false) {
            this.error.push("Email shoud be include @domain");
         }
         if (!this.error.length) {
            return true;
         }

         e.preventDefault();
      }
   }
};
</script>
