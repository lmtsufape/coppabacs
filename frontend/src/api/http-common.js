import axios from "axios";

const baseURL = "http://localhost:8081/api/v1";

export default axios.create({
  baseURL,
  headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Headers":
      //     "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  }
})
