import { StyleSheet } from 'react-native';
import { theme } from '../../core/theme';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.surface,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: getStatusBarHeight() + 10,
  },
});
