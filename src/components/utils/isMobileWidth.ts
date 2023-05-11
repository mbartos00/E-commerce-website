const isMobileWidth = (windowWidth: number | undefined) => {
  return windowWidth && windowWidth < 600;
};

export default isMobileWidth;
