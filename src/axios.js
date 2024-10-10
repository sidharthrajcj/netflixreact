import axios  from "axios";
import { baseUrl } from "./Constants/constants";

const intance=axios.create({
    baseURL:baseUrl,
});

export default intance