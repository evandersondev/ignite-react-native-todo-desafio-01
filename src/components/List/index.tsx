import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons'
import { styles } from './styles'
import { EmptyList } from '../EmptyList'

interface Task {
  id: string
  title: string
  checked: boolean
}

interface ListProps {
  tasks: Task[]
  onChangeChecked: (id: string) => void
  onDeleteTask: (id: string) => void
}

export function List({ tasks, onChangeChecked, onDeleteTask }: ListProps) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <TouchableOpacity
            style={styles.checkButton}
            onPress={() => onChangeChecked(item.id)}
          >
            <Text>
              {item.checked ? (
                <AntDesign name="checkcircle" size={18} color="#5E60CE" />
              ) : (
                <Feather name="circle" size={18} color="#4EA8DE" />
              )}
            </Text>
          </TouchableOpacity>

          <Text
            style={{
              textDecorationLine: item.checked ? 'line-through' : 'none',
              color: item.checked ? '#808080' : '#FFFFFF',
              ...styles.itemTitleText,
            }}
          >
            {item.title}
          </Text>

          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => onDeleteTask(item.id)}
          >
            <Text>
              <Ionicons name="ios-trash-outline" size={18} color="#808080" />
            </Text>
          </TouchableOpacity>
        </View>
      )}
      ListEmptyComponent={<EmptyList />}
    />
  )
}
