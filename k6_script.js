import http from "k6/http";
import { sleep } from "k6";

export let options = {
  vus: 1200,
  duration: "5m0s"
};

export default function() {
  http.get('http://ec2-54-219-165-96.us-west-1.compute.amazonaws.com:3001/ABC-123/similar');
  sleep(1);
}
