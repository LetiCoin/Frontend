import css from './Home.module.css';

function HomePage() {
    return (
        <header className={css.header}>
            <h1 className={css.logo}>LetiCoin</h1>
            <p className={css.subtext}>Comming Soon...</p>
        </header>
    );
}



export default HomePage;
