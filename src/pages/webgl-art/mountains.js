import mountains from "../../glsl/mountains.glsl";
import ShaderGalleryItem from "@/components/ShaderGalleryItem";

const shader = `
    ${mountains}
`;

const Brave = () => {
  return <ShaderGalleryItem shader={shader} />;
};

export default Brave;
