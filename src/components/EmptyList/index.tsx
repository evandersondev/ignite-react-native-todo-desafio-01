import { Image, Text, View } from 'react-native'
import { styles } from './styles'

export function EmptyList() {
  return (
    <>
      <View style={styles.divisor} />
      <Image
        style={styles.clipboard}
        source={require('../../../assets/clipboard.png')}
      />
      <Text style={{ fontWeight: 'bold', ...styles.emptyListText }}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.emptyListText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </>
  )
}
