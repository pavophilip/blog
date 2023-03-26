import styled from "@emotion/styled";
import { useMeasure } from "react-use";
import { useMemo, useRef } from "react";
import dynamic from "next/dynamic";
import dots from "@/glsl/dots.glsl";

const ShaderCanvas = dynamic(
  () => import("../../components/ShaderCanvas/ShaderCanvas"),
  {
    ssr: false,
  }
);

const shader = `
    ${dots}
`;

const CanvasContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const Dots = () => {
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

export default Dots;
