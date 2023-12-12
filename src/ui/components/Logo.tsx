import logo from '../../assets/logo.png'
import styles from '../ui.module.scss'

const Logo = () => {
  return (
    <img src={logo} alt='logo' height={50} width={50} className={styles.logo} />
  )
}

export default Logo
