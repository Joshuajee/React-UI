import { Link } from "react-router-dom"
import { HiOutlineMenuAlt1 } from "react-icons/hi"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import styles from "./index.module.css"
import { ROUTES } from "../../libs/routes"

const menuItems = [
    {   title: "Home",  path: ROUTES.HOME  },
    {   title: "Rotated",  path: ROUTES.ROTATED   },
    {   title: "Glowing",  path: ROUTES.GLOWING   },
    {   title: "Marketing",  path: ROUTES.MARKETING   },
    {   title: "Bubbles",  path: ROUTES.BUBBLES   },
    {   title: "Parallax",  path: ROUTES.PARALLAX   },
    {   title: "Starbucks",  path: ROUTES.STARBUCKS   },
    {   title: "Cars Platform",  path: ROUTES.CARS   }
]

const Header = () => {

    const path = window.location.pathname
    const [show, setShow] = useState(false)

    return(
        <div>

            <div className={styles.menu_switch}>
                {show ? <AiOutlineClose onClick={() => setShow(false)} /> : <HiOutlineMenuAlt1 onClick={() => setShow(true)} /> }
            </div>

            { show &&
                <ul className={styles.menu_items}>
                    {
                        menuItems.map((item, index) => {
                            return (
                                <Link 
                                    className={`${path === item.path && styles.active}`}
                                    key={index} onClick={() => setShow(false)}
                                    to={item.path}> 
                                    {item.title} 
                                </Link>)
                        })
                    }
                </ul>
            }
        </div>
    ) 
}

export default Header