import "@lottiefiles/lottie-player";
import styles from "./index.module.css"

const CarsPage = () => {

    return(
        <div className={styles.parent}>
            
            <div className="row">

                <div className={`col-md-6 ${styles.left}`}>

                    <img
                        src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80"
                        alt=""
                        />

                </div>

                <div className={`col-md-6 ${styles.right}`}>

                    <img
                        src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1856&q=80"
                        alt=""
                        />
                    
                </div>

                <h1 className={styles.car_text}>CARS</h1>
                

            </div>

            <div className={styles.text_separator}>
                
                <span>JOSH</span>
            
            </div>

        </div>
    ) 
}

export default CarsPage