import { Box } from '@mui/material'
import React from 'react'
import theme from '~/theme'
function BoardBar() {
  return (
    <>
      <Box sx={{ backgroundColor:'blue', width: '100%', height: theme.trello.boardBarHeight, display:'flex', alignItems:'center' }}>
      boardbar
      </Box>
    </>
  )
}

export default BoardBar