import styles from '../styles/navbar.module.css'
export default function Navbar () {
    return (
        <nav className={styles.nav}>
            <div className={styles.navLeft}>
                
                <div className={styles.leftText}>
                    <h2>UTP</h2>
                    <p>Universidad</p>
                    <p>Tecnológica del</p>
                    <p>Perú</p>
                </div>
                
            </div>
            <div className={styles.navRight}>
                <ul>
                    <li><p>Inicio</p></li>
                    <li><p>Nosotros</p></li>
                    <li><p>Comites</p></li>
                    <li><p>Portafolio</p></li>
                    <li><p>Comentarios</p></li>
                    <li><p>Registrate</p></li>
                </ul>
            </div>
        </nav>
        
    )
}