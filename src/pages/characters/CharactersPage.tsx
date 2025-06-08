import type { FC } from 'react'
import { Box, Container, Typography, CircularProgress } from '@mui/material'

import { Character } from '@/features/character'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll'
import type { CharacterModel } from '@/features/character/Character'

export const CharactersPage: FC = () => {
  const { isLoading, data, lastNodeRef } = useInfiniteScroll<
    CharacterModel,
    HTMLLIElement
  >('https://rickandmortyapi.com/api/character')

  const characterList = data.map((item) => ({
    ...item,
    created: new Date(item.created),
  })) as CharacterModel[]

  return (
    <Container component='section' sx={{ py: 4 }}>
      <Typography variant='h4' align='center' gutterBottom>
        All Characters
      </Typography>

      <Box
        component='ul'
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'center',
          alignItems: 'stretch',
          listStyle: 'none',
          p: 0,
          m: 0,
        }}
      >
        {characterList.map((item, index) => {
          const isTrigger = index === characterList.length - 4
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
              <Character data={item} />
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
