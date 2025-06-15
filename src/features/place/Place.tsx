import React from 'react'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Box,
} from '@mui/material'

export interface PlaceModel {
  id: number
  name: string
  type: string
  dimension: string
  created: Date
}

interface PlaceProps {
  data: PlaceModel
}

export const Place: FC<PlaceProps> = ({ data }) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardActionArea
      component={Link}
      to={`/places/${data.id}`}
      sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
    >
      <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
        <Typography variant='h6' gutterBottom>
          {data.name}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Typography variant='body2'>Type: {data.type}</Typography>
          <Typography variant='body2'>Dimension: {data.dimension}</Typography>
          <Typography variant='body2'>
            Created: {data.created.toLocaleDateString('ru-RU')}
          </Typography>
        </Box>
      </CardContent>
    </CardActionArea>
  </Card>
)
