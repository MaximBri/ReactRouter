import { Episode } from '@/features/eposide'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll'
import type { EpisodeModel } from '@/features/eposide/Episode'
import { Box, Container, Typography, CircularProgress } from '@mui/material'

export const EpisodesPage = () => {
  const { isLoading, data, lastNodeRef } = useInfiniteScroll<
    EpisodeModel,
    HTMLDivElement
  >('https://rickandmortyapi.com/api/episode')

  const episodes = data.map((item) => {
    return { ...item, created: new Date(item.created) }
  })

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant='h4' align='center' gutterBottom>
        Episodes
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
        {episodes.map((item, index) => {
          const isTrigger = index === episodes.length - 4
          return (
            <Box
              key={item.id}
              component='li'
              ref={isTrigger ? lastNodeRef : undefined}
              sx={{
                width: { xs: '100%', sm: '45%', md: '30%', lg: '22%' },
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Episode data={item} />
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
