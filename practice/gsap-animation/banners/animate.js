/* global gsap GSDevTools */
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
