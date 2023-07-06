import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 24,
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#262626',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    marginBottom: 8,
    paddingLeft: 8,
    borderColor: '#333333',
    borderWidth: 1,
  },
  checkButton: {
    height: 24,
    width: 24,
    margin: 8,
  },
  deleteButton: {
    height: 32,
    width: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitleText: {
    flex: 1,
    fontSize: 14,
  },
})
