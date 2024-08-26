import React, { useCallback, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { Icon } from '@/components/Icon'
import { useColorScheme } from '@/components/useColorScheme'
import Colors from '@/constants/Colors'

interface TodoAgendaItemProps {
  item: {
    title: string
    description?: string
    completed?: boolean
  }
}

export function TodoAgendaItem({ item }: TodoAgendaItemProps) {
  const colorScheme = useColorScheme()
  const [completed, setCompleted] = useState(item.completed || false)

  const toggleCompleted = useCallback(() => {
    setCompleted((prev) => !prev)
  }, [])

  return (
    <TouchableOpacity
      onPress={toggleCompleted}
      style={[
        styles.container,
        { backgroundColor: Colors[colorScheme].background },
      ]}
    >
      <View style={styles.checkboxContainer}>
        <Icon
          name={completed ? 'check-square' : 'square'}
          size={24}
          color={completed ? '#4CAF50' : '#757575'}
        />
      </View>
      <View style={styles.contentContainer}>
        <Text style={[styles.title, completed && styles.completedText]}>
          {item.title}
        </Text>
        {item.description && (
          <Text style={[styles.description, completed && styles.completedText]}>
            {item.description}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 8,
    marginVertical: 4,
    marginHorizontal: 8,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
  },
  checkboxContainer: {
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
})
