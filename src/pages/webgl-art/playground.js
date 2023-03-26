import dynamic from "next/dynamic";
import random2 from "../../glsl/random2.glsl";
import snoise from "../../glsl/snoise.glsl";
import noisy from "../../glsl/noisy.glsl";

import { useMemo } from "react";

const ShaderCanvas = dynamic(
  () => import("../../components/ShaderCanvas/ShaderCanvas"),
  {
    ssr: false,
  }
);

const shader = `
    #ifdef GL_ES
        precision mediump float;
    #endif

    ${random2}
    ${snoise}
    ${noisy}
`;

const canvasSize = 600;

const hexToVec = (hex, opacity = 1) => {
  const hexNum = parseInt(hex.substring(1), 16);

  const r = (hexNum >> 16) & 0xff;
  const g = (hexNum >> 8) & 0xff;
  const b = hexNum & 0xff;

  return [r / 255, g / 255, b / 255, opacity];
};

const Playground = () => {
  const uniforms = useMemo(() => {
    return {
      u_color_bg: hexToVec("#3200b6", 1),
      u_color_blob: hexToVec("#aa00ff", 1),
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        background: "#fff",
      }}
    >
      <ShaderCanvas
        width={canvasSize}
        height={canvasSize}
        fragShader={shader}
        uniforms={uniforms}
        // style={{
        //   transform: "scale(10)",
        // }}
      />
    </div>
  );
};

export default Playground;
