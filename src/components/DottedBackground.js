import styled from "@emotion/styled";
import { useMeasure } from "react-use";
import { useEffect, useRef } from "react";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const BackgroundCanvas = styled.canvas`
  position: absolute;
`;

const DottedBackground = () => {
  const [ref, { width, height }] = useMeasure();
  const canvasRef = useRef();

  useEffect(() => {
    if (!canvasRef.current || !width || !height) {
      return;
    }

    const c = canvasRef.current;
    const ctx = c.getContext("2d");

    ctx.clearRect(0, 0, width, height);

    const scale = window.devicePixelRatio;

    c.width = width * scale;
    c.height = height * scale;

    ctx.beginPath();
    ctx.fillStyle = "#cccccc";

    ctx.scale(scale, scale);

    for (let x = 0; x < width; x += 8) {
      for (let y = 0; y < height; y += 8) {
        draw(x, y, 1, 1);
      }
    }

    ctx.fill();

    function draw(x, y, width, height) {
      ctx.rect(x, y, width, height);
    }
  }, [width, height]);

  return (
    <CanvasContainer ref={ref}>
      <BackgroundCanvas
        ref={canvasRef}
        style={{
          width,
          height,
        }}
      ></BackgroundCanvas>
    </CanvasContainer>
  );
};

export default DottedBackground;
