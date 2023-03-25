import styled from "@emotion/styled";
import { useMeasure } from "react-use";
import { useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import dots from "@/glsl/dots.glsl";

const ShaderCanvas = dynamic(
  () => import("../components/ShaderCanvas/ShaderCanvas"),
  {
    ssr: false,
  }
);

const shader = `
    ${dots}
`;

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

  const uniforms = useMemo(() => {
    return {};
  }, []);

  return (
    <CanvasContainer ref={ref}>
      <ShaderCanvas
        width={width}
        height={height}
        fragShader={shader}
        uniforms={uniforms}
        style={
          {
            // transform: "scale(1)",
          }
        }
      />
    </CanvasContainer>
  );
};

export default DottedBackground;
