import type { InputProps } from '@/features/input/ui/Input'
import type { SignupInputsModel } from './loginModel'

interface InputModel
  extends Pick<
    InputProps,
    | 'variant'
    | 'size'
    | 'radius'
    | 'asterisk'
    | 'label'
    | 'description'
    | 'placeholder'
    | 'type'
    | 'valueList'
    | 'decorImagePath'
  > {
  key: keyof SignupInputsModel
  name: string
}

export const inputsList: InputModel[] = [
  { name: 'Nickname', key: 'nickname', decorImagePath: 'link.svg' },
  { name: 'Name', key: 'name' },
  // { name: 'Email', key: 'email' },
  { name: 'Email', key: 'email', type: 'email' },
  { name: 'Sex', key: 'sex', type: 'radio', valueList: ['male', 'female'] },
  { name: 'Password', key: 'password', type: 'password' },
  { name: 'Repeat password', key: 'repeatPassword', type: 'password' },
]
