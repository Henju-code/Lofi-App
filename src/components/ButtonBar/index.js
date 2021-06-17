import React from 'react';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: theme.spacing(4),
    fontWeight: 'bold'
  }
}));

function ButtonBar(props) {
  const classes = useStyles()

  return <Button className={classes.root} color="secondary" >{props.children}</Button>;
}

export default ButtonBar;