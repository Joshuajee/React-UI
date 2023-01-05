import { Parallax, Background } from "react-parallax";
import styles from "./index.module.css";


const ParallaxPage = () => {


    return (
        <div className={styles.parent}>

            <Parallax strength={500}>

                <Background>
                    <img className={styles.bg_image} src="image-bg.jpg" alt="Bg" />
                </Background>

                <div className={styles.content}>
                    <div>
                        <h1>JOSHUA</h1>
                        <h3>Software Developer & Technical Writer</h3>
                        <button>Get Started</button>
                    </div>
                </div>
                
            </Parallax>

            <div className={styles.section2}>

                <div className="p-5 m-5">

                    <lottie-player 
                        src="https://assets2.lottiefiles.com/packages/lf20_kkflmtur.json"  
                        background="transparent"  
                        speed="1"  loop  autoplay />

                </div>

                <div className="container">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed congue mollis tortor, sed laoreet lorem volutpat nec. 
                        Vivamus rutrum lacus est, convallis placerat diam porttitor tincidunt. 
                        Etiam elementum auctor velit, at faucibus magna dapibus id. 
                        Nam molestie ipsum in sem rutrum porta. Nulla facilisi. 
                        Fusce id metus id dolor pulvinar faucibus a quis purus. 
                    </p>
                </div>

            </div>

            <footer className={styles.footer}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#ff5500"
                        fill-opacity="1"
                        d="M0,224L1440,64L1440,320L0,320Z"
                    ></path>
                </svg>
                
                <div className={styles.footer_content}>
                    <p>Designed and developed by </p> 
                    <div className={styles.border}></div>
                    <h4> Joshua </h4>
                </div>
            </footer>

        </div>
    )
}

export default ParallaxPage