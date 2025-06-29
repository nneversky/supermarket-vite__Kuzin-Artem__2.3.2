import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import CardLIst from "../../modules/cardList";
import "./App.css";

const App = () => {
  return (
    <MantineProvider>
      <CardLIst />
    </MantineProvider>
  );
};

export default App;
