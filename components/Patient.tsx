import { FC, useEffect, useRef } from "react"
import { TypePatient } from "../pages"
import { IArticlesData, IPatient } from "../src/API/makeRequest"
import style from "./Patient.module.scss"


interface IPatientComponent extends IPatient {
	isAdaptive: boolean
	setActivePatient: (age: TypePatient) => void
}

export let Patient: FC<IPatientComponent> = ({ age, img, diagnostics, type, isAdaptive, setActivePatient }) => {
	let title = useRef(null)
	let image = useRef(null)

	let onCLick = (e) => {
		if (e.target.tagName !== "IMG") setActivePatient(type)
	}



	return <div className={`${style.patient} ${isAdaptive ? style.patient_adaptive : ""}`}>
		<div className={style.patient__header}>
			<div className={style.patient__title}><span onClick={onCLick}>{age}</span></div>
			<div onClick={onCLick} className={style.patient__imgContainer} >
				<img src={img.src} alt="" />
			</div>
		</div>

		<div className={style.patient__diagnosticsBody} >
			{diagnostics.map((item: string) => (<p className="diagnosticItem">{item}</p>))}
		</div>
	</div>
}

