import { Home } from '@screens/Home/index';
import theme from '@theme/index';
import { ThemeProvider } from 'styled-components';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { ActivityIndicator, View } from 'react-native';

export default function App() {
  const [isFontsLoaded] = useFonts([ Nunito_400Regular, Nunito_700Bold])

  return (
    <ThemeProvider theme={theme}>
      {isFontsLoaded ? <Home /> : <ActivityIndicator /> }
    </ThemeProvider>
  );
}
