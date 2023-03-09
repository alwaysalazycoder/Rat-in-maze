import React, { useRef } from "react";
import { useEffect, useState } from "react";

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
    // console.log(maze);

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

    console.log(ansString);

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
        tempArr.push(count);
      });

      count = 0;
      twoD[i] = tempArr;
      i++;
      tempArr = [];
    });

    console.log(twoD);
  };

  // rendering the grid to make changes in the obstacles...
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

  return (
    <div className="maze-wrapper">
      <div className="main-maze">
        <div className="container">{renderList}</div>
        <div className="submit-btn">
          <button className="button-89" role="button" onClick={arrayHandler}>
            {" "}
            Get Paths..
          </button>
        </div>
        <div className="number-of-paths">The total number of paths are :</div>

        <Answers pathsInGrid={twoD} maze={oned} />
      </div>
    </div>
  );
};

const Answers = (props) => {
  let { pathsInGrid, maze } = props;
  let tempMaze = [...maze];
  let answerList;

  return (
    <>
      <div className="data">
        <p>Hello answers</p>
        <p>{pathsInGrid.length} length</p>
        {pathsInGrid.map((i, index) => (
          <div className="data" key={index}>
            <p> {index} answer</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Maze;
