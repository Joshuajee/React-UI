import "@lottiefiles/lottie-player";
import styles from "./index.module.css"


const Home = () => {

    return(
        <div className={styles.home}>

            <div className={`d-flex ${styles.container}`}>
                
                <div className={`${styles.left} text-center text-white d-flex align-items-center justify-content-center flex-column`}>
                    <h3 data-aos="slide-right" className={`my-5`}> <b> Software Engineer </b> </h3>
                    <div className="h-50 p-5">
                        <lottie-player 
                            src="https://assets8.lottiefiles.com/private_files/lf30_WdTEui.json"  
                            background="transparent"  
                            speed="1"  loop  autoplay />
                    </div>
                </div>

                <div className={`${styles.right} text-center text-white d-flex align-items-center justify-content-center flex-column`}>
                    <div className="h-50 p-5">
                        <lottie-player 
                            src="https://assets8.lottiefiles.com/packages/lf20_z01bika0.json"  
                            background="transparent"  
                            speed="1"  loop  autoplay />
                    </div>
                    <h3 data-aos="slide-left" className={`my-5`}> <b> Instructor </b> </h3>
                </div>

            </div>

            <div className={styles.seperator}><span>JOSHUA</span></div>

        </div>
    ) 
}

export default Home