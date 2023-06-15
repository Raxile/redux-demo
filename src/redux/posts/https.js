import axios from "axios";

const callGetPost = async () => {
  try {
    const res = await axios("https://jsonplaceholder.typicode.com/posts");
    return res;
  } catch (error) {
    return error;
  }
};
export default callGetPost;
