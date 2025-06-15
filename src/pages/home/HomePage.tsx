import React from 'react'
import { Container, Typography, Button } from '@mui/material'

import { useAuth } from '@/app/context/AuthProvider'

export const HomePage: React.FC = () => {
  const { changeName } = useAuth()

  return (
    <Container
      component='section'
      sx={{
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
      }}
    >
      <Typography variant='h3' align='center' sx={{ color: 'white' }}>
        Приветствую тебя во вселенной Рика и Морти!
      </Typography>
      <Button
        variant='contained'
        color='secondary'
        onClick={() => changeName(null)}
      >
        Exit
      </Button>
    </Container>
  )
}
