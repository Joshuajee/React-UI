import "@lottiefiles/lottie-player";
import styles from "./index.module.css";

const letterStyle = (index: number) => {
    switch (index) {
        case 0: 
            return styles.letter0
        case 1: 
            return styles.letter1
        case 2: 
            return styles.letter2
        case 3: 
            return styles.letter3
        default:
            return styles.letter1
    }
}

const Bubbles = () => {

    const name = ["J", "O", "S", "H"]

    return(
        <div className={styles.parent}>

            <div className="row h-100 align-items-center justify-content-center">

                {
                    name.map((letter, index) => {
                        return (<div key={index} className={`col-md-2 ${styles.letter} ${letterStyle(index)}`}> {letter} </div>)
                    })
                }         

            </div>       

        </div>
    ) 
}

export default Bubbles