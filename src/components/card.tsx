import type { IconType } from 'react-icons/lib';
import styles from "../modules/card.module.css"

interface IcardProps {
    titulo: string,
    paragrafo: string,
    simbolo: IconType
}

export const card:React.FC<IcardProps> = ({titulo, paragrafo, simbolo}) => {

    const Simbolo = simbolo;

    return(
       <div className={styles.card}>
        <div className={styles.simbolo}>
            <Simbolo size={28} color="#00C896" /> 
        </div>
        <h2 className={styles.titulo}>{titulo}</h2> 
       <p className={styles.paragrafo}>{paragrafo}</p>
       </div>
    )
}

export default card