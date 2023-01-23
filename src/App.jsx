import styles from "./App.module.css"
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"
import { MovieDetalles } from "./pages/MovieDetalles";
import { LandingPage } from "./pages/LandingPage";

export function App() {
    return (
        <Router>
            <header>
                <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
            </header>
            <main>
                <Routes>
                    <Route exact path="/" element={<LandingPage/>} />
                    <Route exact path="/movie/:movieId" element={<MovieDetalles/>} />
                </Routes>
            </main>            
        </Router>)
}