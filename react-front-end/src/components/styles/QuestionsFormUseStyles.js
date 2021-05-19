
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
  },

  backButton: {
    marginRight: "1rem",
    marginLeft: "3.5vw",
    borderRadius: "2rem",
    color: "white"
  },

  button: {
    marginLeft: "3.5vw",
    borderRadius: "2rem",
    color: "white"
  },

  submitButton: {
    marginRight: "3.5vw",
    marginLeft:  "3.5vw",
    borderRadius: "2rem",
    color: "white"
  },

  question: {
    paddingTop: "1.2rem",
    textAlign: "center"
  },

  textField: {
    backgroundColor: "white",
    borderRadius: "0.2rem",
    border: "red",
  }
}));

export default useStyles;