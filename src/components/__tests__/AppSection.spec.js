import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import { nextTick } from "vue";
import AppSection from "../../components/AppSection.vue";

describe("AppSection", () => {
  let observerCallback = null;
  let observedElements = [];

  const MockIntersectionObserver = vi.fn(function (callback) {
    observerCallback = callback;
    return {
      observe: vi.fn((el) => observedElements.push(el)),
      disconnect: vi.fn(),
    };
  });

  beforeEach(() => {
    window.IntersectionObserver = MockIntersectionObserver;
    observedElements = [];
  });

  afterEach(() => {
    delete window.IntersectionObserver;
  });

  it("loads and renders the formatting section", async () => {
    const wrapper = mount(AppSection, {
      props: { slug: "formatting" },
      attachTo: document.body,
    });

    // Trigger intersection to start loading.
    expect(observedElements.length).toBe(1);
    observerCallback([{ isIntersecting: true, target: observedElements[0] }]);

    await flushPromises();
    await nextTick();

    // Dynamic imports from import.meta.glob need a tick to resolve.
    await new Promise((resolve) => setTimeout(resolve, 10));
    await flushPromises();
    await nextTick();

    const text = wrapper.text();
    expect(text).toContain("Strong and Emphasize");
    expect(text).toContain("Strike Through");

    wrapper.unmount();
  });
});
