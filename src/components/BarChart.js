import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryTooltip,
  VictoryGroup,
  VictoryAxis,
} from "victory";

// theme for barchart
const theme = {
  axis: {
    style: {
      axis: {
        stroke: "#90A4AE",
        strokeWidth: 2,
      },
      grid: {
        stroke: "none",
      },
      ticks: {
        size: 5,
        stroke: "#90A4AE",
        strokeWidth: 2,
      },
      tickLabels: {
        fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
        fontSize: 8,
        padding: 8,
        fill: "#455A64",
      },
    },
  },
  chart: {
    padding: { top: 40, right: 20, bottom: 50, left: 30 },
  },
  tooltip: {
    style: {
      fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
      fontSize: 12,
      padding: 5,
      fill: "#455A64",
    },
  },
};

// bar chart function
function BarChart(props) {
  // if the prop is taskData, uses data for all students
  if (props.taskData) {
    const difficultyBar = props.taskData.map((item) => ({
      task: item.task,
      difficulty: item.difficulty,
      fun: item.fun,
      label: `Task ${item.task}, Difficulty: ${item.difficulty}`,
    }));

    const funBar = props.taskData.map((item) => ({
      task: item.task,
      fun: item.fun,
      label: `Task ${item.task}, Fun: ${item.fun}`,
    }));

    // returns difficulty and fun bar if both are checked true
    if (props.difficultyCheck && props.funCheck) {
      return (
        <VictoryChart
          domain={{ y: [0, 35] }}
          domainPadding={10}
          theme={theme}
          width={1000}
          height={300}
        >
          <VictoryAxis
            dependentAxis
            tickValues={[0, 5, 10, 15, 20, 25, 30, 35]}
            style={{
              grid: { stroke: "#90A4AE", strokeWidth: 2 },
            }}
          />
          <VictoryGroup offset={4.5}>
            <VictoryBar
              style={{ data: { fill: "#DCE775" } }}
              labelComponent={
                <VictoryTooltip
                  flyoutStyle={{ stroke: "none" }}
                  constrainToVisibleArea
                />
              }
              data={difficultyBar}
              x="task"
              y="difficulty"
            />
            <VictoryBar
              style={{ data: { fill: "#006064" } }}
              labelComponent={
                <VictoryTooltip
                  flyoutStyle={{ stroke: "none" }}
                  constrainToVisibleArea
                />
              }
              data={funBar}
              x="task"
              y="fun"
            />
          </VictoryGroup>
          <VictoryAxis
            style={{
              tickLabels: {
                angle: -45,
                textAnchor: "end",
                padding: 2,
              },
            }}
          />
        </VictoryChart>
      );
    }

    // returns only difficulty bar if fun bar check is false
    if (props.difficultyCheck) {
      return (
        <VictoryChart
          domain={{ y: [0, 35] }}
          domainPadding={10}
          theme={theme}
          width={1000}
          height={300}
        >
          <VictoryAxis
            dependentAxis
            tickValues={[0, 5, 10, 15, 20, 25, 30, 35]}
            style={{
              grid: { stroke: "#90A4AE", strokeWidth: 2 },
            }}
          />
          <VictoryBar
            style={{ data: { fill: "#DCE775" } }}
            labelComponent={
              <VictoryTooltip
                flyoutStyle={{ stroke: "none" }}
                constrainToVisibleArea
              />
            }
            data={difficultyBar}
            x="task"
            y="difficulty"
          />
          <VictoryAxis
            style={{
              tickLabels: {
                angle: -45,
                textAnchor: "end",
                padding: 2,
              },
            }}
          />
        </VictoryChart>
      );
    }

    // returns only fun bar if difficulty bar check is false
    if (props.funCheck) {
      return (
        <VictoryChart
          domain={{ y: [0, 35] }}
          domainPadding={10}
          theme={theme}
          width={1000}
          height={300}
        >
          <VictoryAxis
            dependentAxis
            tickValues={[0, 5, 10, 15, 20, 25, 30, 35]}
            style={{
              grid: { stroke: "#90A4AE", strokeWidth: 2 },
            }}
          />
          <VictoryBar
            style={{ data: { fill: "#006064" } }}
            labelComponent={
              <VictoryTooltip
                flyoutStyle={{ stroke: "none" }}
                constrainToVisibleArea
              />
            }
            data={funBar}
            x="task"
            y="fun"
          />
          <VictoryAxis
            style={{
              tickLabels: {
                angle: -45,
                textAnchor: "end",
                padding: 2,
              },
            }}
          />
        </VictoryChart>
      );
    }

    // returns empty chart if both difficulty and fun bar check are false
    return (
      <VictoryChart
        domain={{ y: [0, 35] }}
        domainPadding={10}
        theme={theme}
        width={1000}
        height={300}
      >
        <VictoryAxis
          dependentAxis
          tickValues={[0, 5, 10, 15, 20, 25, 30, 35]}
          style={{
            grid: { stroke: "#90A4AE", strokeWidth: 2 },
          }}
        />
        <VictoryBar
          style={{ data: { fill: "#006064" } }}
          labelComponent={
            <VictoryTooltip
              flyoutStyle={{ stroke: "none" }}
              constrainToVisibleArea
            />
          }
          data={props.taskData}
          x="task"
        />
        <VictoryAxis
          style={{
            tickLabels: {
              angle: -45,
              textAnchor: "end",
              padding: 2,
            },
          }}
        />
      </VictoryChart>
    );
  }

  // if the prop is taskDataStudent, uses data for individual student
  if (props.taskDataStudent) {
    const difficultyBar = props.taskDataStudent.map((item) => ({
      task: item.task,
      difficulty: item.difficulty,
      fun: item.fun,
      label: `Task ${item.task}, Difficulty: ${item.difficulty}`,
    }));

    const funBar = props.taskDataStudent.map((item) => ({
      task: item.task,
      fun: item.fun,
      label: `Task ${item.task}, Fun: ${item.fun}`,
    }));

    // returns difficulty and fun bar if both are checked true
    if (props.difficultyCheck && props.funCheck) {
      return (
        <VictoryChart
          domain={{ y: [0, 5] }}
          domainPadding={10}
          theme={theme}
          width={1000}
          height={300}
        >
          <VictoryAxis
            dependentAxis
            tickValues={[0, 1, 2, 3, 4, 5]}
            style={{
              grid: { stroke: "#90A4AE", strokeWidth: 2 },
            }}
          />

          <VictoryGroup offset={4.5}>
            <VictoryBar
              style={{ data: { fill: "#DCE775" } }}
              labelComponent={
                <VictoryTooltip
                  flyoutStyle={{ stroke: "none" }}
                  constrainToVisibleArea
                />
              }
              data={difficultyBar}
              x="task"
              y="difficulty"
            />
            <VictoryBar
              style={{ data: { fill: "#006064" } }}
              labelComponent={
                <VictoryTooltip
                  flyoutStyle={{ stroke: "none" }}
                  constrainToVisibleArea
                />
              }
              data={funBar}
              x="task"
              y="fun"
            />
          </VictoryGroup>
          <VictoryAxis
            style={{
              tickLabels: {
                angle: -45,
                textAnchor: "end",
                padding: 2,
              },
            }}
          />
        </VictoryChart>
      );
    }

    // returns only difficulty bar if fun bar check is false
    if (props.difficultyCheck) {
      return (
        <VictoryChart
          domain={{ y: [0, 5] }}
          domainPadding={10}
          theme={theme}
          width={1000}
          height={300}
        >
          <VictoryAxis
            dependentAxis
            tickValues={[0, 1, 2, 3, 4, 5]}
            style={{
              grid: { stroke: "#90A4AE", strokeWidth: 2 },
            }}
          />
          <VictoryBar
            style={{ data: { fill: "#DCE775" } }}
            labelComponent={
              <VictoryTooltip
                flyoutStyle={{ stroke: "none" }}
                constrainToVisibleArea
              />
            }
            data={difficultyBar}
            x="task"
            y="difficulty"
          />
          <VictoryAxis
            style={{
              tickLabels: {
                angle: -45,
                textAnchor: "end",
                padding: 2,
              },
            }}
          />
        </VictoryChart>
      );
    }

    // returns only fun bar if difficulty bar check is false
    if (props.funCheck) {
      return (
        <VictoryChart
          domain={{ y: [0, 5] }}
          domainPadding={10}
          theme={theme}
          width={1000}
          height={300}
        >
          <VictoryAxis
            dependentAxis
            tickValues={[0, 1, 2, 3, 4, 5]}
            style={{
              grid: { stroke: "#90A4AE", strokeWidth: 2 },
            }}
          />
          <VictoryBar
            style={{ data: { fill: "#006064" } }}
            labelComponent={
              <VictoryTooltip
                flyoutStyle={{ stroke: "none" }}
                constrainToVisibleArea
              />
            }
            data={funBar}
            x="task"
            y="fun"
          />
          <VictoryAxis
            style={{
              tickLabels: {
                angle: -45,
                textAnchor: "end",
                padding: 2,
              },
            }}
          />
        </VictoryChart>
      );
    }

    // returns empty chart if both difficulty and fun bar check are false
    return (
      <VictoryChart
        domain={{ y: [0, 5] }}
        domainPadding={10}
        theme={theme}
        width={1000}
        height={300}
      >
        <VictoryAxis
          dependentAxis
          tickValues={[0, 1, 2, 3, 4, 5]}
          style={{
            grid: { stroke: "#90A4AE", strokeWidth: 2 },
          }}
        />
        <VictoryBar
          style={{ data: { fill: "#006064" } }}
          labelComponent={
            <VictoryTooltip
              flyoutStyle={{ stroke: "none" }}
              constrainToVisibleArea
            />
          }
          data={props.taskDataStudent}
          x="task"
        />
        <VictoryAxis
          style={{
            tickLabels: {
              angle: -45,
              textAnchor: "end",
              padding: 2,
            },
          }}
        />
      </VictoryChart>
    );
  }
}
export default BarChart;
