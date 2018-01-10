import React from 'react';
import ReactDom from 'react-dom';
import InstagramLogin from 'react-instagram-login';
import {Provider} from 'react-redux';
import App from './components/App';
import instagramEndpoints from './instagramEndpoints';


const responseInstagram = (response) => {
  console.log(response);
  // /window.location ='https://api.instagram.com/v1/users/self/?access_token=6792719781.d90570a.1cc8c7e48b174324b694e2cf75d05ef4';
}

ReactDom.render(
  <div>
    <InstagramLogin
      clientId="47463c83bde047deaa53fc6968e54a5c"
      buttonText="Login"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
      response_type="token"
      scope="basic+public_content+follower_list+comments+relationships+likes">
      <span> Login with Instagram</span>
    </InstagramLogin>
    <Provider store={instagramEndpoints()}>
      <App/>
    </Provider>
  </div>,
  document.getElementById('app')
);
