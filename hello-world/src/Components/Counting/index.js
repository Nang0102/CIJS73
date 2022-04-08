import { useEffect, useState } from "react";

export const Counting = () => {
  const [count, setCount] = useState(0);

  // thuực hiện thêm 1 cv sau khi react đc update
  // useEffect phải đật bên trong cái function thì nó mới có thể truy cập và state của component mà mình sd
  // chỉ chạy khi đã đc render lần đầu tiên(DOM đã đc cập nhật)
  // useEfect luôn luôn chạy mỗi khi rerender chạy thàh công

  useEffect(() => {
    document.title = `you have clicked ${count} times`;
  });
  return (
    <div>
      <p> Count: {count} </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};
