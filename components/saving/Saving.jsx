import styles from './Saving.module.css'

export default function Saving() {
	return (
		<>
			<div className={'header__section mb-5'}>
				<h3 className="header__section__subtitle">Los P*t@s del ahorro</h3>
			</div>
			<div className={styles.saving + ' mb-2'}>
				<div className={styles.saving__play}>
					<img src='/img/play.png' />
				</div>
				<div className={styles.saving__caption}>
					<h2>Esto es AHORRO</h2>
					<p>Conoce como nuestro RoboAdvisor crea el mejor portafolio de inversión para ti.</p>
				</div>
			</div>
			<div className={styles.counter + ' mb-6'}>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</>
	)
}