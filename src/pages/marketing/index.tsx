import "@lottiefiles/lottie-player";
import styles from "./index.module.css"

const Marketing = () => {

    return(
        <div className={styles.parent}>
     
            <div className="row h-100 align-items-center">

                <div className="col-md-4">

                    <h1 data-aos="slide-right"> JOSHUA </h1>

                    <div className="h-50 p-5">
                        <lottie-player 
                            src="https://assets1.lottiefiles.com/packages/lf20_jay0joxv.json"  
                            background="transparent"  
                            speed="1"  loop  autoplay />
                    </div>

                    <h2 data-aos="slide-left"> The Market Analyst </h2>

                </div>

                <div className="col-md-8">

                    <div className="h-50 p-5" data-aos="slide-down">
                        <lottie-player 
                            src="https://assets6.lottiefiles.com/private_files/lf30_rn1i0mvd.json"  
                            background="transparent"  
                            speed="1"  loop  autoplay />
                    </div>
                

                    {/* <div className={styles.text_container}>
                        <h1 data-aos="slide-right"> <b> JOSHUA </b></h1>
                        <p data-aos="slide-left">Software <b> Developer </b>, Frontend</p>
                    </div> */}
                    
                </div>

            </div>

        </div>
    ) 
}

export default Marketing