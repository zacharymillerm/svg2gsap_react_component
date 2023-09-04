import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";

const PuzzlePiece = ({
  primary = "black",
  secondary = "green",
  ballcolor = "grey",
}) => {
  useLayoutEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      "#stator",
      { transformOrigin: "50% 50%", rotation: 5 },
      {
        rotation: -12,
        ease: "power1.inOut",
        duration: 0.6,
        repeat: 3,
        yoyo: true,
      }
    )
      .to(
        "#rotator1",
        {
          x: -40,
          y: -40,
          rotate: 0,
          ease: "power1.inOut",
          duration: 0.6,
          repeat: 1,
          yoyo: true,
        },
        0
      )
      .fromTo(
        "#rotator1",
        { transformOrigin: "100% 100%", rotation: 5 },
        {
          rotation: -12,
          ease: "power1.inOut",
          duration: 0.6,
          repeat: 1,
          yoyo: true,
        },
        1.2
      )
      .to(
        "#rotator2",
        {
          x: 40,
          y: 40,
          rotate: 0,
          ease: "power1.inOut",
          duration: 0.6,
          repeat: 1,
          yoyo: true,
        },
        1.2
      )
      .fromTo(
        "#rotator2",
        { transformOrigin: "0% 0%", rotation: 5 },
        {
          rotation: -12,
          ease: "power1.inOut",
          duration: 0.6,
          repeat: 1,
          yoyo: true,
        },
        0
      )
      tl.to(
        "#ball",
        {
          rotation: "-=180",
          duration: 1.2,
          transformOrigin: "7x -43px",
          ease: "back.in(1.7)",
        },
        0
      )
      .to(
        "#ball",
        {
          rotation: "-=180",
          duration: 1.2,
          transformOrigin: "7x -43px",
          ease: "back.in(1.7)",
        },
        1.2
      )
  }, []);

  return (
    <>
      <svg
        id="entire"
        width="200"
        height="200"
        viewBox="-50 -50 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="stator"
          d="M100 3
            A97 97 0 0 1 197 100
            L3 100
            A97 97 0 0 0 100 197
            L100 165
            A15 15 0 0 0 100 135
            L100 65
            A15 15 0 0 1 100 35
            Z"
          fill="none"
          stroke={primary}
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path
          id="rotator1"
          d="M100 3
              A97 97 0 0 0 3 100
              L35 100
              A15 15 0 0 0 65 100
              L100 100
              Z"
          fill="none"
          stroke={secondary}
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <path
          id="rotator2"
          d="M100 100
              L100 197
              A97 97 0 0 0 197 100
              L165 100
              A15 15 0 0 0 135 100
              L100 100
              Z"
          fill="none"
          stroke={secondary}
          strokeWidth="6"
          strokeLinejoin="round"
        />
        <circle
          id="ball"
          cx="100"
          cy="150"
          r="7"
          fill="none"
          stroke={ballcolor}
          strokeWidth="7"
        />
      </svg>
    </>
  );
};

export default PuzzlePiece;
