
import gsap from "gsap";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger);

export function pageAnimations() {

  const sections = gsap.utils.toArray("section");

  const splits = [];
  const timelines = [];

  sections.forEach((section) => {

    // Elements inside each section
    const headings = section.querySelectorAll("h1, h2, h3");
    const paragraphs = section.querySelectorAll("p");
    const images = section.querySelectorAll("img");

    const headingLines = [];
    const paragraphLines = [];

    // Split headings into lines
    headings.forEach((heading) => {

      const split = new SplitText(heading, {
        type: "lines",
        mask: "lines",
      });

      splits.push(split);
      headingLines.push(...split.lines);

    });

    // Split paragraphs into lines
    paragraphs.forEach((paragraph) => {

      const split = new SplitText(paragraph, {
        type: "lines",
        mask: "lines",
      });

      splits.push(split);
      paragraphLines.push(...split.lines);

    });

    // Independent timeline for each section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 75%",
        toggleActions: "play none none none",
        once: true,
      },
    });

    // 1. Heading Reveal
    if (headingLines.length) {

      tl.from(headingLines, {
        yPercent: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power3.out",
      }, 0);

    }

    // 2. Paragraph Reveal
    if (paragraphLines.length) {

      tl.from(paragraphLines, {
        y: 15,
        opacity: 0,
        duration: 0.5,
        stagger: 0.015,
        ease: "power2.out",
      }, 0.2);

    }

    // 3. Image Reveal
    if (images.length) {

      tl.fromTo(
        images,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          scale: 1.12,
          yPercent: 3,
          opacity: 0
        },
        {
          clipPath: 'polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)',
          scale: 1,
          yPercent: 0,
          duration: 1.8,
          stagger: 0.07,
          ease: "power3.out",
          opacity: 1
        },
        0.3
      );

    }

    timelines.push(tl);

  });

  // Cleanup
  return () => {

    timelines.forEach((tl) => {
      tl.scrollTrigger?.kill();
      tl.kill();
    });

    splits.forEach((split) => {
      split.revert();
    });

  };

}
