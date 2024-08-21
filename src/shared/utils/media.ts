import type { Ref } from "vue";
import { ref } from "vue";

export const media = {
  mobile: "(max-width: 755px)",
  tablet: "(min-width: 756px)",
  desktop: "(min-width: 1024px)",
};

export const useMedia = (type: keyof typeof media): Ref<boolean> => {
  const matches = ref(window.matchMedia(media[type]).matches);

  window.addEventListener("resize", () => {
    matches.value = window.matchMedia(media[type]).matches;
  });

  return matches;
};
