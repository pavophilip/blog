let supported = undefined;
export const isWebGlSupported = () => {
  if (typeof document === "undefined") return false;
  if (supported === undefined) {
    supported = !!document.createElement("canvas").getContext("webgl");
  }
  return supported;
};
