import styles from "../modlues/body.module.css"
import Card from "../components/card" 
import MainCard from "../components/mainCard" 
import FCard from "../components/footerCard"
import Ajuda from "../components/cardAjuda"

// Ícones selecionados para o cenário de desenvolvimento e criação gráfica
import { FaMemory, FaCode, FaPaintBrush, FaTachometerAlt, FaServer, FaFan } from "react-icons/fa"
import { FaComputer, FaGears } from "react-icons/fa6"
import { LuCpu } from "react-icons/lu"
import { BsDeviceSsd } from "react-icons/bs"
import { MdMonitor } from "react-icons/md"
import { FaUpwork, FaUser } from "react-icons/fa6"

function Page_Desenvolvimento() {
    return(
        <div>
            {/* Cabeçalho da Página */}
            <div className={styles.container}>
                <div className={styles.h1Container}>
                    <h1 style={{textAlign: 'center', fontSize: '35px', maxWidth: '800px', margin: '0 auto'}}>
                        Workstations para Criação e Desenvolvimento.
                        <p>Poder de processamento e gráficos de alta performance para compilar códigos mais rápido e renderizar projetos pesados.</p>
                    </h1>
                </div>
            </div>

            {/* Seção 1: Por que este PC é ideal para a área? */}
            <div className={styles.cardsContainer}>
                <Card titulo="Processamento Extremo" paragrafo="CPUs de última geração com múltiplos núcleos para reduzir o tempo de compilação e exportação." simbolo={LuCpu} />
                <Card titulo="Gráficos Dedicados" paragrafo="Placas de vídeo poderosas para aceleração de hardware, edição 4K, modelagem 3D e IA." simbolo={FaPaintBrush} />
                <Card titulo="Multitarefa Implacável" paragrafo="Memória RAM de sobra para rodar IDEs, Docker, máquinas virtuais e dezenas de abas sem travar." simbolo={FaMemory} />
                <Card titulo="Armazenamento NVMe" paragrafo="Velocidade absurda de leitura e escrita para carregar bibliotecas, assets e projetos instantaneamente." simbolo={BsDeviceSsd}/>
            </div>

            {/* Seção 2: Vantagens para Profissionais */}
            <div className={styles.container}>
                <div className={styles.h1Container}>
                    <h1>Feito para o seu Workflow</h1>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                <Card titulo="Setup Multi-telas" paragrafo="Conexões de sobra para até 4 monitores, garantindo máxima imersão e área de trabalho." simbolo={MdMonitor} />
                <Card titulo="Refrigeração Avançada" paragrafo="Sistemas de Air e Water Cooler robustos para aguentar horas de render ininterrupto sem perder desempenho." simbolo={FaFan} />
                <Card titulo="Arquitetura Escalável" paragrafo="Gabinetes espaçosos e placas-mãe premium que permitem upgrades fáceis no futuro." simbolo={FaGears} />
            </div>

            {/* Seção 3: Destaque da Recomendação (O PC em si) */}
            <div className={styles.mainCardCont}>
                <div className={styles.h1Container}>
                    <h1>Recomendação Ideal: Workstation Creator Pro<br/>
                    <p>A máquina definitiva para quem não tem tempo a perder esperando barras de carregamento.</p></h1>
                    
                    <div className={styles.espCont}>
                        <h2><div className={styles.symbol}><FaMemory /></div> 32 GB RAM DDR5</h2>
                        <h2><div className={styles.symbol}><LuCpu /></div>INTEL CORE i7 ou RYZEN 9</h2>
                        <h2><div className={styles.symbol}><FaTachometerAlt /></div>RTX 4070 12GB</h2>
                        <h2><div className={styles.symbol}><BsDeviceSsd /></div>SSD NVMe 1TB Gen 4</h2>
                    </div>
                </div>
            </div>

            {/* Seção 4: Dicas e Suporte */}
                                 <div className={styles.dicasAjuda}>
                         <div className={styles.h1Container}>
                             <h1>Dicas e Ajuda <p>Dicas, soluções e suporte para tornar sua experiência ainda melhor.</p></h1>
                         </div>
                         <Ajuda simbolo={FaComputer} link="Descubra >"/>
                         <Ajuda simbolo={FaUpwork} link="Veja >"/>
                         <Ajuda simbolo={FaUser} link="Descubra >"/>
                     </div>

            {/* Footer */}
            <footer>
                <FCard titulo={`Garantia Premium`} descricao="Suporte ágil e substituição rápida de peças para que o seu trabalho não pare." />
                <FCard titulo={`Monte do Seu Jeito`} descricao="Precisa de mais RAM ou armazenamento? Fale com nossos consultores." />
                <FCard titulo={`Compatibilidade Testada`} descricao="Máquinas testadas e certificadas para os principais softwares do mercado." />
            </footer>
            <hr />
            <h2 className={styles.h2}>© 2026 PC Parts. Todos os direitos reservados.</h2>
        </div>
    )
}

export default Page_Desenvolvimento