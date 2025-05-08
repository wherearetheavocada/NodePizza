import Filter from '../../components/filter/Filter'
import Header from '../../components/header/Header'
import PizzaComponent from '../../components/pizzaComponent/PizzaComponent'
import Sort from '../../components/sort/Sort'
import styles from './Home.module.css'
function Home() {
	return (
		<>
			<Header />
			<Sort />
			<div className={styles.wrapper}>
				<Filter />
				<PizzaComponent />
			</div>
		</>
	)
}

export default Home
