import style from "./Copyright.module.css";

export default function Copyright() {
    return (
        <div className={style.copyright}>
            &copy; {new Date().getFullYear()} Task Master
        </div>
    );
}
