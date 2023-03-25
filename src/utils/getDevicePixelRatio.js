export const getDevicePixelRatio = () => {
  if (typeof document === "undefined") return 1;
  return devicePixelRatio || 1;
};
