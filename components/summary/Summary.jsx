import styles from './Summary.module.css'

export default function Summary() {
	return (
		<div className={styles.summary + ' flex flex-col bg-white rounded-2xl box-shadow p-5'}>
			<div>
				<span>Inversión</span>
				<span>$1.600.000</span>
			</div>
			<div className={styles.divider + ' my-2.5'}></div>
			<div>
				<span>Rendimiento</span>
				<span>-$30.000</span>
			</div>
		</div>
	)
}