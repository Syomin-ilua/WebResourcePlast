import type { FC } from "react"
import { useCourseContext } from "../../hooks/useCourseContext"
import styles from "./index.module.css";
import { SVG } from "../svg";
import { PDFViewer } from "../PDFViewer";

export const TheoretiacalMaterialsCourse: FC = () => {

    const { courseData } = useCourseContext();

    return (
        <div className={styles.theoretiacalMaterialsCourse}>
            <h1 className={styles.title}>Ознакомьтесь с материалами к курсу: </h1>
            <p className={styles.warning__description}><span>Важно: </span>перед началом тестирования, пожайлуста, ознакомьтесь с теоретическими материалами, время на тестирование не ограничено, будьте внимательны, и не спешите!
                В вашем личном кабинете будут сохраняться ваши результаты тестирования(записывается максимальный результат), там же на основе результатов вы можете скачать сертификат,
                который в дальнейшем вы можете использовать для повышения квалификации.</p>
            {courseData?.theoreticalMaterials && <PDFViewer urlDocument={`http://localhost:3000/uploads/course-materials/materials/${courseData.theoreticalMaterials}`} />}
        </div>
    )
}