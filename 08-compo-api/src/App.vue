<template>
  <div>
    <!--
      Plantilla del componente de navegación.
      Muestra una barra de navegación con enlaces a diferentes rutas de la aplicación.
      También incluye un área de vista de router para mostrar el componente correspondiente a la ruta actual.
    -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> 
      <router-link :to="{name:'counter'}">Counter</router-link> |
      <router-link :to="{name:'users'}">Users</router-link> |
      <router-link :to="{name:'pokemon-search'}">Buscar</router-link> |
      <router-link :to="{name:'todo'}">Todo List</router-link> |
      <router-link :to="{name:'slots'}">Slots</router-link> 
    </nav>

    <!-- Área de vista de router para mostrar el componente correspondiente a la ruta actual -->
    <router-view  v-slot="{ Component, route }">
      <!-- Utiliza 'keep-alive' para mantener vivo el componente -->
      <!-- Muestra el componente correspondiente a la ruta actual -->
      <keep-alive>      
        <component :is="Component" :key="route.name"/>
      </keep-alive>
    </router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
