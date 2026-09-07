import type { Dictionary } from "@/i18n/nb";

export function getServices(t: Dictionary) {
  return [
    { number: "01", title: t.websiteTitle, text: t.websiteText },
    { number: "02", title: t.solutionsTitle, text: t.solutionsText },
    { number: "03", title: t.supportTitle, text: t.supportText },
  ];
}
