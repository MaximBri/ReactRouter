import { memo, type FC } from 'react'
import { Link } from 'react-router-dom'

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

export interface CharacterModel {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  gender: 'male' | 'female' | 'unknown'
  image: string
  created: Date
}

interface CharacterProps {
  data: CharacterModel
}

export const Character: FC<CharacterProps> = memo(({ data }) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-10px) scale(1.02)',
        boxShadow: 6,
      },
      filter: data.status === 'Dead' ? 'grayscale(1)' : 'none',
      bgcolor: 'background.paper',
    }}
  >
    <CardActionArea
      component={Link}
      to={`/characters/${data.id}`}
      sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component='img'
        image={data.image}
        alt={data.name}
        sx={{ borderRadius: 2, border: 1, borderColor: 'divider' }}
      />

      <CardContent
        sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}
      >
        <Typography variant='h6' align='center'>
          {data.name}
        </Typography>
        {data.type && (
          <Typography variant='body2'>Type: {data.type}</Typography>
        )}
        <Typography variant='body2'>Gender: {data.gender}</Typography>
        <Typography variant='body2'>
          Created: {data.created.toLocaleDateString('ru-RU')}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
))
