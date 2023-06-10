/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useLayoutEffect, useRef } from "react";
import { OrgChart } from "./util/d3-org-chart.jsx";
import ReactDOMServer from "react-dom/server";
import CustomNodeContent from "./components/customNodeContent.jsx";
import { Button } from "@mui/material";
import CustomExpandButton from "./components/customExpandComponent.jsx";
const highlightColor = "#0785c9";
const primaryColor = "#0c98dd";
const backgroundColor = "#81d2f5";

export const OrgChartComponent = (props, ref) => {
  const d3Container = useRef(null);
  let chart = null;

  function handleNodeClick(nodeId) {
    if (nodeId == "root") {
      return;
    }
    if (nodeId != "") {
      chart.setCentered(nodeId);
      chart.clearHighlighting();
      chart.setUpToTheRootHighlighted(nodeId);
      chart.render();
    }
  }
  function print() {
    chart.exportImg();
  }

  // We need to manipulate DOM
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    if (props.data && d3Container.current) {
      if (!chart) {
        chart = new OrgChart();
      }
      chart
        .container(d3Container.current)
        .data(props.data)
        .nodeWidth((d) => 330)
        .initialZoom(0.7)
        .nodeHeight((d) => 230)
        .childrenMargin((d) => 80)
        .compactMarginBetween((d) => 50)
        .compactMarginPair((d) => 80)
        .onNodeClick((d, i, arr) => {
          handleNodeClick(d);
        })
        .buttonContent((node) => {
          if (node.node.children || node.node._children) {
            return ReactDOMServer.renderToStaticMarkup(
              CustomExpandButton({
                isExpanded: Boolean(node.node.children),
                count:
                  node.node.children?.length || node.node._children?.length,
                accentColor: primaryColor,
                isRoot: node.node.data.personPositionId === "root",
              })
            );
          } else {
            return "<div></div>";
          }
        })
        .nodeContent((d, i, arr, state) => {
          d.highlightColor = highlightColor;
          d.primaryColor = primaryColor;
          return ReactDOMServer.renderToStaticMarkup(
            <CustomNodeContent {...d} />
          );
        })
        .highlightColor(highlightColor)
        .highlightBackgroundColor(backgroundColor)
        .render();
    }
  }, [props.data, d3Container.current]);

  return (
    <div>
      <div
        style={{
          padding: "30px 150px",
          maxHeight: "80vh",
        }}
      >
        <Button variant="contained" onClick={() => print()}>
          Print PDF
        </Button>
        <div ref={d3Container} />
      </div>
    </div>
  );
};
