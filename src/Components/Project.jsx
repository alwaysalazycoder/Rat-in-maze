import React from "react";

export const Project = () => {
  return (
    <>
      <div className="project-detailing">
        <div className="containers">
          <div className="objective">
            <h2>Objective</h2>
            <p>
              Create a simple web application using React that implements a
              novel way to visualize the famous Rat in a Maze Problem which can
              be solved using backtracking.
            </p>
          </div>

          <div className="project-context">
            <h2>Project context</h2>
            The Rat in a maze is a famous problem in which we have a N x N
            matrix (the maze) which consists of two types of cells - one the rat
            can pass through and the other that the rat cannot pass through.
            <br />
            The objective of this problem is that the rat will be at a
            particular cell and we have to find all the possible paths that the
            rat can take to reach the destination cell from the given source
            cell.
            <br />
            Now you will be building a simple react application that will
            visualize all the possible paths on the web page.
            <br />
            While building this simple react app you will learn ES6 Javascript
            techniques, how to create react components and apply the Data
            Structures' and Algorithms' concepts such as Recursion and
            Backtracking.
          </div>

          <div className="project-stages">
            <h2>Project stages</h2>
            The project consists of the following stages:
            <div className="photo">
              <img
                src="https://storage.googleapis.com/crio-content-container-assets/ME_ME_PROJECT_RATINAMAZE_REACT_MODULE_ME_PROJECT_RATINAMAZE_REACT_MODULE_RATINAMAZE_REACT_ratinamaze_task_list.png"
                alt="photo"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
