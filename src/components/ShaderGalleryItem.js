import dynamic from "next/dynamic";
import styled from "@emotion/styled";

const ShaderCanvas = dynamic(() => import("./ShaderCanvas/ShaderCanvas"), {
  ssr: false,
});

const GalleryItemContainer = styled.div`
  //display: flex;
  //align-items: center;
  //justify-content: center;
`;

const ShaderGalleryItem = ({ shader, uniforms }) => {
  return (
    <GalleryItemContainer>
      <ShaderCanvas
        height={330}
        width={330}
        fragShader={shader}
        uniforms={uniforms}
      />
    </GalleryItemContainer>
  );
};

export default ShaderGalleryItem;
