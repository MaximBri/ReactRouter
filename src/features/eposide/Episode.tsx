import type { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from '@mui/material'

export interface EpisodeModel {
  id: number
  name: string
  air_date: string
  episode: string
  created: Date
}

interface EpisodeProps {
  data: EpisodeModel
}

export const Episode: FC<EpisodeProps> = ({ data }) => {
  return (
    <Card
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <CardActionArea component={Link} to={`/episodes/${data.id}`}>
        <CardContent>
          <Typography variant='h6' gutterBottom>
            {data.name}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant='body2'>Air Date: {data.air_date}</Typography>
            <Typography variant='body2'>
              Created: {data.created.toLocaleDateString('ru-RU')}
            </Typography>
            <Typography variant='body2'>Episode: {data.episode}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
