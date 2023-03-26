import template from "../../glsl/template.glsl";
import ShaderGalleryItem from "@/components/ShaderGalleryItem";

const shader = `
    ${template}
`;

const Brave = () => {
  return <ShaderGalleryItem shader={shader} />;
};

export default Brave;
