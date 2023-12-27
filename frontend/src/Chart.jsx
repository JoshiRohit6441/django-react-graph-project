import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const Chart = ({ data, xField, yField, color, heading }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartContainer = d3.select(chartRef.current);

    chartContainer.selectAll("*").remove();

    const width = chartContainer.node().getBoundingClientRect().width - 40;
    const height = 400;
    const margin = { top: 40, right: 50, bottom: 60, left: 50 };
    const svg = chartContainer
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const fieldData = data.map((entry) => entry[yField]);

    const xScale = d3
      .scaleBand()
      .domain(data.map((entry) => entry[xField]))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(fieldData) || 1])
      .range([height - margin.bottom, margin.top]);

    const tooltip = chartContainer
      .append("div")
      .style("position", "absolute")
      .style("visibility", "hidden")
      .style("background", "rgba(255, 255, 255, 0.9)")
      .style("padding", "10px")
      .style("border", "1px solid #ccc")
      .style("border-radius", "5px");

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    svg
      .append("g")
      .attr("class", "x-axis")
      .attr("transform", `translate(0, ${height - margin.bottom})`)
      .call(xAxis)
      .append("text")
      .attr("x", width / 2)
      .attr("y", margin.bottom - 10)
      .attr("text-anchor", "middle")
      .text(xField);

    svg
      .append("g")
      .attr("class", "y-axis")
      .attr("transform", `translate(${margin.left}, 0)`)
      .call(yAxis)
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "-2em")
      .attr("text-anchor", "end")
      .text(yField);

    svg
      .selectAll("rect")
      .data(fieldData)
      .enter()
      .append("rect")
      .attr("x", (d, i) => xScale(data[i][xField]))
      .attr("y", (d) => yScale(parseFloat(d)))
      .attr("height", (d) => height - margin.bottom - yScale(parseFloat(d)))
      .attr("width", xScale.bandwidth())
      .attr("fill", color)
      .on("mouseover", (event, d, i) => {
        if (data[i]) {
          tooltip
            .html(
              `<strong>${xField}:</strong> ${data[i][xField]}<br><strong>${yField}:</strong> ${d}`
            )
            .style("visibility", "visible")
            .style("left", event.pageX + "px")
            .style("top", event.pageY + "px");
        }
      })
      .on("mouseout", () => {
        tooltip.style("visibility", "hidden");
      });

    chartContainer.append("h2").text(heading).style("text-align", "center");
  }, [data, xField, yField, color, heading]);

  return <div ref={chartRef} className="chart"></div>;
};

export default Chart;
