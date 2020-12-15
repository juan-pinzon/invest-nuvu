import styles from './Header.module.css'

export default function Header() {
	return (
		<div className={styles.header + ' flex justify-between mb-8'}>
			<h3>Hola, Camila</h3>
			<img src="/img/notifications.png" />
		</div>
	)
}