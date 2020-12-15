import styles from './Header.module.css'

export default function Header() {
	return (
		<div className={'header__section mb-8'}>
			<h3 className="header__section__subtitle">Hola, Camila</h3>
			<img src="/img/notifications.png" className='header__section__img' />
		</div>
	)
}