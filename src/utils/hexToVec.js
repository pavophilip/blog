const hexToVec = (hex, opacity = 1) => {
  const hexNum = parseInt(hex.substring(1), 16);

  const r = (hexNum >> 16) & 0xff;
  const g = (hexNum >> 8) & 0xff;
  const b = hexNum & 0xff;

  return [r / 255, g / 255, b / 255, opacity];
};

export default hexToVec;
