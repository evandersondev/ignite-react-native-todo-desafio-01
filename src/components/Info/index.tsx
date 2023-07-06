import { Text, View } from 'react-native'
import { styles } from './styles'

interface InfoProps {
  totalTasks: number
  totalTasksFinished: number
}

export function Info({ totalTasks, totalTasksFinished }: InfoProps) {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.itemInfoContainer}>
        <Text style={styles.itemInfoCreatedText}>Criadas</Text>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{totalTasks}</Text>
        </View>
      </View>

      <View style={styles.itemInfoContainer}>
        <Text style={styles.itemInfoClosedText}>Concluídas</Text>
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{totalTasksFinished}</Text>
        </View>
      </View>
    </View>
  )
}
