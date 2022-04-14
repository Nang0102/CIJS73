import { createContext } from "react"

const ThemeContext = createContext({ theme: "Light" })


export default ThemeContext;


// Context: Là Data warehouse
// context Provider: lấy DL và phân phát cho những nơi cần
// context consumer: là ng tiêu dùng, cho phép nhận DL và hiển thị ra