import styles from '../styles/data.module.css'
import Image from 'next/image'
import { miembros_equipo, proyectos_terminados, miembros_felices, proyectos } from '@/assets'

export default function Data () {
    return (
        <div className={styles.data}>
            <div className={styles.section}>
                <Image src={miembros_equipo} />
                <p className={styles.number}>50+</p>
                <p><span>Miembros del equipo</span></p>
            </div>
            <div className={styles.section}>
                <Image src={proyectos_terminados} />
                <p className={styles.number}>200+</p>
                <p><span>Proyectos Terminados</span></p>
            </div>
            <div className={styles.section}>
                <Image src={miembros_felices} />
                <p className={styles.number}>500+</p>
                <p><span>Miembros Felices</span></p>
            </div>
            <div className={styles.section}>
                <Image src={proyectos} />
                <p className={styles.number}>75+</p>
                <p><span>Premios</span></p>
            </div>
        </div>
    )
}