
import { makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

	root: {
		marginLeft: "3.5vw",
		marginRight: "3.5vw",
    textAlign: "center"
	},

  buttonContainer: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "flex-end",
    // marginRight: "0rem"
  },

  backButton: {
    marginRight: "1rem",
    marginLeft: "3.5vw",
    backgroundColor: "FE5F55 !important",
  },

  submitButton: {
    marginRight: "3.5vw"
  },

  question: {
    paddingTop: "1.2rem",
    textAlign: "center"
  },

  textField: {
    backgroundColor: "white",
    borderRadius: "0.2rem",
    border: "#ffeee4",
    
  }

}));

export default useStyles;