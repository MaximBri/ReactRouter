import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Typography,
} from '@mui/material'
import axios from 'axios'

import type { CharacterModel } from '@/features/character/Character'
import { routes } from '@/shared/configs/routes'

export const CharacterPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [character, setCharacter] = useState<CharacterModel | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const fetchCharacter = async () => {
    try {
      const response = await axios.get<CharacterModel>(
        `https://rickandmortyapi.com/api/character/${id}`
      )
      setCharacter({
        ...response.data,
        created: new Date(response.data.created),
      })
    } catch (error) {
      navigate(routes.BASE)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacter()
  }, [id])

  if (isLoading) {
    return (
      <Box display='flex' justifyContent='center' mt={4}>
        <CircularProgress />
      </Box>
    )
  }

  if (!character) return null

  return (
    <Container component='section' sx={{ py: 4 }}>
      <Card sx={{ maxWidth: 600, mx: 'auto' }}>
        <CardMedia
          component='img'
          image={character.image}
          alt={character.name}
        />
        <CardContent>
          <Typography variant='h4' gutterBottom>
            {character.name}
          </Typography>
          <Typography variant='body1'>
            <strong>Status:</strong> {character.status}
          </Typography>
          <Typography variant='body1'>
            <strong>Species:</strong> {character.species}
          </Typography>
          {character.type && (
            <Typography variant='body1'>
              <strong>Type:</strong> {character.type}
            </Typography>
          )}
          <Typography variant='body1'>
            <strong>Gender:</strong> {character.gender}
          </Typography>
          <Typography variant='body1'>
            <strong>Registered:</strong>{' '}
            {new Date(character.created).toLocaleDateString('ru-RU')}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}
