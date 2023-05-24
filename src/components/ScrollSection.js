import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import Imageone from "../../public/img-4.jpg";

function ScrollSection() {
  const sectionRef = useRef(null);
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    const sectimg = gsap.fromTo(
      sectionRef1.current,
      {
        scale: 1,
      },
      {
        
        scale: 0.89,
        ease: "ease",
        duration: 2,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "left left",
          end: "200 left",
          scrub: 2,
        },
      }
    );



    const sectimgScroll = gsap.fromTo(
      sectionRef2.current,
      {
        translateX: 0,
      },
      {
        translateX: "-50%",
        ease: "ease",
        duration: 4,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "left left",
          end: "200 left",
          scrub: 2,
        },
      }
    );

    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
      sectimg.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer">
      {/* The section up act just as a wrapper. If the trigger (below) is the
      first jsx element in the component, you get an error on route change */}

      {/* The div below act just as a trigger. As the doc suggests, the trigger and 
      the animation should alway be two separated refs */}
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner">
          <div ref={sectionRef1} className="scroll-section">
            <h3>Section 1</h3>
            <div className="image-container">
              <Image ref={ sectionRef2} className="card__image" src={Imageone} />
            </div>
          </div>
          <div className="scroll-section">
            <h3>Section 2</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 3</h3>
          </div>
          <div className="scroll-section">
            <h3>Section 4</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;
