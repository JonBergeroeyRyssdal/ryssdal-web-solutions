import type { Dictionary } from "@/i18n/nb";

export function getServices(t: Dictionary) {
  return [
    { number: "01", title: t.websiteTitle, text: t.websiteText, price: t.websitePrice },
    { number: "02", title: t.solutionsTitle, text: t.solutionsText, price: t.solutionsPrice },
    { number: "03", title: t.upgradeTitle, text: t.upgradeText, price: t.upgradePrice },
    { number: "04", title: t.supportTitle, text: t.supportText, price: t.supportPrice },
  ];
}
