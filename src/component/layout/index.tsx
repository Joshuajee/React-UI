import { ReactElement } from "react"
import Footer from "./Footer"
import Header from "./Header"

interface IProps  {
    children: ReactElement
}

const Layout = (props: IProps) => {

    return(
        <div>
            <Header/>
                <div>{props.children} </div>
            <Footer />
        </div>
    ) 
}

export default Layout