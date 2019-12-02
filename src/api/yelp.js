import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer JqLbao_7q9L7qAHzXMig-JgR5xJLYFWZqsqLuxjaxwoHGiHFHuZU4FbWyT2kV37eMn1qTf4G3ndyjA1EXXGxBOEKUmoGOfb0144yjTt7CiFGlQeIgPs_B5Ju6brgXXYx',
  },
});
