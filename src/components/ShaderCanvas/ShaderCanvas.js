import glslCanvas from "glslCanvas";
import React, { useEffect, useRef } from "react";
import { isWebGlSupported } from "@/utils/isWebGlSupported";
import { getDevicePixelRatio } from "@/utils/getDevicePixelRatio";

const ShaderCanvas = ({
  width,
  height,
  fragShader,
  vertShader,
  uniforms,
  superSample = 1,
  style,
  ...props
}) => {
  const canvas = useRef();
  const sandbox = useRef();
  const webGlSupported = isWebGlSupported();
  const pixelDensity = getDevicePixelRatio();

  // Spawn the glslCanvas
  useEffect(() => {
    if (!webGlSupported && glslCanvas) return;
    sandbox.current = new glslCanvas(canvas.current);
  }, [webGlSupported]);

  // Load the shader if it changes
  useEffect(() => {
    if (!webGlSupported && glslCanvas) return;
    sandbox.current.load(fragShader, vertShader);
  }, [webGlSupported, fragShader, vertShader]);

  //Set the uniforms if the shader or uniforms change
  useEffect(() => {
    if (!webGlSupported && glslCanvas) return;

    // Set the pixel size based on supersample
    sandbox.current.realToCSSPixels = pixelDensity * superSample;

    if (!uniforms) return;
    sandbox.current.setUniforms(uniforms);
  }, [
    pixelDensity,
    webGlSupported,
    fragShader,
    vertShader,
    uniforms,
    superSample,
  ]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <canvas
        {...props}
        ref={canvas}
        width={width * pixelDensity * superSample}
        height={height * pixelDensity * superSample}
        style={{
          ...style,
          width: `100%`,
          height: `100%`,
        }}
      />
    </div>
  );
};

export default ShaderCanvas;
