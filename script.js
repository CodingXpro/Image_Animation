gsap.to(".imageContainer", {
  width: "100%",
  ease: Expo.easeInOut,
  duration: 2,
  stagger: 2,
});

gsap.to(".text h1", {
  duration: 3,
  ease: Expo.easeInOut,
  stagger: 2,
  top: "-100%",
});
// document.querySelectorAll(".imageContainer").forEach((element) => {
//   gsap.to(element, {
//     width: "100%",
//     ease: Expo.easeInOut,
//     duration: 2,
//     stagger: 2,
//   });
// });
