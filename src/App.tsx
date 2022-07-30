import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./chakra-theme/ChakraThemeExtender";
import { Routing } from "./routes/Routing";
import { Provider } from "react-redux";
import { store } from "./store";
import "./App.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store}>
        <Routing />
      </Provider>
    </ChakraProvider>
  );
}

export default App;
