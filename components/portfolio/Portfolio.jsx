import styles from './Portfolio.module.css'

export default function Portfolio() {
	return (
		<>
			<div className={'header__section mb-5'}>
				<h3 className="header__section__subtitle">Conoce tu portafolio</h3>
				<div className="header__section__status">
					Estratega
				</div>
			</div>
			<div className={styles.portfolio + ' mb-10'}>
				<div className={styles.portfolio__stats + ' mb-5'}>
					<img src='img/holding_donut.png' />
					<div className={styles.stats__detail}>
						<div className={styles.detail__logo}>
							<img src='img/logo.png' />
							<div>15%</div>
						</div>
						<div className={styles.detail__FIC}>
							<span>FIC Old Mutual Efectivo</span>
							<span>$240.000</span>
						</div>
						<div className={styles.detail__type}>
							Tipo de activo
						</div>
						<div className={styles.detail__typeDesc}>Renta fija</div>
						<div className={styles.detail__typeDesc + ' mb-2'}>Depósito a la fija</div>
						<div className={styles.detail__controls}>
							<div>&#60;</div>
							<div>&#62;</div>
						</div>
					</div>
				</div>
				<div className={styles.portfolio__description}>
					Tu  dinero se invierte de la forma más eficiente de acuerdo al perfil de riesgo asignado por nuestro RoboAdvisor.
				</div>
			</div>
		</>
	)
}