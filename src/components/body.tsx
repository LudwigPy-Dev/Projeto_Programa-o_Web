import { CgCardSpades } from "react-icons/cg";
import styles from "../modules/body.module.css";
import Card from "./card";
import FCard from "./footerCard";
import { FaBook, FaCheck, FaHdd, FaLandmark, FaMemory, FaMicrochip, FaSearchPlus, FaUser } from "react-icons/fa";
import { FaComputer, FaRegBuilding, FaMoneyBill } from "react-icons/fa6";
import Ajuda from "./cardAjuda";
import { LuCpu } from "react-icons/lu";
import { BsDeviceSsd } from "react-icons/bs";
import { IoWifi } from "react-icons/io5";
import { useState } from "react";

interface Computador {
  id: number;
  nome: string;
  descricao: string;
  memoriaRam: string;
  processador: string;
  imagem: string;
  placaVideo: string;
  placaMae: string;
  armazenamento: string;
}

function Body() {
  const [computadores] = useState<Computador[]>([
  {
    id: 1,
    nome: "PC para Desenvolvimento de Software",
    descricao:
      "Utilizado para criar, testar e manter programas e sistemas. Ideal para programação, bancos de dados e desenvolvimento web.",
    processador: "Intel Core i5-12600KF",
    memoriaRam: "32GB DDR4",
    armazenamento: "SSD SanDisk 1TB",
    placaVideo: "Radeon RX 570 8GB",
    placaMae: "Gigabyte H610M K DDR4",
    imagem: "PC_Desenvolvimento.png"
  },

  {
    id: 2,
    nome: "PC para Recepção de Empresa",
    descricao:
      "Projetado para atendimento ao público, cadastro de clientes, organização de informações e comunicação interna.",
    processador: "Intel Core i3-10100",
    memoriaRam: "8GB DDR4",
    armazenamento: "SSD Kingston A400 480GB",
    placaVideo: "Vídeo Integrado Intel UHD 630",
    placaMae: "NTC Challenger H510M-R V2",
    imagem: "PC_Administrativo.png"
  },

  {
    id: 3,
    nome: "PC para Mineração de Dados e IA",
    descricao:
      "Desenvolvido para análise de grandes volumes de dados e treinamento de modelos de inteligência artificial.",
    processador: "Intel Core Ultra 9 285K",
    memoriaRam: "128GB DDR5",
    armazenamento: "SSD Corsair MP700 PRO 4TB",
    placaVideo: "ASUS RTX 5090 32GB",
    placaMae: "ASUS ROG Maximus Z890 Hero",
    imagem: "PC_Mineracao.png"
  },
]);
  const [indice, setIndice] = useState(0);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.h1Container}>
          <h1>
            Soluções para todas as necessidades
            <p>
              Trabalhamos com uma linha completa de produtos e serviços para o
              seu dia a dia, estudos ou empresa.
            </p>
          </h1>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <Card
          titulo="Para você"
          paragrafo="Equipamentos e acessórios ideais para tarefas diárias, estudos, entretenimento e muito mais."
          simbolo={FaUser}
        />
        <Card
          titulo="Para empresas"
          paragrafo="Soluções eficientes para a produtividade do seu negócio com suporte dedicado."
          simbolo={FaRegBuilding}
        />
        <Card
          titulo="Para estudantes"
          paragrafo="Tecnologia acessível para facilitar o aprendizado e a realização dos seus projetos."
          simbolo={FaBook}
        />
        <Card
          titulo="Peças e upgrades"
          paragrafo="Encontre as peças certas para melhorar o seu equipamento."
          simbolo={FaMemory}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.h1Container}>
          <h1>Por que comprar com a gente?</h1>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        <Card
          titulo="Marcas confiáveis"
          paragrafo="Trabalhamos com as melhores marcas do mercado."
          simbolo={FaComputer}
        />
        <Card
          titulo="Garantia"
          paragrafo="Todos os produtos com garantia e procedência comprovada."
          simbolo={FaMoneyBill}
        />
        <Card
          titulo="Entrega rápida"
          paragrafo="Enviamos para todo o Brasil com agilidade e segurança."
          simbolo={FaCheck}
        />
        <Card
          titulo="Parcele em até 12x"
          paragrafo="Condições facilitadas para você realizar seus projetos."
          simbolo={FaLandmark}
        />
        <Card
          titulo="Compra segura"
          paragrafo="Seus dados protegidos em ambiente 100% seguro."
          simbolo={FaSearchPlus}
        />
      </div>
      <div className={styles.dicasAjuda}>
        <div className={styles.h1Container}>
          <h1>
            Fatos sobre nós{" "}
            <p>
              Fatos, soluções e suporte para tornar sua experiência ainda
              melhor.
            </p>
          </h1>
        </div>
        <Ajuda simbolo={FaComputer} link="Custo beneficio" />
        <Ajuda simbolo={FaCheck} link="Condições especiais" />
        <Ajuda simbolo={FaUser} link="Suporte 24h" />
      </div>
      {computadores.length > 0 && (
        <div className={styles.mainCardCont} style={{backgroundImage: `url('/images/${computadores[indice].imagem}'), linear-gradient(to top,var(--bg-card) 40%, var(--emerald) 100%)`}}>

          <div className={styles.h1Container}>
            <h1>
              {computadores[indice].nome}

              <p>{computadores[indice].descricao}</p>
            </h1>

            <div className={styles.espCont}>
              <h2>
                <div className={styles.symbol}>
                  <FaMemory />
                </div>
                {computadores[indice].memoriaRam}
              </h2>

              <h2>
                <div className={styles.symbol}>
                  <LuCpu />
                </div>
                {computadores[indice].processador}
              </h2>

              <h2>
                <div className={styles.symbol}>
                  <BsDeviceSsd />
                </div>
                {computadores[indice].armazenamento}
              </h2>

              <h2>
                <div className={styles.symbol}>
                <FaMicrochip />
              </div>
              {computadores[indice].placaMae}
              </h2>
              <h2>
                <div className={styles.symbol}>
                  <FaHdd />
                </div>
                {computadores[indice].placaVideo}
              </h2>
            </div>
          </div>

            <div className={styles.buttonContainer}>
                <button
                className={styles.seta}
                onClick={() =>
                setIndice(indice === 0 ? computadores.length - 1 : indice - 1)
                }
            >
                ◀
            </button>
            <button
                className={styles.seta}
                onClick={() =>
                setIndice(indice === computadores.length - 1 ? 0 : indice + 1)
                }
            >
                ▶
            </button>
            </div>
        </div>
      )}
      <footer>
        <FCard
          titulo={`Atendimento ao cliente`}
          descricao="Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida ou problema."
        />
        <FCard
          titulo={`Política de devolução`}
          descricao="Oferecemos uma política de devolução flexível para garantir a sua satisfação."
        />
        <FCard
          titulo={`Segurança`}
          descricao="Garantimos a segurança dos seus dados e transações em nosso site."
        />
      </footer>
      <hr />
      <h2 className={styles.h2}>
        © 2024 PC Parts. Todos os direitos reservados.
      </h2>
    </div>
  );
}

export default Body;
