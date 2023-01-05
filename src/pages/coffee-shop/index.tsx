import "@lottiefiles/lottie-player";
import styles from "./index.module.css";

const CoffeeShop = () => {

    return(
        <div className={styles.parent}>

            <div className="row h-100 align-items-center">

                <div className={`col-md-6 p-5 ${styles.left}`} data-aos="slide-down">

                    <h1> It's not just <b>coffee</b></h1>

                    <h2> It's <b>SOMETHING</b> more...</h2>
                    
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed congue mollis tortor, sed laoreet lorem volutpat nec. 
                        Vivamus rutrum lacus est, convallis placerat diam porttitor tincidunt. 
                        Etiam elementum auctor velit, at faucibus magna dapibus id. 
                    
                    </p>
                
                </div>

                <div className={`col-md-6 p-5 ${styles.right}`} data-aos="slide-up">

                    <lottie-player 
                        src="https://assets8.lottiefiles.com/packages/lf20_dauput1g.json"  
                        background="transparent"  
                        speed="1"  loop  autoplay />

                </div>

                <div className={styles.circle}></div>


            
            </div>

        </div>
    ) 
}

export default CoffeeShop