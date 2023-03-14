import React, { Component } from "react";
import studentData from "./StudentData";
import studentProfiles from "./StudentProfiles";
import FilterStudents from "./FilterStudents";
import CheckboxDifficulty from "./CheckboxDifficulty";
import CheckboxFun from "./CheckboxFun";
import SortValues from "./SortValues";
import StudentProfile from "./StudentProfile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BarChart from "./BarChart";

// states
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentFilter: studentProfiles,
      taskSort: "default",
      difficultyCheck: true,
      funCheck: true,
    };
  }

  // updates this.state.studentFilter when change in checkboxes
  handleChange = (prop) => {
    this.setState((prevState) => {
      const updatedFilter = prevState.studentFilter.map((item) => {
        if (item.firstName === prop) {
          return {
            ...item,
            checked: !item.checked,
          };
        }
        return item;
      });
      return {
        studentFilter: updatedFilter,
      };
    });
  };

  // sets opposite difficulty filter state when change in checkbox
  switchDifficulty = () => {
    this.setState((prevState) => ({
      difficultyCheck: !prevState.difficultyCheck,
    }));
  };

  // sets opposite fun filter state when change in checkbox
  switchFun = () => {
    this.setState((prevState) => ({
      funCheck: !prevState.funCheck,
    }));
  };

  // sets state to taskSort
  handleValue = (e) => {
    switch (e) {
      case "difficulty-high-low":
        this.setState({
          taskSort: "difficulty-high-low",
        });
        break;

      case "difficulty-low-high":
        this.setState({
          taskSort: "difficulty-low-high",
        });
        break;

      case "fun-high-low":
        this.setState({
          taskSort: "fun-high-low",
        });
        break;

      case "fun-low-high":
        this.setState({
          taskSort: "fun-low-high",
        });
        break;

      default:
        this.setState({
          taskSort: "default",
        });
    }
  };

  render() {
    // filters unchecked students, maps the names and filters the data of remaining students
    const filterCheckedStudents = this.state.studentFilter.filter(
      (item) => item.checked
    );
    const mapNames = filterCheckedStudents.map((item) => item.firstName);
    const filteredStudentData = studentData.filter((item) =>
      mapNames.includes(item.name)
    );

    // creates array with objects for tasks derived from studentData
    const mapTasks = studentData.map((item) => item.task);
    const filterTasks = mapTasks.filter(
      (type, index) => mapTasks.indexOf(type) === index
    );
    const tasks = filterTasks.map(function (value) {
      // creates total score of difficulty derived from filteredStudentData
      const difficultyTotal = filteredStudentData
        .filter((data) => data.task === value)
        .reduce((currentTotal, data) => {
          return data.difficulty + currentTotal;
        }, 0);

      // creates total score of fun derived from filteredStudentData
      const funTotal = filteredStudentData
        .filter((data) => data.task === value)
        .reduce((currentTotal, data) => {
          return data.fun + currentTotal;
        }, 0);

      return { task: value, difficulty: difficultyTotal, fun: funTotal };
    });

    // sorts tasks array based on state of taskSort
    const tasksSort = tasks.sort((a, b) => {
      if (this.state.taskSort === "difficulty-high-low") {
        return b.difficulty - a.difficulty;
      }
      if (this.state.taskSort === "difficulty-low-high") {
        return a.difficulty - b.difficulty;
      }
      if (this.state.taskSort === "fun-high-low") {
        return b.fun - a.fun;
      }
      if (this.state.taskSort === "fun-low-high") {
        return a.fun - b.fun;
      } else {
        return tasks;
      }
    });

    return (
      <div>
        <h1 className="title">Student Dashboard</h1>
        <Router>
          <div className="container-links">
            {/*link to default view and maps link of every student*/}
            <Link className="link-all" to="/">
              All
            </Link>
            {studentProfiles.map((item, index) => (
              <Link
                className="link-student"
                to={"/" + item.firstName}
                key={index}
              >
                {item.firstName}
              </Link>
            ))}
          </div>
          <Routes>
            {/*route to default view with student filter checkboxes*/}
            <Route
              exact
              path="/"
              element={
                <div>
                  <BarChart
                    taskData={tasksSort}
                    difficultyCheck={this.state.difficultyCheck}
                    funCheck={this.state.funCheck}
                  />
                  <div className="container-filter-student">
                    {this.state.studentFilter.map((item, index) => (
                      <FilterStudents
                        name={item.firstName}
                        key={index}
                        checked={item.checked}
                        handleChange={this.handleChange}
                      />
                    ))}
                  </div>
                  <div className="container-options">
                    {/*checkboxes to turn off/on difficulty or fun factor*/}
                    <CheckboxDifficulty
                      checked={this.state.difficultyCheck}
                      handleChange={this.switchDifficulty}
                    />
                    <CheckboxFun
                      checked={this.state.funCheck}
                      handleChange={this.switchFun}
                    />
                    {/*select option to sort by difficulty and fun*/}
                    <SortValues handleValue={this.handleValue} />
                  </div>
                </div>
              }
            ></Route>
            {/*maps all students and creates route to individual student view*/}
            {studentProfiles.map((student, index) => (
              <Route
                exact
                path={"/" + student.firstName}
                key={index}
                element={
                  <div>
                    {/*BarChart filters studentData with the selected student, then sorts difficulty and fun score*/}
                    <BarChart
                      taskDataStudent={studentData
                        .filter((item) => item.name === student.firstName)
                        .sort((a, b) => {
                          if (this.state.taskSort === "difficulty-high-low") {
                            return b.difficulty - a.difficulty;
                          }
                          if (this.state.taskSort === "difficulty-low-high") {
                            return a.difficulty - b.difficulty;
                          }
                          if (this.state.taskSort === "fun-high-low") {
                            return b.fun - a.fun;
                          }
                          if (this.state.taskSort === "fun-low-high") {
                            return a.fun - b.fun;
                          } else {
                            return studentData;
                          }
                        })}
                      difficultyCheck={this.state.difficultyCheck}
                      funCheck={this.state.funCheck}
                    />
                    {/*shows student profile*/}
                    <StudentProfile
                      firstName={student.firstName}
                      lastName={student.lastName}
                      phoneNumber={student.phoneNumber}
                      emailAddress={student.emailAddress}
                    />
                    <div className="container-options">
                      {/*checkboxes to turn off/on difficulty or fun factor*/}
                      <CheckboxDifficulty
                        checked={this.state.difficultyCheck}
                        handleChange={this.switchDifficulty}
                      />
                      <CheckboxFun
                        checked={this.state.funCheck}
                        handleChange={this.switchFun}
                      />
                      {/*select option to sort by difficulty and fun*/}
                      <SortValues handleValue={this.handleValue} />
                    </div>
                  </div>
                }
              ></Route>
            ))}
          </Routes>
        </Router>
      </div>
    );
  }
}

export default Dashboard;
