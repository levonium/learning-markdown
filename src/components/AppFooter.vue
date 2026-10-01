<template>
  <footer>
    <div class="container wrapper">
      <p>
        <span>
          # made with &nbsp;💙&nbsp; by &nbsp;
          <a href="https://drim.io" target="_blank" rel="noopener noreferrer"
            >levon</a
          >
        </span>
        &middot;
        <span>
          #
          <a
            href="https://github.com/levonium/learning-markdown"
            target="_blank"
            rel="noopener noreferrer"
          >
            source code
          </a>
        </span>
        &middot;
        <span>
          <a href="#top"># top</a>
        </span>
      </p>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid var(--color-step-2);
  color: var(--color-neutral);
}

.wrapper {
  padding: 1rem;
  text-align: center;
}

p {
  margin-bottom: 0.5rem;
}

span {
  padding: 0 0.5rem;
}

a:hover,
a:focus-visible {
  outline: none;
}
</style>
