import { Check } from 'phosphor-react';
import styles from './Card.module.css';

export function CardPotencias({ setAparelhoEscolhido }: {setAparelhoEscolhido: (novosRegistros: [string, string]) => void;}) {
    const aparelhos = [
        { title: "Ar-condicionado", power: "1000" },
        { title: "Aparelho de som", power: "40" },
        { title: "Aparelho de DVD", power: "50" },
        { title: "Aspirador", power: "1000" },
        { title: "Batedeira", power: "200" },
        { title: "Barbeador", power: "10" },
        { title: "Cafeteira", power: "1000" },
        { title: "Carregador de celular", power: "1.5" },
        { title: "Chuveiro", power: "3500" },
        { title: "Computador", power: "300" },
        { title: "Exaustor", power: "150" },
        { title: "Ferro de passar roupa", power: "1000" },
        { title: "Freezer", power: "130" },
        { title: "Geladeira", power: "130" },
        { title: "Grill", power: "900" },
        { title: "Lâmpada fluorescente", power: "9" },
        { title: "Lâmpada incandescente", power: "40" },
        { title: "Liquidificador", power: "300" },
        { title: "Máquina de lavar", power: "350" },
        { title: "Microondas", power: "1200" },
        { title: "Sanduicheira", power: "750" },
        { title: "Secador de cabelo", power: "1400" },
        { title: "Televisor", power: "100" },
        { title: "Telefone sem fio", power: "100" },
        { title: "Torradeira", power: "800" },
        { title: "Ventilador", power: "120" },
        { title: "Videogame", power: "15" }
    ];

    function handleAparelhoEscolhido(name: string, power: string) {
        setAparelhoEscolhido([name, power]);
    }

    return (
        // Potência Elétrica Média (WATTS) de Aparelhos Elétricos
        <div className={styles.quadro}>
            <div className={styles.espacoTituloQuadro}>
                <span className={styles.tituloQuadro}>Potência Elétrica Média de Aparelhos Elétricos</span>
            </div>
            <div className={styles.tabelaQuadro}>
                <div className={styles.tabelaScroll}>
                    <table className={styles.tabelaValores}>
                        <thead>
                            <tr>
                                <th>Aparelho</th>
                                <th>Potência Aproximada (W)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {aparelhos.map((a) => {
                                return (
                                    <tr key={a.title}>
                                        <td>{a.title}</td>
                                        <td>{`${a.power}W`}</td>
                                        <td onClick={() => handleAparelhoEscolhido(a.title, a.power)} id="botaoTabela botaoEditar" title="Adicionar Aparelho" className={`${styles.botaoSelect}`}> <Check size={20} /> </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}