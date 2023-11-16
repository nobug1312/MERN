import { Container } from '@mui/material'
import * as React from 'react'
import AppBar from '~/components/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
function Board() {

  return (
    <Container disableGutters maxWidth={false} sx={{ height : '100vh' }}>
      <AppBar></AppBar>
      <BoardBar></BoardBar>
      <BoardContent></BoardContent>
    </Container>
  )
}

export default Board