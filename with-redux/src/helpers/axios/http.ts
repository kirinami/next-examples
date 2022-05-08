import axios from 'axios';

const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  validateStatus: status => status >= 200 && status < 300,
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUxOTM5NzI4LCJleHAiOjE2NTIwMjYxMjh9.06mAWueutk91SaeiVN4aSWhNNI8OcUTVDUF4ZU7Oc58',
  },
});

export default http;
