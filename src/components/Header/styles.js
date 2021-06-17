import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    avatar:{
        width: 45,
        height: 45,
        margin: theme.spacing(1) 
    },
    grow: {
      flexGrow: 1
  }
  }));

  export default useStyles;