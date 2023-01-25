import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import Sidebar from "./menu/Sidebar.component";
import Header from "./menu/Header.component";
import { RiLineChartLine, RiHashtag } from "react-icons/ri";
class Menu extends Component {

 
    render() {
  
      const { user: currentUser } = this.props;
  
      if (!currentUser) {
        return <Redirect to="/login" />;
      }
  
      return (
      
    <div className="grid lg:grid-cols-4 xl:grid-cols-6 min-h-screen">
      <Sidebar />
      <main className="lg:col-span-3 xl:col-span-5 bg-gray-100 p-8 h-[100vh] overflow-y-scroll">
        <Header />
        {/* seccion 1 */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 mt-10 ml-20 gap-8">
          {/* tarjeta 1 */}
          <div className="bg-primary-100 p-8 rounded-xl text-gray-300 flex flex-col gap-6">
            {/* <RiLineChartLine className="text-5xl" /> */}
            <h4 className="text-2xl">Actividades por completar </h4>
           
            <span className="py-1 px-3 text-gray-500 font-bold text-4xl bg-gray-200 rounded-md m-3">
              +Actividad 1... ir 
            </span>
          </div>
          {/* tarjeta 2 */}
          <div className="p-4 bg-white rounded-xl flex flex-col justify-between gap-4 drop-shadow-2xl">
            
            <div className="bg-primary-100/10 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                  S
                </span>
                <div>
                  <h3 className="font-bold">Subir notas Finales</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                   Fecha limite
                </span>
               
              </div>
            </div>
            <div className="bg-primary-100/10 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                  S
                </span>
                <div>
                  <h3 className="font-bold">Subir notas Parciales</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                   Fecha limite
                </span>
               
              </div>
            </div>
            <div className="bg-primary-100/10 rounded-xl p-4">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-primary-100 text-gray-300 text-2xl font-bold p-4 rounded-xl">
                  S
                </span>
                <div>
                  <h3 className="font-bold">Listado de estudiantes</h3>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="bg-primary-100/20 py-1 px-4 rounded-full">
                   Estudiantes
                </span>
               
              </div>
            </div>
          </div>
          
        </section>
     
      </main>
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
  
  export default connect(mapStateToProps)(Menu);