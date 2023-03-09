import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import logo_mw from 'assets/img/logo.png'
function Navbar(){
    return(
        <nav className='w-full py-4 top-0 fixed'>
            <div className=" bg-white px-4 sm:px-6">
                <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                    <div className="ml-4 mt-2">
                        <img
                        src={logo_mw}
                        width={80}
                        height={70}
                        className=""/>
                    </div>
                    <div className="ml-4 mt-2 flex-shrink-0">
                        <Link to='/casos' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-700 mx-4">Casos</Link>
                        <Link to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-700 mx-4">Servicios</Link>
                        <Link to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-700 mx-4">Nosotros</Link>
                        <Link to='/carreras' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-700 mx-4">Carreras</Link>
                        <Link to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-700 mx-4">Blog</Link>
                        <Link to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-blue-700 mx-4">Contacto</Link>
                        <button
                            type="button"
                            className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-md font-bold text-white shadow-sm transition duration-300 ease-in-out hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Entrar
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Navbar)