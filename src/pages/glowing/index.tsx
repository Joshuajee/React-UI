import "@lottiefiles/lottie-player";
import styles from "./index.module.css"

const Glowing = () => {

    return(
        <div className={styles.parent}>

            <div className="h-100">
                <lottie-player 
                    src="https://assets5.lottiefiles.com/packages/lf20_SkhtL8.json"  
                    background="transparent"  
                    speed="1"  loop  autoplay />
            </div>


            <div className={styles.text_container}>
                <h1 data-aos="slide-right"> <b> JOSHUA </b></h1>
                <p data-aos="slide-left">Software <b> Developer </b>, Frontend</p>
            </div>
                

        </div>
    ) 
}

export default Glowing