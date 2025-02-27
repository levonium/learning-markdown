<template>
  <header class="container wrapper">
    <h1>
      <router-link class="text-white" to="/" exact>
        <span class="neutral">#</span>
        Learn Markdown
      </router-link>
    </h1>

    <router-link to="/practice" exact class="practice-link">
      Practice
    </router-link>
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

  & a {
    color: var(--color-text);
    font-weight: 700;

    & span {
      margin-right: 0.25rem;
      font-size: 2.4rem;
      color: oklch(0.929 0.013 255.508);
      opacity: 0.2;
      font-weight: 400;
    }
  }
}

.practice-link {
  background-color: var(--color-step-2);
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: var(--color-text);
  font-weight: 700;
  transition: background 0.3s ease;

  &:hover {
    background-color: var(--color-step-3);
  }
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

    & > a > span {
      font-size: 6rem;
    }
  }
}
</style>
