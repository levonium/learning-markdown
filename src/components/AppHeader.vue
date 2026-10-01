<template>
  <header class="container wrapper">
    <h1>
      <router-link class="home-link" to="/">
        <span class="neutral" aria-hidden="true">#</span>
        Learn Markdown
      </router-link>
    </h1>

    <nav aria-label="Main navigation">
      <router-link to="/practice" class="practice-link"> Practice </router-link>
    </nav>
  </header>
</template>

<style scoped>
.wrapper {
  padding: 1rem;
  border-bottom: 1px solid var(--color-step-2);
}

h1 {
  margin-bottom: 0;
  text-align: center;
  font-size: 1.375rem;
}

.home-link {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  color: var(--color-text);
  font-weight: 700;
}

.home-link:hover,
.home-link:focus-visible {
  color: var(--color-link-hover);
  outline: none;
}

.neutral {
  font-size: 2.4rem;
  color: oklch(0.929 0.013 255.508);
  opacity: 0.2;
  font-weight: 400;
}

.practice-link {
  display: inline-block;
  background-color: var(--color-step-2);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: var(--color-text);
  font-weight: 700;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.practice-link:hover,
.practice-link:focus-visible,
.practice-link.router-link-active {
  background-color: var(--color-step-3);
  color: var(--color-link-hover);
  outline: none;
}

@media (min-width: 768px) {
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: end;
    padding: 2rem 0 3rem;
  }

  h1 {
    font-size: 5rem;
    line-height: 0.8;
  }

  .neutral {
    font-size: 6rem;
  }
}
</style>
