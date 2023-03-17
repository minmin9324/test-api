import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";

function App() {
  const getAxios = (): Promise<AxiosResponse> => {
    return axios.get(url);
  };

  const useLoginMutate = () => {
    return useMutation(["kakao"], () => getAxios(), {
      onSuccess: (data) => {
        console.log("Success", data);
      },
      onError: (data) => {
        console.log("Error", data);
      },
    });
  };

  const mutate = useLoginMutate();
  const handleLogin = () => {
    mutate.mutate();
  };

  const url = "/";

  return (
    <button onClick={handleLogin} type="button">
      Login
    </button>
  );
}

export default App;
