import { Button } from "antd";
import axios from "axios";

function App() {
  const url = "/user/api/v1/oauth2/login";

  const handleLogin = async () => {
    await axios
      .get(url)
      .then((resp) => {
        console.log({ success: resp.data });
      })
      .catch((error) => console.log({ error }));
  };

  return <Button onClick={handleLogin}>Login</Button>;
}

export default App;
