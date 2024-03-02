import theme from '@theme/index';
import { ThemeProvider } from 'styled-components';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

import { Loading } from '@components/Loading';
import { Home } from '@screens/Home/index';

export default function App() {
  const [isFontsLoaded] = useFonts([ Nunito_400Regular, Nunito_700Bold])

  return (
    <ThemeProvider theme={theme}>
      {!isFontsLoaded ? <Home /> : <Loading /> }
    </ThemeProvider>
  );
}
