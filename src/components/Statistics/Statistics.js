import PropTypes from "prop-types";
import styles from "./Statistics.css";

const Statistics = ({ stats, title = "Upload stats" }) => {
    return (
        <section className="statistics__statistics">
            <h2 className="statistics__title">{title}</h2>

            <ul className="statistics__stat-list">
                {stats.map((element) => (
                    <li
                        className="statistics__item"
                        key={element.id}
                        id={element.id}
                        style={{ backgroundColor: generateColor() }}
                    >
                        <span className="statistics__label">
                            {element.label}
                        </span>
                        <span className="statistics__percentage">
                            {element.percentage}%
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.propTypes = {
    stats: PropTypes.array,
    title: PropTypes.string,
};

function generateColor() {
   return "#" + ((Math.random() * 0x1000000) | 0x1000000).toString(16).slice(1);
};

export default Statistics;
