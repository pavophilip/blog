import mountains from "../../glsl/mountains.glsl";
import random from "../../glsl/random.glsl";
import ShaderGalleryItem from "@/components/ShaderGalleryItem";

const shader = `
    ${random}
    ${mountains}
`;

const Brave = () => {
  return <ShaderGalleryItem shader={shader} />;
};

export default Brave;
