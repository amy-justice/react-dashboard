import React from 'react'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'

function PocketPanel() {
  return (
    <Grid item xs={4} spacing={3}>
        <Box border={1} mx={3} my={1} p={3}>
            Pocket
        </Box>
    </Grid>
  )
}

export default PocketPanel