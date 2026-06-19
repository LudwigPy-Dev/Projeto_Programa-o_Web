import styles from "../modules/footerCard.module.css"

interface IfooterCardProps {
    titulo: string;
    descricao: string;
}

export const footerCard: React.FC<IfooterCardProps> = ({ titulo, descricao }) => {
    return(
        <div className={styles.FooterCard}>
            <h3 className={styles.titulo}>{titulo}</h3>
            <p className={styles.descricao}>{descricao}</p>
        </div>
    )
}

export default footerCard