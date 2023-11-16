import { Box } from '@mui/material'
import React from 'react'
import theme from '~/theme'
function BoardContent() {
  return (
    <>
      <Box sx={{ width: '100%', height: theme.trello.boardContentHeight, display:'flex', alignItems:'center' }}>board content</Box>
    </>
  )
}

export default BoardContent