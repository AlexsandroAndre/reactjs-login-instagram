import { createStore } from 'redux';
import axios from 'axios';

const instaConfig = {
  access_token: '6792719781.1677ed0.78f2c9297ebd4f02a49cdbd2b327b543',
  url: 'https://api.instagram.com/v1/users/'
};

const posts= {};
const defaultState = {
  posts,
  showDone: true
};

const reducer = (state = defaultState, action)=>{
  console.log('reducer action: ', action);
  const { type, q } = action;
  if(type === 'SEARCH_INSTA'){
    state= {
      posts: axios.get(instaConfig.url +'search?q='+ q.text + '&access_token=' + instaConfig.access_token)
      .catch(function (error) {
        console.log('error: ', error);
      })
    }
  }
  return state;
}

export default ()=>createStore(reducer);
