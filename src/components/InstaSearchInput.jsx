import React from 'react';
import { connect } from 'react-redux';

const InstaInputComponents = ({handleSubmitInput})=>(
  <div>
    <form onSubmit={handleSubmitInput}>
      <input type="text" placeholder="Search"></input>
    </form>
  </div>
);

const mapDispatchToProps = (dispatch)=>({
  handleSubmitInput(e){
    e.preventDefault();
    let input = e.target.elements[0];
    let q = {text: input.value};
    console.log('mapDispatchToProps', q);
    dispatch({type:"SEARCH_INSTA", q});
    input.value= "";
  }
});

export default connect(null, mapDispatchToProps)(InstaInputComponents);
