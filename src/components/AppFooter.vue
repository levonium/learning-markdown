<template>
  <footer>
    <div class="container wrapper">
      <p>
        <span># {{ new Date().getFullYear() }} Learning Markdown</span>
        <span
          ># Made by
          <a href="https://drim.io" target="_blank" rel="noopenner"
            >Levon</a
          ></span
        >
        <span
          >#
          <a href="https://github.com/levonium/learning-markdown"
            >Source</a
          ></span
        >
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--color-main);
}
.wrapper {
  padding: 1rem;
  text-align: center;
}
p {
  margin-bottom: 0.5rem;
}
span {
  padding-right: 0.5rem;
}
</style>
