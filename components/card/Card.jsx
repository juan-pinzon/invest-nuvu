import styles from './Card.module.css'

export default function Card() {
	return (
		<div className={styles.card + ' rounded-2xl pt-8 pl-5 pr-2.5 pb-5'}>
			<div className={styles.card__header + ' flex justify-between leading-9'}>
				<h3>
					Eres estratega
				</h3>
				<img src="/img/card-image.png" className="-mt-16" />
			</div>
			<div className={styles.card__subtitle}>
				<p>Tu saldo es</p>
			</div>
			<div className={styles.card__amount + ' font-semibold '}>
				<h2>$1.570.000</h2>
			</div>
		</div>
	)
}