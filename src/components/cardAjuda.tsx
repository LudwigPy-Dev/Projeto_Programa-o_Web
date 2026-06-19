import type { IconType } from "react-icons/lib"
import styles from "../modules/cardAjuda.module.css"

interface IcardAjudaProps {
    simbolo: IconType,
    link: string,
}

export const cardAjuda:React.FC<IcardAjudaProps> = ({simbolo, link})  => {

    const Simbolo = simbolo;

    return(
        <div>
            <div className={styles.card}>
                    <div className={styles.simboloContainer}>
                        <Simbolo className={styles.simbolo} size={50} color="#00C896" /> 
                    </div>
                <a>{link}</a>
            </div>
        </div>
    )
}

export default cardAjuda