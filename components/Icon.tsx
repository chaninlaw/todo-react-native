import { FontAwesome } from '@expo/vector-icons'

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
interface IconProps extends React.ComponentProps<typeof FontAwesome> {}

export function Icon(props: IconProps) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />
}
