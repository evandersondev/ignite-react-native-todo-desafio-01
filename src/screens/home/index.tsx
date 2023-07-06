import { useState } from 'react'
import uuid from 'react-native-uuid'
import { View } from 'react-native'
import { styles } from './styles'
import { List } from '../../components/List'
import { Info } from '../../components/Info'
import { Header } from '../../components/Header'

interface Task {
  id: string
  title: string
  checked: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [taskInput, setTasksInput] = useState('')

  const totalTasks = tasks.length
  const totalTasksFinished = tasks.filter((t) => t.checked).length

  function handleAddTask() {
    if (taskInput === '') return

    setTasks((old) => [
      ...old,
      {
        id: String(uuid.v4()),
        title: taskInput,
        checked: false,
      },
    ])
    setTasksInput('')
  }

  function handleChangeChecked(id: string) {
    setTasks((old) =>
      old.map((task) => {
        if (task.id === id) {
          task.checked = !task.checked
        }
        return task
      }),
    )
  }

  function handleDeleteTask(id: string) {
    setTasks((old) => old.filter((task) => task.id !== id))
  }

  return (
    <View style={styles.container}>
      <Header
        inputValue={taskInput}
        onTaskChange={setTasksInput}
        onTaskSubmit={handleAddTask}
      />

      <Info totalTasks={totalTasks} totalTasksFinished={totalTasksFinished} />

      <List
        tasks={tasks}
        onChangeChecked={handleChangeChecked}
        onDeleteTask={handleDeleteTask}
      />
    </View>
  )
}
