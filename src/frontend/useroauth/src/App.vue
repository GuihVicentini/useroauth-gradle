<template>
   <v-app id="inspire">
    <v-navigation-drawer 
    v-model="drawer"
    app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"
           v-if="currentUser"
          >
            Hi {{ currentUser.username }}!
          </v-list-item-title>
          <v-list-item-title class="title"
           v-else
          >
            Welcome to Shiftly!
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

<v-app-bar
      app
      color="#6A76AB"
      dark
      src="./assets/bolt_lake.jpeg"
      fade-img-on-scroll
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer =! drawer"></v-app-bar-nav-icon>

      <v-app-bar-title>Shiftly</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn
        v-if="!currentUser" 
        icon 
        to="/login">
        <v-icon>mdi-account-outline</v-icon>
      </v-btn>

      <v-btn
        v-if="currentUser" 
        icon 
        @click.prevent="logOut">
        <v-icon>mdi-login</v-icon>
      </v-btn>

      <v-btn
        v-if="!currentUser" 
        icon 
        to="/register">
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs 
          v-if="currentUser"
          align-with-title>
          <v-tab to="/user">Work Calendar</v-tab>
          <v-tab to="/wishes">Wishes</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({ 
      drawer: null,
      items: [
          { title: 'Home', icon: 'mdi-home-variant-outline', to: '/' },
          { title: 'Profile', icon: 'mdi-account', to: '/profile'},
        ], }),
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    },

  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>


<style>

.v-app-bar-title__content {
  width: 100px;
}

</style>

