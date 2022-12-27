import "@lottiefiles/lottie-player";
import styles from "./index.module.css"

const Rotated = () => {

    return(
        <div className={styles.parent}>

            <div className={styles.container}>
            
                <div className="row h-100 align-items-center">

                    <div className="col-md-6">
                        
                        <div className="h-75 p-5">
                            <lottie-player 
                                src="https://assets3.lottiefiles.com/packages/lf20_kkflmtur.json"  
                                background="transparent"  
                                speed="1"  loop  autoplay />
                        </div>

                    </div>

                    <div className="col-md-6">

                        <div className={styles.text_container}>
                            <h1 data-aos="slide-right"> <b> JOSHUA </b></h1>
                            <p data-aos="slide-left">Software <b> Developer </b>, Frontend</p>
                        </div>
                        
                    </div>

                </div>

            </div>

        </div>
    ) 
}

export default Rotated