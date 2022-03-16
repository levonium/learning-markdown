<template>
  <header class="container wrapper">
      <h1>
        <router-link class="text-white" to="/" exact
          ># Learning Markdown</router-link
        >
      </h1>

      <nav>
        <span>
          <router-link to="/" exact>## Learn</router-link>
        </span>

        <span>
          <router-link to="/practice" exact>## Practice</router-link>
        </span>
      </nav>
  </header>
</template>

<style scoped>
.wrapper {
  padding: 1rem;
  border-bottom: 1px solid var(--color-main);
}
h1 {
  margin-bottom: 0;
  text-align: center;
  font-size: 1.375rem;
}
h1 a {
  color: var(--color-text);
  font-weight: 700;
}
nav {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
nav span {
  margin-left: 1rem;
  font-size: 1.25rem;
  font-weight: 700;
}
@media (min-width: 768px) {
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h1 {
    font-size: 1.75rem;
  }
  nav {
    justify-content: start;
    margin-top: 0;
  }
}
</style>
