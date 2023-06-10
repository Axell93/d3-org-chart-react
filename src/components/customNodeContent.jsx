function getInitials(name) {
  const words = name.split(" ");
  const len = words.length;
  let initials = "";
  if (len <= 1) {
    if (words[0].trim().length > 1) {
      return words[0].slice(0, 2);
    }
    return words[0];
  }
  for (let i = 0; i < len; i++) {
    const eachWord = words[i];
    if (eachWord.trim().length > 0) {
      initials = initials + eachWord.slice(0, 1);
    }
    if (initials.length >= 2) {
      return initials;
    }
  }
}

const CustomNodeContent = (d) => {
  const styles = {
    cardWrapper: {
      paddingTop: "30px",
      backgroundColor: "none",
      marginLeft: "1px",
      height: `${d.height}px`,
      borderRadius: "2px",
      overflow: "visible",
      cursor: "pointer",
    },
    cardAccent: {
      height: "20px",
      backgroundColor: `${d.highlightColor}`,
      borderTopLeftRadius: "6px",
      borderTopRightRadius: "6px",
    },
    rootCardWrapper: {
      paddingTop: "30px",
      backgroundColor: "none",
      marginLeft: "1px",
      height: `${d.height}px`,
      borderRadius: "2px",
      overflow: "visible",
      display: "flex",
      justifyContent: "center",
    },
    rootCardHightlight: {
      display: "flex",
      justifyContent: "center",
      alignSelf: "flex-end",
      width: "145px",
      height: `${d.height - 190}px`,
      backgroundColor: `${d.primaryColor}`,
      borderRadius: "6px",
      boxShadow:
        "0px 3px 8px rgba(0, 0, 0, 0.06), 0px 19px 20px rgba(0, 0, 0, 0.03)",
      cursor: "pointer",
    },
    cardHighlight: {
      height: `${d.height - 55}px`,
      paddingTop: "1px",
      backgroundColor: "transparent",
      borderBottomLetRadius: "6px",
      borderBottomRightRadius: "6px",
      boxShadow:
        "0px 3px 8px rgba(0, 0, 0, 0.06), 0px 19px 20px rgba(0, 0, 0, 0.03)",
    },
    avatar: {
      marginTop: "-50px",
      marginLeft: `${d.width / 2 - 43}px`,
      borderRadius: "100px",
      width: "80px",
      height: "80px",
      border: "5px solid white",
      fontWeight: "400",
      fontSize: "24px",
      backgroundColor: `${d.data.avatarColor}`,
      color: "#151618",
      fontFamily: "Noto Sans",
      display: "table",
      position: "absolute",
    },
    avatarInitials: {
      display: "table-cell",
      verticalAlign: "middle",
      textAlign: "center",
    },
    cardContent: {
      padding: "0px 32px 34px 32px",
      textAlign: "center",
      color: "#151618",
    },
    rootCardContent: {
      textAlign: "center",
      color: "#151618",
      alignSelf: "center",
      textTransform: "uppercase",
      justifyContent: "center",
      display: "flex",
      padding: "9px 16px 7px",
    },
    empName: { padding: "30px 0 0 0" },
    rootButtonText: { margin: "0", color: `#fff`, fontSize: "14px" },
    jobTitle: { fontSize: "16px", lineHeight: "24px" },
  };

  return (
    <>
      {d.data.personPositionId != "root" ? (
        <div style={styles.cardWrapper}>
          <div style={styles.cardAccent}></div>
          <div className="highlight" style={styles.cardHighlight}>
            <div style={styles.avatar}>
              <div style={styles.avatarInitials}>
                {getInitials(d.data.name)}
              </div>
            </div>

            <div style={styles.cardContent}>
              <h3 style={styles.empName}> {d.data.name} </h3>
              <div style={styles.jobTitle}> {d.data.jobTitle} </div>
              <div style={styles.jobTitle}>{d.data.positionName}</div>
              <div style={styles.jobTitle}>{d.data.location}</div>
            </div>
          </div>
        </div>
      ) : (
        <div style={styles.rootCardWrapper}>
          <div style={styles.rootCardHightlight}>
            <div style={styles.rootCardContent}>
              <h3 style={styles.rootButtonText}> {d.data.name} </h3>
              <div style={styles.jobTitle}></div>
              <div style={styles.jobTitle}></div>
              <div style={styles.jobTitle}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomNodeContent;
