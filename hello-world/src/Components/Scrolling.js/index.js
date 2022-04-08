import { useEffect } from "react";

export const Scrolling = () => {
  useEffect(() => {
    const handleScrolling = () => {};
    document.addEventListener("scroll", handleScrolling);
  });
  return <div style={{ height: 200 }}> </div>;
};
// mỗi lần react update UI thì sẽ cleanup 1 lần
