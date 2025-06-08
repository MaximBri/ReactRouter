import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Box, CircularProgress, Container, Typography } from '@mui/material'
import axios from 'axios'

import type { EpisodeModel } from '@/features/eposide/Episode'
import { routes } from '@/shared/configs/routes'

export const EpisodePage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [episode, setEpisode] = useState<EpisodeModel | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getPlace = async () => {
    try {
      const response = await axios.get<EpisodeModel>(
        `https://rickandmortyapi.com/api/episode/${id}`
      )
      setEpisode({
        ...response.data,
        created: new Date(response.data.created),
      })
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

  if (!episode) return null

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
          {episode.name}
        </Typography>
        <Typography variant='body1'>
          <strong>Episode:</strong> {episode.episode}
        </Typography>
        <Typography variant='body1'>
          <strong>Air Date:</strong> {episode.air_date}
        </Typography>
        <Typography variant='body1'>
          <strong>Created:</strong>{' '}
          {episode.created.toLocaleDateString('ru-RU')}
        </Typography>
      </Box>
    </Container>
  )
}
