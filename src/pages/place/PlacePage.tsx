import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, CircularProgress, Container, Typography } from '@mui/material'
import axios from 'axios'

import { routes } from '@/shared/configs/routes'

export interface PlaceModel {
  id: number
  name: string
  type: string
  dimension: string
  created: Date
}

export const PlacePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [place, setPlace] = useState<PlaceModel | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getPlace = async () => {
    try {
      const response = await axios.get<PlaceModel>(
        `https://rickandmortyapi.com/api/location/${id}`
      )
      setPlace(response.data)
    } catch (error) {
      console.log(error)
      navigate(routes.BASE)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getPlace()
  }, [id])

  if (isLoading) {
    return (
      <Box display='flex' justifyContent='center' mt={4}>
        <CircularProgress />
      </Box>
    )
  }

  if (!place) return null

  return (
    <Container component='section' sx={{ py: 4 }}>
      <Box
        sx={{
          border: 1,
          borderRadius: 2,
          p: 3,
        }}
      >
        <Typography variant='h4' gutterBottom>
          {place.name}
        </Typography>
        <Typography variant='body1'>
          <strong>Type:</strong> {place.type}
        </Typography>
        <Typography variant='body1'>
          <strong>Dimension:</strong> {place.dimension}
        </Typography>
        <Typography variant='body1'>
          <strong>Created:</strong>{' '}
          {new Date(place.created).toLocaleDateString('ru-RU')}
        </Typography>
      </Box>
    </Container>
  )
}
