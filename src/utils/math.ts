export const map = (c, a0, a1, b0, b1) => {
  return (c - a0) * (b1 - b0) / (a1 - a0) + b0
}

export const clamp = (v, a, b) => {
  let hi = a > b ? a : b;
  let lo = a > b ? b : a;

  if (v > hi) {
    return hi;
  } else if (v < lo) {
    return lo;
  }
  return v;
};

export const clampedMap = (c, a0, a1, b0, b1) => {
  return clamp(map(c, a0, a1, b0, b1), b0, b1);
}