import App from "app/App";
import { ThemeProvider } from "app/providers/ThemeProvider";
import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";

render(<div>
  <BrowserRouter>
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  </BrowserRouter>
</div>, document.getElementById('root'))

