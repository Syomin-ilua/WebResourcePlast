import type { FC } from "react"
import { useCourseContext } from "../../hooks/useCourseContext"
import styles from "./index.module.css";
import { SVG } from "../svg";
import { BASE_STATIC } from "../../constants";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const TheoretiacalMaterialsCourse: FC = () => {

    const { courseData } = useCourseContext();

    return (
        <div className={styles.theoretiacalMaterialsCourse}>
            <h1 className={styles.title}>Ознакомьтесь с материалами к курсу: </h1>
            <p className={styles.course__info}>Для прохождения курса вам нужно ознакомиться с теоретической частью, после чего начинайте проходить тестирование.</p>
            <p className={styles.warning__description}><span>Важно: </span>перед началом тестирования, пожайлуста, ознакомьтесь с теоретическими материалами, время на тестирование не ограничено, будьте внимательны, и не спешите!
                В вашем личном кабинете будут сохраняться ваши результаты тестирования(записывается максимальный результат), там же на основе результатов вы можете скачать сертификат,
                который в дальнейшем вы можете использовать для повышения квалификации.</p>
            <div className={styles.theoreticalMaterials__text}>
                {courseData?.theoreticalMaterials && <ReactMarkdown children={courseData.theoreticalMaterials} remarkPlugins={[remarkGfm]} />}
            </div>
        </div>
    )
}