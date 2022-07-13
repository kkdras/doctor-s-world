import { FC } from "react"
import { TypePatient } from "../pages"
import { IArticlesData } from "../src/API/makeRequest"
import { Patient } from "./Patient"

import style from "./PatientWrapper.module.scss"

interface IPatientWrapper {
	data: IArticlesData | null
	setActivePatient: (age: TypePatient) => void
	activePatient: TypePatient
}



export let PatientWrapper: FC<IPatientWrapper> = ({ data, setActivePatient, activePatient }) => {
	let patients = data && data.patients.map((item) => (
		<Patient
			{...item}
			isAdaptive
			setActivePatient={setActivePatient}
		/>))

	let patientAdaptiveContent = data && data.patients[activePatient]
		.diagnostics.map((item) => (<p className="diagnosticItem">{item}</p>))

	return <section className={style.patientContainer}>
		<div className={style.patientContainer__body}>
			{patients || "...loading"}
		</div>
		<div className={style.patientContainer__adaptiveBody}>
			{patientAdaptiveContent || "...loading"}
		</div>
	</section>
}