import { Box } from '@mui/material'
import React from 'react'
import ModeSelect from '~/components/ModeSelect'
function AppBar() {
  return (
    <>
      <Box sx={{ backgroundColor:'secondary.main', width: '100%', height: (theme) => theme.trello.appBarHeight, display:'flex', alignItems:'center' }}>
        <ModeSelect>Icon</ModeSelect>
      </Box>
    </>
  )
}

export default AppBar