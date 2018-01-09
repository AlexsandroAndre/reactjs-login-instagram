import React from 'react';
import ReactDom from 'react-dom';
import InstagramLogin from 'react-instagram-login';



const responseInstagram = (response) => {
  //https://api.instagram.com/v1/users/self/?access_token=ACCESS-TOKEN
}

ReactDom.render(
  <div>
    <InstagramLogin
      clientId=""
      buttonText="Login"
      onSuccess={responseInstagram}
      onFailure={responseInstagram}
      scope="likes+comments+follower_list">
      <span> Login with Instagram</span>
    </InstagramLogin>
  </div>,
  document.getElementById('app')
);
