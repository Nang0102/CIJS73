import ThemeContext from "./ThemeContext";

const Header = () => {
  return (
    <div className="center border" style={{ height: 50 }}>
      Header <ThemeContext.Consumer> {(value) => {}} </ThemeContext.Consumer>{" "}
      {/* nhận vào giá trị là 1 function */}{" "}
    </div>
  );
};
export default Header;
