import { StatusBar } from 'react-native';

import theme from '@theme/index';
import { ThemeProvider } from 'styled-components';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';

import { Loading } from '@components/Loading/index';
import { Routes } from '@routes/index';

export default function App() {
  const [isFontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor="transparent"
        translucent
      />
      {isFontsLoaded ? <Routes /> : <Loading /> }
    </ThemeProvider>
  );
}
