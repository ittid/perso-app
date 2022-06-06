<template lang="pug">
   .footer
      .links
         ul
            router-link(to="/", tag="li", exact)
               a Home
            router-link(to="/rss", tag="li")
               a RSS
            router-link(to="/newsletter", tag="li")
               a Newsletter
      .resource
         a(href="#")
            font-awesome-icon(:icon="['fab', 'github']")
         a(href="#")
            font-awesome-icon(:icon="['fab', 'facebook-f']")
         a(href="#")
            font-awesome-icon(:icon="['fab', 'twitter']")
</template>

<script>
export default {
   name: "Footer"
};
</script>
