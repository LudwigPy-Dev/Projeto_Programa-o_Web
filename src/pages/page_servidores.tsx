import styles from "../modlues/body.module.css"
import Card from "../components/card" 
import FCard from "../components/footerCard"
import Ajuda from "../components/cardAjuda"

import { FaServer, FaNetworkWired, FaDatabase, FaShieldAlt, FaMicrochip, FaHdd, FaTools } from "react-icons/fa"
import { FaGears } from "react-icons/fa6"
import { LuCpu } from "react-icons/lu"
import { BsDeviceSsd } from "react-icons/bs"
import { FaComputer } from "react-icons/fa6"
import { FaUpwork, FaUser } from "react-icons/fa6"

function Page_Servidores() {
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.h1Container}>
                    <h1 style={{textAlign: 'center', fontSize: '35px', maxWidth: '800px', margin: '0 auto'}}>
                        Servidores e Alta Performance Corporativa.
                        <p>Infraestrutura robusta e escalável para bancos de dados, virtualização, processamento massivo e missão crítica 24/7.</p>
                    </h1>
                </div>
            </div>

            <div className={styles.cardsContainer}>
                <Card titulo="Processamento Massivo" paragrafo="CPUs de linha Enterprise (Xeon/EPYC) com dezenas de núcleos para lidar com milhares de requisições simultâneas." simbolo={FaMicrochip} />
                <Card titulo="Alta Disponibilidade" paragrafo="Fontes de alimentação redundantes e componentes de nível industrial para garantir Uptime de 99,9%." simbolo={FaServer} />
                <Card titulo="Memória ECC" paragrafo="Memória RAM com correção automática de erros, evitando corrupção de dados em tarefas críticas." simbolo={FaDatabase} />
                <Card titulo="Armazenamento RAID" paragrafo="Discos U.2 e Enterprise SSDs configurados em RAID para máxima segurança e velocidade de leitura." simbolo={FaHdd}/>
            </div>
            
            <div className={styles.container}>
                <div className={styles.h1Container}>
                    <h1>Preparado para a sua Infraestrutura</h1>
                </div>
            </div>
            <div className={styles.cardsContainer}>
                <Card titulo="Gestão Remota (IPMI)" paragrafo="Acesso e controle de baixo nível à distância, permitindo reinicializações e diagnósticos sem estar no local." simbolo={FaNetworkWired} />
                <Card titulo="Pronto para Virtualização" paragrafo="Arquitetura validada para rodar VMware ESXi, Proxmox, Hyper-V e clusters Kubernetes." simbolo={FaGears} />
                <Card titulo="Segurança Lógica e Física" paragrafo="Criptografia via hardware, módulos TPM e chassis em formato Rack ou Torre com chaves de acesso." simbolo={FaShieldAlt} />
            </div>
            
            <div className={styles.mainCardCont}>
                <div className={styles.h1Container}>
                    <h1>Recomendação: Enterprise Server R1<br/>
                    <p>Potência e redundância para hospedar o núcleo digital da sua empresa.</p></h1>
                    
                    <div className={styles.espCont}>
                        <h2><div className={styles.symbol}><FaDatabase /></div> 128 GB RAM ECC DDR5</h2>
                        <h2><div className={styles.symbol}><LuCpu /></div>DUAL AMD EPYC / INTEL XEON</h2>
                        <h2><div className={styles.symbol}><BsDeviceSsd /></div>RAID 10: 4TB NVMe Enterprise</h2>
                        <h2><div className={styles.symbol}><FaNetworkWired /></div>REDE 10GbE & FONTE REDUNDANTE</h2>
                    </div>
                </div>
            </div>

            <div className={styles.dicasAjuda}>
                <div className={styles.h1Container}>
                    <h1>Dicas e Ajuda <p>Dicas, soluções e suporte para tornar sua experiência ainda melhor.</p></h1>
                </div>
                <Ajuda simbolo={FaComputer} link="Descubra >"/>
                <Ajuda simbolo={FaUpwork} link="Veja >"/>
                <Ajuda simbolo={FaUser} link="Descubra >"/>
            </div>

            <footer>
                <FCard titulo={`SLA Garantido`} descricao="Contratos de suporte com tempo de resposta crítico para a sua infraestrutura não parar." />
                <FCard titulo={`Atendimento On-site`} descricao="Técnicos certificados disponíveis para substituição de peças diretamente no seu data center." />
                <FCard titulo={`Escalabilidade`} descricao="Projetos sob medida. Adicione gavetas de discos ou nós de processamento conforme sua empresa cresce." />
            </footer>
            <hr />
            <h2 className={styles.h2}>© 2026 PC Parts. Todos os direitos reservados.</h2>
        </div>
    )
}

export default Page_Servidores
