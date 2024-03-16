import { check } from '@/assets'
import styles from '../styles/voluntario.module.css'
import Button from './Button'
import Image from 'next/image'

export default function Voluntario () {
    return(
        <div className={styles.voluntario}>
            <div className={styles.principal}>
                <h4>¿PORQUÉ SER VOLUNTARIO?</h4>
                <div className={styles.line}></div>
                <div className={styles.principalText}>
                    <h2>ADQUIERE <span>EXPERIENCIA</span></h2>
                    <h2>CONTRIBUYENDO A LA</h2> 
                    <h2><span>COMUNIDAD</span></h2> 
                </div>
                <Button texto={"VER TODO"} className={styles.button}/>
            </div>
            <div className={styles.voluntarioInfo}>
                <p>Hacer voluntariado en una organización como la Computer Society puede ser un valor añadido al currículum, ya que demuestra interés y compromiso con la tecnología y la sociedad.</p>
                <div className={styles.voluntarioInfoSecondary}>
                    <Image src={check}/>
                    <p>  Aprendizaje y crecimiento </p>
                </div>
                <div className={styles.voluntarioInfoSecondary}>
                    <Image src={check}/>
                    <p> Desarrollo de habilidades </p>
                </div>
                <div className={styles.voluntarioInfoSecondary}>
                    <Image src={check}/>
                    <p> Networking </p>
                </div>
            </div>
        </div>
    )
}