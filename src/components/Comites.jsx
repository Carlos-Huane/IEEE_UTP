import Image from 'next/image';
import styles from '../styles/comites.module.css';
import { publicidad, investigacion, podcast, proyectos} from '@/assets';
// import publicidad from '../assets/publicidad.png';
import Button from './Button'
export default function Comites () {
    return(
        <div className={styles.comites}>
           <div className={styles.principal}>
                <h4>NUESTROS COMITÉS DE TRABAJO</h4>
                <div className={styles.principalText}>
                    <h2>Experimenta el poder</h2>
                    <h2>de la <span>innovación</span></h2> 
                </div>
                <div className={styles.line}></div>
                <p>
                Buscamos ser una comunidad de estudiantes y profesores apasionados por la tecnología y la informática, que promuevan el desarrollo de habilidades y conocimientos en estas áreas y contribuyan al avance y la innovación en el campo de la tecnología.
                </p>
                <Button texto={"VER TODO"} className={styles.button}/>
            </div>
            <div className={styles.ramas}>
                <div>
                    <Image src={publicidad} alt='Logo'/>
                        <h3><span>PUBLICIDAD Y MARKETING</span></h3>
                        <p>Diseñar y ejecutar</p>
                        <p>estrategias de </p>
                        <p>marketing y publicidad.</p>
                </div>
                <div style={{background: "linear-gradient(357.34deg, rgba(109, 149, 252, 0.55) -217.33%, rgba(109, 149, 252, 0) 66.64%)"}}>
                    <Image src={investigacion} alt='Logo'/>
                        <h3><span>INVESTIGACIÓN</span></h3>
                        <p>investigar y analizar una </p>
                        <p>problemática o </p>
                        <p>situación específica en </p>
                        <p>un campo determinado</p>
                </div>
                <div style={{background: "linear-gradient(357.34deg, rgba(109, 149, 252, 0.55) -217.33%, rgba(109, 149, 252, 0) 66.64%)"}}>
                    <Image src={podcast} alt='Logo'/>
                        <h3><span>PODCAST</span></h3>
                        <p>Producción y </p>
                        <p>publicación de podcasts</p>
                        <p>de interés para la </p>
                        <p>comunidad</p>
                </div>
                <div>
                    <Image src={proyectos} alt='Logo'/>
                        <h3><span>PROYECTOS</span></h3>
                        <p>Planificar, coordinar y</p>
                        <p>supervisar la ejecución</p>
                        <p>de los proyectos en los </p>
                        <p>que se está trabajando</p>
                </div>
            </div>
        </div>
    )
}