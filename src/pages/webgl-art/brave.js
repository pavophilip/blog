import brave from "../../glsl/brave.glsl";
import ShaderGalleryItem from "@/components/ShaderGalleryItem";

const shader = `
    ${brave}
`;

const Brave = () => {
  return <ShaderGalleryItem shader={shader} />;
};

export default Brave;
