import React from 'react';
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    boxHolder: {

    }
}))

function CircularComponent() {
  return (
      <div>
          <Box border={2}>
            <Box borderRadius="50%" border={1}>
                sample text
            </Box>
          </Box>
      </div>
  )
}

export default CircularComponent;
