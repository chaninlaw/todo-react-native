import { SectionListData, StyleSheet } from 'react-native'

import { View } from '@/components/Themed'
import { AgendaList } from 'react-native-calendars'
import { TodoAgendaItem } from '@/components/TodoAgendaItem'
import Colors from '@/constants/Colors'
import { useColorScheme } from '@/components/useColorScheme'

const data: SectionListData<{
  title: string
  description?: string
  completed?: boolean
}>[] = [
  {
    title: '2023-05-22',
    data: [
      { title: 'Buy groceries', description: 'Milk, eggs, bread' },
      { title: 'Call mom', completed: true },
    ],
    renderItem: ({ item }) => <TodoAgendaItem item={item} />,
  },
]

export default function HomeScreen() {
  const colorScheme = useColorScheme()
  return (
    <View style={styles.container}>
      <AgendaList
        sections={data}
        style={{}}
        sectionStyle={{
          backgroundColor: Colors[colorScheme].background,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
})
