import React from 'react'
import { Place } from '@/features/place'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll'
import type { PlaceModel } from '@/features/place/Place'
import { Box, Container, Typography, CircularProgress } from '@mui/material'

export const PlacesPage: React.FC = () => {
  const { isLoading, data, lastNodeRef } = useInfiniteScroll<
    PlaceModel,
    HTMLLIElement
  >('https://rickandmortyapi.com/api/location')

  const places = data.map((item) => ({
    ...item,
    created: new Date(item.created),
  }))

  return (
    <Container component='section' sx={{ py: 4 }}>
      <Typography variant='h4' align='center' gutterBottom>
        Places
      </Typography>

      <Box
        component='ul'
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
          alignItems: 'stretch',
          listStyle: 'none',
          p: 0,
          m: 0,
        }}
      >
        {places.map((item, index) => {
          const isTrigger = index === places.length - 4
          return (
            <Box
              component='li'
              key={item.id}
              ref={isTrigger ? lastNodeRef : undefined}
              sx={{
                width: { xs: '100%', sm: '45%', md: '30%', lg: '22%' },
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Place data={item} />
            </Box>
          )
        })}
      </Box>

      {isLoading && (
        <Box display='flex' justifyContent='center' mt={4}>
          <CircularProgress />
        </Box>
      )}
    </Container>
  )
}
