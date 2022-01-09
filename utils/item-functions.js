import axios from "axios";

export const fetchRandomImage = async () => {
  const response = await axios({
    method: "get",
    url: "https://coffee.alexflipnote.dev/random.json",
  });
  return await response.data.file;
};
