import React, { useEffect } from "react";
import { gsap } from "gsap";

const PuzzlePiece = ({
  primaryColor = "#004973",
  secondaryColor = "#03ae9f",
  ballColor = "#e8e8e8",
  thickness = 8,
  bouncingTime = 0.6,
  length = "240",
  slideOutDistance1 = 40,
  slideOutDistance2 = 40,
  rotationAngle = 12,
}) => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.fromTo(
      ".stator",
      { transformOrigin: "50% 50%", rotation: 5 },
      {
        rotation: -rotationAngle,
        ease: "power1.inOut",
        duration: bouncingTime,
        repeat: 3,
        yoyo: true,
      }
    )
      .to(
        "#rotator1",
        {
          x: -slideOutDistance1,
          y: -slideOutDistance1,
          rotate: 0,
          ease: "power1.inOut",
          duration: bouncingTime,
          repeat: 1,
          yoyo: true,
        },
        0
      )
      .fromTo(
        "#rotator1",
        { transformOrigin: "50% 50%", rotation: 5 },
        {
          rotation: -rotationAngle,
          ease: "power1.inOut",
          duration: bouncingTime,
          repeat: 1,
          yoyo: true,
        },
        bouncingTime * 2
      )
      .to(
        "#rotator2",
        {
          x: slideOutDistance2,
          y: slideOutDistance2,
          rotate: 0,
          ease: "power1.inOut",
          duration: bouncingTime,
          repeat: 1,
          yoyo: true,
        },
        bouncingTime * 2
      )
      .fromTo(
        "#rotator2",
        { transformOrigin: "50% 50%", rotation: 5 },
        {
          rotation: -rotationAngle,
          ease: "power1.inOut",
          duration: bouncingTime,
          repeat: 1,
          yoyo: true,
        },
        0
      )
      .to(
        "#ball",
        {
          rotation: "-=180",
          duration: bouncingTime * 2,
          transformOrigin: "7x 57px",
          ease: "back.in(1.7)",
        },
        0
      )
      .to(
        "#ball",
        {
          rotation: "-=180",
          duration: bouncingTime * 2,
          transformOrigin: "7x 57px",
          ease: "back.in(1.7)",
        },
        bouncingTime * 2
      );

    return () => tl.kill();
  }, [bouncingTime, slideOutDistance1, slideOutDistance2, rotationAngle]);

  return (
    <>
      <svg
        width={length}
        height={length}
        viewBox="0 0 240 240"
        strokeLinejoin="round"
        strokeWidth={thickness}
        xmlns="http://www.w3.org/2000/svg"
        style={{ overflow: "visible" }}
      >
        {/* Puzzle Board Piece1 */}
        <path
          className="stator"
          d="M120 20
            A100 100 0 0 1 220 120
            L20 120
            A100 100 0 0 0 120 220
            "
          fill="none"
          stroke={primaryColor}
        />

        {/* Left Top Bouncing Piece */}
        <g id="rotator1">
          <path
            d="M120 20
              A100 100 0 0 0 20 120
              L55 120
              A15 15 0 0 0 85 120
              L120 120
              Z"
            fill="white"
            stroke={secondaryColor}
          />
          <line x1="120" y1="120" x2="220" y2="220" stroke="none" />
        </g>

        {/* Right Bottom Bouncing Piece */}
        <g id="rotator2">
          <path
            d="M120 120
              L120 220
              A100 100 0 0 0 220 120
              L185 120
              A15 15 0 0 0 155 120
              L120 120
              Z"
            fill="white"
            stroke={secondaryColor}
          />
          <line x1="120" y1="120" x2="20" y2="20" stroke="none" />
        </g>

        {/* Puzzle Board Piece2 */}
        <path
          className="stator"
          fill="white"
          stroke={primaryColor}
          d="
          M206.6 70
          A100 100 0 0 0 120 20
          L120 55
          A15 15 0 0 0 120 85
          L120 155
          A15 15 0 0 1 120 185
          L120 220
          A100 100 0 0 1 33.4 170"
        />

        {/* Bouncing Ball Piece */}
        <circle
          id="ball"
          cx="120"
          cy="70"
          r="7"
          fill="none"
          stroke={ballColor}
          strokeWidth="7"
        />
      </svg>
    </>
  );
};
export default PuzzlePiece;
