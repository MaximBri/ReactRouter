import {
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputAdornment,
  Typography,
} from '@mui/material'
import type { FC } from 'react'

type Sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

const sizeMap: Record<Sizes, 'small' | 'medium'> = {
  xs: 'small',
  sm: 'small',
  md: 'medium',
  lg: 'medium',
  xl: 'medium',
}

const radiusMap: Record<Sizes, number> = {
  xs: 2,
  sm: 5,
  md: 10,
  lg: 15,
  xl: 20,
}

export interface InputProps {
  name: string
  value: string
  variant?: 'default' | 'filled' | 'unstyled'
  size?: Sizes
  radius?: Sizes
  asterisk?: boolean
  label?: string
  description?: string
  placeholder?: string
  error?: string
  type?: 'password' | 'text' | 'number' | 'radio' | 'email'
  valueList?: string[]
  decorImagePath?: string
}

export const Input: FC<InputProps> = (props) => {
  const {
    variant = 'default',
    size = 'md',
    radius = 'md',
    asterisk = false,
    label,
    description,
    error,
    type = 'text',
    value = '',
    name,
    placeholder,
    valueList,
    decorImagePath,
  } = props

  const muiVariant: 'outlined' | 'filled' | 'standard' =
    variant === 'filled'
      ? 'filled'
      : variant === 'unstyled'
      ? 'standard'
      : 'outlined'

  const commonProps = {
    name,
    size: sizeMap[size],
    variant: muiVariant,
    placeholder,
    error: Boolean(error),
    helperText: error || description,
    InputProps: decorImagePath
      ? {
          endAdornment: (
            <InputAdornment position='end'>
              <img
                src={`/images/${decorImagePath}`}
                alt='decor'
                style={{ width: 16, height: 16 }}
              />
            </InputAdornment>
          ),
        }
      : undefined,
    sx: {
      backgroundColor: 'white',
      borderRadius: radiusMap[radius],
      '& .MuiOutlinedInput-root': {
        backgroundColor: 'white',
        borderRadius: radiusMap[radius],
      },
      '& .MuiFilledInput-root': {
        backgroundColor: 'white',
        borderRadius: radiusMap[radius],
      },
      '& .MuiInput-root': variant === 'unstyled' && {
        '&:before, &:after': { borderBottom: 'none' },
        backgroundColor: 'white',
      },
      maxWidth: '100%',
    } as const,
  }

  if (type === 'radio' && valueList) {
    return (
      <FormControl
        error={Boolean(error)}
        component='fieldset'
        sx={{
          backgroundColor: 'white',
          p: 2,
          borderRadius: radiusMap[radius],
        }}
      >
        {label && <FormLabel required={asterisk}>{label}</FormLabel>}
        <RadioGroup
          name={name}
          value={value}
          row
          sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          {valueList.map((item) => (
            <FormControlLabel
              key={item}
              value={item}
              control={<Radio size={sizeMap[size]} />}
              label={item}
              sx={{ color: 'black' }}
            />
          ))}
        </RadioGroup>
        {error && (
          <Typography color='error' variant='caption'>
            {error}
          </Typography>
        )}
        {!error && description && (
          <Typography variant='caption'>{description}</Typography>
        )}
      </FormControl>
    )
  }

  return (
    <TextField
      {...commonProps}
      label={label}
      required={asterisk}
      type={type}
      value={value}
      onChange={() => {}}
    />
  )
}
