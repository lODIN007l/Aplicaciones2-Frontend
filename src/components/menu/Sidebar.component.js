import React, { Component ,useState} from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { clearMessage } from "../../actions/message";

import {
    RiHome3Line,
    RiFileCopyLine,
    RiWalletLine,
    RiPieChartLine,
    RiMore2Fill,
    RiCloseFill,
  } from "react-icons/ri";

class Sidebar extends Component {
  
 
    render() {
    //   const [showMenu, setShowMenu] = useState(false);
      const { user: currentUser } = this.props;
  
      if (!currentUser) {
        return <Redirect to="/login" />;
      }
  
      return (
        <div
          className="bg-primary-900 h-full overflow-hidden fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 "
        >
          {/* Profile */}
          <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
            <img
              src="https://img.freepik.com/free-photo/young-man-cafe-standing-byy-window-nd-talking-phone_1303-20086.jpg?w=1380&t=st=1674619160~exp=1674619760~hmac=ccd780d0ea996faf9ae015eb112d0614c83bf16895c737e24de2569d5825be6a"
              className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
            />
            <h1 className="text-xl text-white font-bold">{currentUser.email}</h1>
            <p className="bg-primary-100 py-2 px-4 rounded-full text-white">
              ROL ASIGNADO
            </p>
          </div>
          {/* Nav */}
          <div className="bg-primary-300 p-8 rounded-tr-[100px] h-[70vh]  flex flex-col justify-between gap-8">
            <nav className="flex flex-col gap-8">
              <a
                href="#"
                className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
              >
                <RiHome3Line /> Inicio
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
              >
                <RiFileCopyLine /> Subida de notas 
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
              >
                <RiWalletLine /> Listado de estudiantes
              </a>
              <a
                href="#"
                className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
              >
                <RiPieChartLine /> Reportes
              </a>
            </nav>
            <div className="bg-primary-900/50 text-white p-4 rounded-xl m-auto">
              <a className="text-white font-bold text-center " href="#" onClick={this.logOut} >Cerrar Sesion</a>
            </div>
          </div>
        </div>
        // {/* Button mobile */}
        // <button
          
        //   className="lg:hidden fixed right-4 bottom-4 text-2xl bg-primary-900 p-2.5 rounded-full text-white z-50"
        // >
        //   <RiCloseFill />  
        // </button>
      );
    }
  }
  
  function mapStateToProps(state) {
    const { user } = state.auth;
    return {
      user,
    };
  }
  
  export default connect(mapStateToProps)(Sidebar);