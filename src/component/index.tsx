import { ReactElement } from "react"
import Header from "./Header"

interface IProps  {
    children: ReactElement
}

const Layout = (props: IProps) => {

    return(
        <div>
            <Header/>
            <div>{props.children} </div>
        </div>
    ) 
}

export default Layout