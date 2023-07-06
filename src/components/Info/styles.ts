import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  itemInfoContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  itemInfoCreatedText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4EA8DE',
  },
  itemInfoClosedText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#8284FA',
  },
  badgeContainer: {
    width: 25,
    height: 19,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
})
