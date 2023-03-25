import { animated, config, useSpring } from "react-spring";
import { memo } from "react";
import styled from "@emotion/styled";

const c1 = {
  duration: 100,
};
const c2 = {
  ...config.wobbly,
};

const StyledSvg = styled.svg`
  cursor: pointer;
  z-index: 5;
  overflow: visible;
  scale: 8;
  margin-top: 100px;

  & > rect {
    transform-origin: center;
    transform-box: fill-box;
  }
`;

const BurgerMenu = memo(({ isOpen, onClick }) => {
  const first = useSpring({
    to: async (next) => {
      if (isOpen) {
        await next({
          transform: "translate(0px, 9px) rotate(0deg)",
          config: c1,
        });
        await next({
          transform: "translate(0px, 9px) rotate(-45deg)",
          config: c2,
        });
      } else {
        await next({
          transform: "translate(0px, 9px) rotate(0deg)",
          config: c1,
        });
        await next({
          transform: "translate(0px, 0px) rotate(0deg)",
          config: c2,
        });
      }
    },
  });

  const second = useSpring({
    to: {
      opacity: isOpen ? 0 : 1,
    },
    delay: !isOpen && 100,
    config: c1,
  });

  const third = useSpring({
    to: async (next) => {
      if (isOpen) {
        await next({
          transform: "translate(0px, -9px) rotate(0deg)",
          config: c1,
        });
        await next({
          transform: "translate(0px, -9px) rotate(-135deg)",
          config: c2,
        });
      } else {
        await next({
          transform: "translate(0px, -9px) rotate(0deg)",
          config: c1,
        });
        await next({
          transform: "translate(0px, 0px) rotate(0deg)",
          config: c2,
        });
      }
    },
    config: {
      ...config.stiff,
      tension: 300,
    },
  });

  return (
    <StyledSvg
      onClick={onClick}
      width="24"
      height="20"
      viewBox="0 0 24 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <animated.rect
        y={"0"}
        width="24"
        height="2"
        rx="1"
        fill={"#000025"}
        style={first}
      />
      <animated.rect
        y="9"
        width="24"
        height="2"
        rx="1"
        fill={"#000025"}
        style={second}
      />
      <animated.rect
        y="18"
        width="24"
        height="2"
        rx="1"
        fill={"#000025"}
        style={third}
      />
    </StyledSvg>
  );
});

export default BurgerMenu;
