import React from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { useAuth } from '@/app/context/AuthProvider'
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material'
import { navbarList } from './model/navbarList'

export const Navbar: React.FC = () => {
  const { pathname } = useLocation()
  const { name } = useAuth()

  return (
    <AppBar position='static' color='primary'>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {name && (
            <Typography variant='h6' component='div'>
              Hello, {name}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {navbarList.map((item) => {
            if (pathname === item.path) return null
            return (
              <Button
                key={item.path}
                component={RouterLink}
                to={item.path}
                color='inherit'
              >
                {item.name}
              </Button>
            )
          })}
        </Box>
      </Toolbar>
    </AppBar>
  )
}
