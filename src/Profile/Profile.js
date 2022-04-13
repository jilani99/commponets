import React from 'react';
import PropTypes from 'prop-types'; 


const Profile = (props) => {
  console.log(props)
  return (
  
  <div>
  {/* inline style */}
  <h1 style={{color:"#18204B" }}>My Name is {props.myName} </h1>
  <h3 style={{backgroundColor:"#18204B" , color:"white", fontSize:30 }}> I am {props.aboutMe} and {props.myProfession} </h3>
  <button onClick={props.handleName}>Who am I?</button>
  
  </div>
  )
};
//set default pops
Profile.defaultProps={
  myName:"---------------- please enter your name----------------",
  aboutMe:"---------------please enter your bio------------------",
  myProfession:"----------------- please enter your profession -------------"
}

//add type-check to props

Profile.propTypes={
  myName: PropTypes.string,
  aboutMe: PropTypes.string,
  myProfession: PropTypes.string,
}

export default Profile;
