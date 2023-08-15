import styles from "./launch.module.css";
import moment from "moment";

const Launch = ({ launch }) => {
  return (
    <div>
      <div className={styles.launchTitle}>{launch.name}</div>
      <div>Id: {launch.id}</div>
      <div>Flight Number: {launch.flight_number}</div>
      <div>
        Launch Date: {moment(launch.date_utc).format("MMMM Do YYYY, h:mm:ss a")}
      </div>
    </div>
  );
};

export default Launch;
