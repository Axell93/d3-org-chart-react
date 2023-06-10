import PropTypes from "prop-types";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const CustomExpandButton = (props) => {
  const { isExpanded, count, accentColor, isRoot } = props;

  const styles = {
    closeBtn: {
      width: "45px",
      height: "30px",
      margin: "auto",
      color: "#fff",
      backgroundColor: accentColor,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid #d3d3d3",
      borderRadius: "16px",
      cursor: "pointer",
    },
    expandBtn: {
      width: "45px",
      height: "30px",
      margin: "auto",
      color: "#000",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "2px solid #d3d3d3",
      borderRadius: "16px",
      cursor: "pointer",
    },
    flex: {
      display: "flex",
    },
  };
  function checkExpandButton(isRoot, isExpanded) {
    if (isRoot) {
      return <div></div>;
    } else if (isExpanded) {
      return (
        <div style={styles.closeBtn}>
          <span style={{ display: "flex", height: "25px" }}>
            <ArrowUpwardIcon fill="white" />
          </span>
        </div>
      );
    } else {
      return (
        <div style={styles.expandBtn}>
          <span style={styles.flex}>{count}</span>
        </div>
      );
    }
  }

  return <>{checkExpandButton(isRoot, isExpanded)}</>;
};

CustomExpandButton.propTypes = {
  isRoot: PropTypes.boolean,
  accentColor: PropTypes.string,
  count: PropTypes.number,
  isExpanded: PropTypes.boolean,
};

CustomExpandButton.displayName = "CustomExpandButton";
export default CustomExpandButton;
