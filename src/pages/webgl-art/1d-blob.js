import template from "../../glsl/1d-blob.glsl";
import ShaderGalleryItem from "@/components/ShaderGalleryItem";
import { useMemo } from "react";

const shader = `
    ${template}
`;

const Blob = () => {
  const uniforms = useMemo(() => {
    return {
      // u_color_bg: hexToVec(bg, 1), // [0.396078431372549, 0.3764705882352941, 0.6862745098039216, 1]
      // u_color: hexToVec(color, 1), // [1, 0.8392156862745098, 0.8470588235294118, 1]

      u_color_bg: [1, 0.8392156862745098, 0.8470588235294118, 1],
      u_color_blob: [
        0.396078431372549, 0.3764705882352941, 0.6862745098039216, 1,
      ],
    };
  }, []);

  return <ShaderGalleryItem shader={shader} uniforms={uniforms} />;
};

export default Blob;
