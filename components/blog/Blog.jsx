import styles from './Blog.module.css'

const data = {
	title: '10 gastos que debes evitar',
	description: 'Aunque el 66% de los adultos recibió educación para el ahorro, apenas el 44% ahorra de manera fomal.'
}

export default function Blog() {
	return (
		<div className={styles.blog + ' mb-20'}>
			<Item data={data} img='cover1.png' />
			<div className={'divider my-3.5'}></div>
			<Item data={data} img='cover2.png' />
			<div className={'divider my-3.5'}></div>
			<Item data={data} img='cover3.png' />
		</div>
	)
}

function Item(props) {
	const {title, description} = props.data
	return (
		<div className={styles.blog__item}>
			<div className={styles.item__detail + ' mr-6'}>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<img src={'/img/' + props.img} />
		</div>
	)
}