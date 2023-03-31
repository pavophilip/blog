import mountains from "../../glsl/mountains.glsl";
import ShaderGalleryItem from "@/components/ShaderGalleryItem";
import { useMemo, useState } from "react";
import hexToVec from "@/utils/hexToVec";

const shader = `
    ${mountains}
`;

const Mountains = () => {
  const [bg, setBg] = useState("");
  const [color, setColor] = useState("");

  const uniforms = useMemo(() => {
    return {
      // u_color_bg: hexToVec(bg, 1), // [0.396078431372549, 0.3764705882352941, 0.6862745098039216, 1]
      // u_color: hexToVec(color, 1), // [1, 0.8392156862745098, 0.8470588235294118, 1]

      u_color_bg: [1, 0.8392156862745098, 0.8470588235294118, 1],
      u_color: [0.396078431372549, 0.3764705882352941, 0.6862745098039216, 1],
    };
  }, [color, bg]);

  return (
    <>
      <ShaderGalleryItem shader={shader} uniforms={uniforms} />
      {/*<input*/}
      {/*  type={"color"}*/}
      {/*  value={bg}*/}
      {/*  onChange={(e) => {*/}
      {/*    setBg(e.target.value);*/}
      {/*  }}*/}
      {/*/>*/}
      {/*<input*/}
      {/*  type={"color"}*/}
      {/*  value={color}*/}
      {/*  onChange={(e) => {*/}
      {/*    setColor(e.target.value);*/}
      {/*  }}*/}
      {/*/>*/}
    </>
  );
};

export default Mountains;
