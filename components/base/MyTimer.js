//Alex created
import { withStyles, makeStyles } from "@mui/styles";
import LinearProgress from "@mui/material/LinearProgress";

const BorderLinearProgress = withStyles((theme) => {
    return {
      root: {
        width: 30,
        height: "100%",
      },
      colorPrimary: {
        backgroundColor: "rgba(0, 0, 0, 0.25);",
      },
      bar: {
        transform: ({ value }) => {
          return `translateY(${value}%) !important`;
        },
        backgroundColor: "#FC5757",
      },
    };
  })(LinearProgress);

  const useStyles = makeStyles({
    root: {
      flexGrow: 1,
      height: 638,
      gap: 10,
      display: "flex",
      position: "fixed",
    },
    stats: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
    },
  });
  
  export default function Basic_new(){
    const classes = useStyles();
    return(
        <>
            <div className={classes.root}>
                    <div className={classes.stats}>
                        {/* {!isFeedback && ( */}
                        <BorderLinearProgress variant="determinate" value={30} />
                        {/* )} */}
                    </div>
            </div>
        </>
    );
  }