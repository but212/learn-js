/* global gsap GSDevTools */

// CSS 리니어 그래디언트에 트랜지션 설정 방법
{
  [
    { name: "--banner-link-begin", value: "#ff905c" },
    { name: "--banner-link-end", value: "#ed027c" },
  ].forEach((propertyDefinition) => {
    CSS.registerProperty({
      name: propertyDefinition.name,
      inherits: false,
      syntax: "<color>",
      initialValue: propertyDefinition.value,
    });
  });
}

{
  gsap.registerPlugin(GSDevTools);
  const timeline = gsap.timeline();
  timeline
    .from(".banner__title", { y: 80, opacity: 0, duration: 0.8 })
    .from(".banner__description", { y: 20, opacity: 0, duration: 0.4 }, "-=0.3")
    .from(".banner__link", { y: 20, opacity: 0, duration: 0.4 }, "-=0.3")
    .from("#earth", { y: 20, opacity: 0, duration: 0.4 }, "-=0.3")
    .from("#controller", { y: 20, opacity: 0, duration: 0.4 }, "-=0.3")
    .from("#basketball", { y: 20, opacity: 0, duration: 0.4 }, "-=0.3")
    .from("#book_1_", { y: 20, opacity: 0, duration: 0.4 }, "-=0.3")
    .from("#pencil", { y: 20, opacity: 0, duration: 0.4 }, "-=0.3")
    .from("#ball", { y: 20, opacity: 0, duration: 0.4 }, "-=0.3")
    .from("#paint", { y: 20, opacity: 0, duration: 0.4 }, "-=0.3");
  GSDevTools.create({ animation: timeline });
}
