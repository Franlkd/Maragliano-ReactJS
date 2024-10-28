import { Link } from "react-router-dom";
import AMD from './img/AMD.svg';
import Intel from './img/Intel.svg';

function Category() {
    return (
        <div className="img-category">
            <Link to="/marcas/AMD">
                <img src={AMD} alt="AMD" className="img-amd-intel"/>
            </Link>
            <Link to="/marcas/Intel">
                <img src={Intel} alt="Intel" className="img-amd-intel"/>
            </Link>
        </div>
    );
}

export default Category;