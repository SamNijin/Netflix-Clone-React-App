import axios from "axios";
import { base_URL } from "./Constants/API";
const instance = axios.create({
  baseURL: base_URL,
});

export default instance;
