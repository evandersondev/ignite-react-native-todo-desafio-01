import { Image, TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'

interface HeaderProps {
  inputValue: string
  onTaskChange: (taskValue: string) => void
  onTaskSubmit: () => void
}

export function Header({
  inputValue,
  onTaskChange,
  onTaskSubmit,
}: HeaderProps) {
  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../../../assets/logo.png')} />

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          style={styles.input}
          value={inputValue}
          onChangeText={onTaskChange}
        />
        <TouchableOpacity onPress={onTaskSubmit} style={styles.button}>
          <AntDesign name="pluscircleo" size={16} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  )
}
