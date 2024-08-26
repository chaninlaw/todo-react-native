import { useState } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Stack } from 'expo-router'
import { CalendarProvider, ExpandableCalendar } from 'react-native-calendars'

import { useColorScheme } from '@/components/useColorScheme'
import { useClientOnlyValue } from '@/components/useClientOnlyValue'

import Colors from '@/constants/Colors'

export default function TabLayout() {
  const [date] = useState(new Date().toISOString())
  const colorScheme = useColorScheme()

  return (
    <CalendarProvider date={date}>
      <Stack
        screenOptions={{
          headerShown: useClientOnlyValue(false, true),
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            header: () => (
              <SafeAreaView
                style={{
                  backgroundColor: Colors[colorScheme].background,
                }}
              >
                <ExpandableCalendar
                  style={styles.expandableCalendar}
                  theme={{
                    calendarBackground: Colors[colorScheme].background,
                    indicatorColor: Colors[colorScheme].background,
                  }}
                />
              </SafeAreaView>
            ),
          }}
        />
      </Stack>
    </CalendarProvider>
  )
}

const styles = StyleSheet.create({
  expandableCalendar: {
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 8,
      width: 0,
    },
  },
})
