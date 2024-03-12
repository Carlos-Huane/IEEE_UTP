import styles from '../styles/inicio.module.css'
import Image from 'next/image'
import {woman} from '../assets/index'
import Button from './Button'
export default function Inicio() {
    return (
        <div className={styles.main}>
            <div className={styles.principal}>
                <h4>IEEE STUDENT BRANCH</h4>
                <div className={styles.principalText}>
                    <h1>BIENVENIDO A IEEE</h1>
                    <h1><span>COMPUTER</span></h1> 
                    <h1><span>SOCIETY</span> UTP</h1> 
                </div>
                <div className={styles.line}></div>
                <p>
                IEEE Computer Society, cuenta con más de 80,000 miembros a nivel mundial, es la organización líder de profesionales en la computación.
                </p>
                <div className={styles.button}>
                    <Button texto={"Contactar"}/>
                </div>
            </div>
            {/* <img src={wo} alt="woman" width="300" height="200"/> */}
            <Image src={woman} /> 
            {/* <img src={"https://s3-alpha-sig.figma.com/img/6811/96d4/be582f8781e4c8b50f48968d82156732?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Nw5SuhdFY6miL78xnM-HvfkyyQ1o0X8WNLyBIWAa66nziAVvovLGZSBk7oZxKjt0JzFg-fjLaD1X--wDAwGWc96zQA5z6mHIacRKZKiNrJ76ncbr5X-OLFF9PevjY9iidCCuxP5afC8E6ggQUO50kCa6KsAi1qaB3NSXfU5URDI0b07DW871Kzy2Ojv74Cqtu-j4hJQoxW7Zrgtugvilkl0SKcRGJBNWldS0GxyXsSLDKmSVf7Jk4-Iyc1PmRedDrQToCEYArssniXRc8cBMsA-OAKrz0kO8YV3l5O9kZYmU~8qmosRhCe239ev8qRSqpKqXNQypiByF0jj6yxlMgQ__"} alt="woman" /> */}
            
        </div>
    )
}