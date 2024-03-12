import styles from '../styles/nosotros.module.css'
import Button from './Button'
import Image from 'next/image';
import {robot} from '../assets/index'
export default function Nosotros () {
    return (
        <div className={styles.nosotros}>
            <Image src = {robot} />
            {/* <img src={"https://s3-alpha-sig.figma.com/img/3da9/15fe/057e0232d7e65030bd8c8dda771a17cd?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oacozlL1VtkwDNJ2tCQtrmRWyI1~NPhuh5LnLjQNF-2vEncr9gglTb6OOBd5rxi2QNuE1L9HpIRxDhAOdPLikOUO2YdAv3Xc1Gy~EMK7Or5RKUfsLlnxQo7-YcaLoZuT-HaaogIPAT6JtVN2IsWbZBuXft0lS7kAnDmhnfodpchBMdrap4vP7HukZNfYFZF13MQQ4hqyyzVC~KJJDcOIRNZb1D3eoFqXBh7mq86y8kHDSxczDx-ccfAEYh8vibazOGnGTuXXDWhr0YdhBuIOw6O98utZ5vd8H~HH8ayUd7boiWtLUqlW8VP6YJfAZEuMVvtjhg7Ll0o-XOyWzTZjlg__"} alt="robot" /> */}
            <div className={styles.principal}>
                <h4>Nosotros</h4>
                <div className={styles.principalText}>
                    <h2>Damos vida a las <span>Ideas</span></h2>
                    <h2><span>creativas</span></h2> 
                </div>
                <div className={styles.line}></div>
                <p><span>Nos encanta crear</span></p>
                <p>
                Dedica a adelantar estudios en la teoría, práctica y aplicación de la computación, en el desarrollo de nuevas tecnologías y a través de sus investigaciones, las cuales orientan sus resultados en la publicación en diferentes medios, a su vez son estudiados en los capítulos estudiantiles, profesionales y comités técnicos; promueve un intercambio activo de información, ideas, e innovación tecnológica entre sus miembros.
                </p>
                <Button texto={"LEER MÁS"}/>
            </div>
        </div>
        
    )
}