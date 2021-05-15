import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses/",
  headers: {
    Authorization:
      "Bearer NzJgywK5bKuxbiJa741V7MZu_qrrlMJkel6n1LlqGKhJk5KIUSHdFg_08caMo6V2vfHDk6WoPeM-kFQn7v-rXE0kBNhI4JVC5mFLmTq2jj-1zRw3r5Shll1Qgm2cYHYx",
  },
});
