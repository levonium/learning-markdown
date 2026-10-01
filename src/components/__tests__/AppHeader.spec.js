import { describe, it, expect } from "vitest";
import { mount, RouterLinkStub } from "@vue/test-utils";
import AppHeader from "../AppHeader.vue";

describe("AppHeader", () => {
  it("renders the home link and practice link", () => {
    const wrapper = mount(AppHeader, {
      global: {
        stubs: {
          RouterLink: RouterLinkStub,
        },
      },
    });

    const links = wrapper.findAllComponents(RouterLinkStub);
    const linkTexts = links.map((link) => link.text());

    expect(linkTexts.some((text) => text.includes("Learn Markdown"))).toBe(
      true
    );
    expect(linkTexts).toContain("Practice");
  });
});
