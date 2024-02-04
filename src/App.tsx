import { useState } from "react";
import "./App.css";

function App() {
  const phrase:any = [
    "NO",
    "you like me  inside",
    "your are jusr deniying",
    "please click the yess",
    "you are the one i want",
    "i just cannot  wait to see us together",
    "you are breaking my heart",
    "u cannot say no",
    "there is no way to go",
  ];
  const [count, setCount] = useState(0);
  const [yespressed, setyespressed] = useState<boolean>(false);
  const fontsize = count * 20 + 16;

  // const increased = () => {
  //   setCount(count + 1);
  // };
  const diab = () => {
    setCount(count + 1);
  };

  const isTrue = phrase.length == count ? "none" : "";

  const yes = () => {
    // setCount(count + 1);
    setyespressed(true);
  };

  return (
    <div>
      {yespressed ? (
        <div>
          <div>
            <img
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWY4YnNpaGVwM3J0MnhvZmZsdjNqOGExa292aW15NHIxcHN2dnBvbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fPRwBcYd71Lox1v7p2/giphy.gif"
              alt=""
            />
          </div>
          <div className="btn">
            <button>hurray!!!!!!</button>
          </div>
        </div>
      ) : (
        <div>
          <div>
            <img
              src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3dqNmw0eDQ5bHN6bnVneTd0bGJjNzhqeXU4d3l2bjUxajVxaXlrNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vDhDcIEmShbUI/giphy.gif"
              alt=""
            />
          </div>
          <div className="btn">
            <button onClick={yes} style={{ fontSize: fontsize }}>
              yess
            </button>
            <div>
              <button style={{ display: isTrue }} onClick={diab}>
                {phrase[count]}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
