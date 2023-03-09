import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layouts from "hocs/layouts/Layouts"

function Home(){
    return(
        <Layouts>
            <Navbar/>
            <div className="pt-28">
                Home
            </div>
            <Footer/>
        </Layouts>
    )
}
export default Home