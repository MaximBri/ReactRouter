import React from 'react'
import { Input } from '@/features/input'
import { inputsList } from './model/inputsList'
import { loginModel } from './model/loginModel'
import { Container, Box, Stack, Button } from '@mui/material'

export const LoginPage: React.FC = () => {
  const {
    formRef,
    handleChange,
    handleReset,
    handleSubmit,
    inputsData,
    getError,
    name,
  } = loginModel()

  if (name) return null

  return (
    <Container maxWidth='sm' sx={{ mt: 8 }}>
      <Box
        component='form'
        ref={formRef}
        onSubmit={handleSubmit}
        onChange={handleChange}
        onReset={handleReset}
        noValidate
      >
        <Stack spacing={2}>
          {inputsList.map((item) => (
            <Input
              key={item.key}
              name={item.key}
              label={item.name}
              type={item.type}
              value={inputsData[item.key]}
              asterisk
              error={getError(item.key)}
              valueList={item.valueList}
              decorImagePath={item.decorImagePath}
            />
          ))}
          <Button type='submit' variant='contained' fullWidth>
            Отправить
          </Button>
          <Button type='reset' variant='outlined' fullWidth>
            Сбросить
          </Button>
        </Stack>
      </Box>
    </Container>
  )
}
