import React from "react";
import ContentLoader from "react-content-loader";
const Skleton = (props) => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="34" cy="40" r="29" />
      <rect x="84" y="15" rx="0" ry="0" width="46" height="0" />
      <rect x="75" y="50" rx="0" ry="0" width="188" height="14" />
      <rect x="77" y="20" rx="0" ry="0" width="108" height="16" />
    </ContentLoader>
  );
};

export default Skleton;
