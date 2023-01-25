import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

class Profile extends Component {

 
  render() {

    const { user: currentUser } = this.props;

    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      // <div class="card bg-light text-dark">
      //   <h1>{currentUser.username}</h1>
      //   <p>
      //     <strong>Id:</strong> {currentUser.id}
      //   </p>
      //   <p>
      //     <strong>Email:</strong> {currentUser.email}
      //   </p>

      
      //     </div>
      <div className="grid grid-cols-2 h-full w-full">
  <div className="bg-white flex flex-col max-w-sm mx-auto rounded-lg shadow-xl mt-20 ">
  <div>
    <img
        src="https://img.freepik.com/free-photo/young-man-cafe-standing-byy-window-nd-talking-phone_1303-20086.jpg?w=1380&t=st=1674619160~exp=1674619760~hmac=ccd780d0ea996faf9ae015eb112d0614c83bf16895c737e24de2569d5825be6a"
        alt="Usuario"
        className="w-full object-cover"
    />
  </div>
  <div className="bg-[#120037] mx-4 rounded-lg flex items-center gap-2 -mt-8 z-10 shadow-xl py-2 px-6">
    <h3 className="text-white text-lg font-semibold">ROL ASIGNADO</h3>
  </div>
  <div className="px-6 py-4 flex flex-col gap-2">
    <h1 className="text-xl font-semibold text-gray-800">
      {currentUser.username}
    </h1>
    <p className="text-gray-500">
      Estudiante del .....
    </p>
   
    <div className="flex items-center mt-4 text-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>

      <h1 className="px-2 text-sm">Lugar de origen</h1>
    </div>
    <div className="flex items-center mt-4 text-gray-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>

      <h1 className="px-2 text-sm">{currentUser.email}</h1>
    </div>
  </div>
</div>

       <div className="bg-[#120037]">

       </div>

      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps)(Profile);