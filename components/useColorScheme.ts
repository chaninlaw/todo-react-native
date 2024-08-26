import { useColorScheme as useDefaultColorScheme } from 'react-native'

export function useColorScheme() {
  const colorScheme = useDefaultColorScheme()
  return colorScheme ?? 'light'
}
