import styles from './Goal.module.css'

export default function Goal() {
	return (
		<>
			<div className={'header__section mb-5'}>
				<h3 className="header__section__subtitle">Tus metas</h3>
				<img src="/img/add_circle.png" className='header__section__img' />
			</div>
			<div className={styles.goal}>
				<div className={styles.goal__card}>
					<img src='/img/palm.png' />
					<span>Viaje a Islas Canarias</span>
					<div className="divider my-2.5"></div>
					<div className={styles.goal__stats}>
						<img src='/img/graph1.png' />
						<div className={styles.stats__amounts}>
							<span>$1.630.000</span>
							<span>$8.000.000</span>
						</div>
					</div>
				</div>
				<div className={styles.goal__card}>
					<img src='/img/laptop.png' />
					<span>Macbook Pro</span>
					<div className="divider my-2.5"></div>
					<div className={styles.goal__stats} >
						<img src='/img/graph2.png' />
						<div className={styles.stats__amounts}>
							<span>$0</span>
							<span>$7.000.000</span>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}