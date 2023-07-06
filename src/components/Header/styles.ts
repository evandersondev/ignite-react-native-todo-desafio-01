import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    height: 173,
    backgroundColor: '#0D0D0D',
    paddingHorizontal: 24,
    marginBottom: 59,
  },
  logo: {
    height: 32,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 40,
    marginTop: 70,
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: 4,
    marginBottom: 32,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 6,
    padding: 16,
    color: '#FFFFFF',
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 6,
    backgroundColor: '#1E6F9F',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
