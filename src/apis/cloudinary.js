import axios from 'axios';

export default axios.create({
  baseURL: 'http://res.cloudinary.com/jldivemaster/image/list'
});
