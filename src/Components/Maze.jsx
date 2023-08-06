import React, { useRef } from "react";
import { useEffect, useState } from "react";
import {
  BsArrowDown,
  BsArrowLeft,
  BsArrowRight,
  BsArrowUp,
} from "react-icons/bs";
const Maze = () => {
  let temp; // used for render mapping the grid..
  let maze;

  // variables to convert direction path to oneD indexed array..
  let count = 0;
  let i = 0;
  let twoD = [[]];
  let tempArr = [];

  const [oned, setOned] = useState([
    1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1,
  ]);

  const [myMatrix, setMyMatrix] = useState("");

  useEffect(() => {
    let renderList = oned?.map((item, index) =>
      index == 0 ? (
        <div className="grid-item" key={index}>
          🐁
        </div>
      ) : index == 15 ? (
        <div className="grid-item" key={index}>
          🧀
        </div>
      ) : (
        <div className="grid-item" key={index}>
          <button
            className="clickable"
            onClick={() => {
              ClickHandler(index);
            }}
          >
            {item == 0 ? "🧱" : ""}
          </button>
        </div>
      )
    );

    setMyMatrix(renderList);
  }, []);

  useEffect(() => {
    let renderList = oned?.map((item, index) =>
      index == 0 ? (
        <div className="grid-item" key={index}>
          🐁
        </div>
      ) : index == 15 ? (
        <div className="grid-item" key={index}>
          🧀
        </div>
      ) : (
        <div className="grid-item" key={index}>
          <button
            className="clickable"
            onClick={() => {
              ClickHandler(index);
            }}
          >
            {item == 0 ? "🧱" : ""}
          </button>
        </div>
      )
    );

    setMyMatrix(renderList);
  }, [oned]);
  const [ansArr, setAnsArr] = useState([]);

  const ClickHandler = (key) => {
    temp = [...oned];

    if (temp[key] == 1) {
      temp[key] = 0;
    } else {
      temp[key] = 1;
    }

    setOned(temp);
  };

  const arrayHandler = () => {
    let onedArray = [...oned]; // copying the changed array

    const newArr = [];
    while (onedArray.length) {
      // converting changed array to twoD array
      newArr.push(onedArray.splice(0, 4));
    }

    maze = [...newArr]; // copying 2d array to maze;

    let visited = [
      // visited array for backtracking...
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];

    let ansString = ""; // ansString to store possible paths..

    // recursive function to find paths...
    const mazeSolver = (sr, sc, dr, str) => {
      if (sr === dr && sc === dr) {
        ansString = ansString + str + " ";
        return;
      }
      if (sr > dr || sc > dr) {
        return;
      }
      if (maze[sr][sc] == 0 || visited[sr][sc] === 1) {
        return;
      }

      visited[sr][sc] = 1;

      if (sr > 0) {
        mazeSolver(sr - 1, sc, dr, str + "U");
      }
      if (sc > 0) {
        mazeSolver(sr, sc - 1, dr, str + "L");
      }
      if (sr <= dr) {
        mazeSolver(sr + 1, sc, dr, str + "D");
      }
      if (sc <= dr) {
        mazeSolver(sr, sc + 1, dr, str + "R");
      }

      visited[sr][sc] = 0;
    };

    mazeSolver(0, 0, 3, ""); // calling the function for 4*4 matrix..

    let redLabelStringArray = ansString.split(" "); // spliting the answers

    redLabelStringArray.map((item, index) => {
      // convetting directional path into the oned indexed values..
      let redLabelArrayChar = item.trim().split("");

      redLabelArrayChar.map((item, index) => {
        if (item == "D") {
          count += 4;
        }
        if (item == "L") {
          count--;
        }
        if (item == "R") {
          count++;
        }
        if (item == "U") {
          count -= 4;
        }
        tempArr.push({ item: item, count: count });
      });

      count = 0;
      twoD[i] = tempArr;
      i++;
      tempArr = [];
    });

    setAnsArr(twoD);
    console.log(twoD);
  };

  // // rendering the grid to make changes in the obstacles...
  // let renderList = oned?.map((item, index) =>
  //   index == 0 ? (
  //     <div className="grid-item" key={index}>
  //       🐁
  //     </div>
  //   ) : index == 15 ? (
  //     <div className="grid-item" key={index}>
  //       🧀
  //     </div>
  //   ) : (
  //     <div className="grid-item" key={index}>
  //       <button
  //         className="clickable"
  //         onClick={() => {
  //           ClickHandler(index);
  //         }}
  //       >
  //         {item == 0 ? "🧱" : ""}
  //       </button>
  //     </div>
  //   )
  // );

  const handleShowPath = (arr) => {
    console.log(arr);

    let renderList = oned?.map((item, index) =>
      index == 0 ? (
        <div className="grid-item" key={index}>
          🐁
        </div>
      ) : index == 15 ? (
        <div className="grid-item" key={index}>
          🧀
        </div>
      ) : arr.find((obj) => obj.count === index) ? (
        <div className="grid-item" key={index}>
          <button
            className="clickable"
            onClick={() => {
              ClickHandler(index);
            }}
          >
            {arr.find(({ count }) => count === index).item === "D" ? (
              <BsArrowDown />
            ) : arr.find(({ count }) => count === index).item === "U" ? (
              <BsArrowUp />
            ) : arr.find(({ count }) => count === index).item === "R" ? (
              <BsArrowRight />
            ) : arr.find(({ count }) => count === index).item === "L" ? (
              <BsArrowLeft />
            ) : (
              ""
            )}
          </button>
        </div>
      ) : (
        <div className="grid-item" key={index}>
          <button
            className="clickable"
            onClick={() => {
              ClickHandler(index);
            }}
          >
            {item == 0 ? "🧱" : ""}
          </button>
        </div>
      )
    );

    setMyMatrix(renderList);
  };

  return (
    <div className="maze-wrapper">
      <div className="main-maze">
        {/* <div className="container">{renderList}</div> */}
        <div className="container">{myMatrix}</div>
        <div className="submit-btn">
          <button className="button-89" role="button" onClick={arrayHandler}>
            {" "}
            Get Paths..
          </button>
        </div>
        <div className="number-of-paths flex">
          The total number of paths are :{" "}
          <div className="bold">{ansArr.length }</div>
        </div>

        <div className="ansPathContainer">
          {ansArr.map((item, index) =>
            index != ansArr.length-1 ? (
              <div>
                <button
                  className="ansPath"
                  onClick={() => handleShowPath(item)}
                >
                  Show path : {index + 1}
                </button>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Maze;
