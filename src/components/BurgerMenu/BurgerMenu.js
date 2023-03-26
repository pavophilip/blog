import { animated, config, useSprings } from "react-spring";
import { memo } from "react";
import styled from "@emotion/styled";

const StyledSvg = styled.svg`
  cursor: pointer;
  z-index: 5;
  overflow: visible;
  scale: 6;
  margin-top: 100px;

  & > rect {
    transform-origin: center;
    transform-box: fill-box;
  }
`;

const linearConfig = {
  duration: 100,
};

const topRect = async (next, isOpen) => {
  // Stage 1
  await next({
    transform: isOpen
      ? "translate(0px, 9px) rotate(0deg)"
      : "translate(0px, 9px) rotate(0deg)",
    config: linearConfig,
  });

  // Stage 2
  await next({
    transform: isOpen
      ? "translate(0px, 9px) rotate(-45deg)"
      : "translate(0px, 0px) rotate(0deg)",
    config: config.wobbly,
  });
};

const mediumRect = async (next, isOpen) => {
  // Medium rect has only Stage 1
  await next({
    to: {
      opacity: isOpen ? 0 : 1,
    },
    // Make delay when isOpen changed from true to false
    delay: !isOpen && 100,
    config: linearConfig,
  });
};

const bottomRect = async (next, isOpen) => {
  // Stage 1
  await next({
    transform: isOpen
      ? "translate(0px, -9px) rotate(0deg)"
      : "translate(0px, -9px) rotate(0deg)",
    config: linearConfig,
  });

  // Stage 2
  await next({
    transform: isOpen
      ? "translate(0px, -9px) rotate(-135deg)"
      : "translate(0px, 0px) rotate(0deg)",
    config: config.wobbly,
  });
};

const rects = [topRect, mediumRect, bottomRect];

const BurgerMenu = memo(({ isOpen, onClick }) => {
  const [springs] = useSprings(
    3,
    (index) => ({
      to: async (next) => {
        await rects[index](next, isOpen);
      },
    }),
    [isOpen]
  );

  return (
    <StyledSvg
      onClick={onClick}
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {springs.map((props, index, args) => {
        return (
          <animated.rect
            key={index}
            y={index * 9}
            width="24"
            height="2"
            rx="1"
            fill={"#4F4F4F"}
            style={props}
          />
        );
      })}
    </StyledSvg>
  );
});

export default BurgerMenu;
