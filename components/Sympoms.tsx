import { StaticImageData } from "next/image";
import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import { TypePatient } from "../pages";
import { IArticlesData } from "../src/API/makeRequest";
import { SymptomPicture } from "./common";
import style from "./Symptoms.module.scss"


interface ISymptoms {
	patients: IArticlesData["patients"] | null,
	activePatient: TypePatient
}

type activeType = { el: HTMLElement, key: number } | null

export let Symptoms: FC<ISymptoms> = ({ patients, activePatient }) => {
	if (!patients) return <div>"...loading"</div>
	let [active, setActivePure] = useState<activeType>(null)
	let activeRef = useRef(active)

	let setActive = useCallback((active: activeType) => {
		setActivePure(active)
		activeRef.current = active
	}, [])

	useEffect(() => {
		let handler = (e) => {
			if (activeRef.current && !activeRef.current.el.contains(e.target)) setActive(null)
		}
		document.addEventListener("click", handler)
		return () => document.removeEventListener("click", handler)
	})


	let { img, age, symptoms } = patients[activePatient]
	return <section className={style.symptoms}>
		<div className={style.symptoms__question}>Сообщает ли один из ваших пациентов о следующих симптомах? <a href="#">(нажмите на любую иконку и узнайте больше)</a></div>
		<div className={style.symptoms__carousel}>
			{patients ? <>
				<Diseased img={img} age={age} />
				{symptoms.map((item, i) => {
					return <SymptomItem
						setActive={setActive}
						isActive={i === active?.key}
						description={item.description}
						index={i}
						key={i}
						img={item.img}
					/>
				})}
			</> : "...loading"

			}
		</div>
	</section>
}


interface ISymptomItem {
	description: string
	img: StaticImageData
	index: number
	setActive: (active: activeType) => void
	isActive: boolean
}

export let SymptomItemWithoutMemo: FC<ISymptomItem> = ({ description, img, index, isActive, setActive }) => {
	let symptomEl = useRef(null)
	let handler = useCallback((e: Event) => {
		if (isActive) {
			setActive(null)
		}
		else {
			setActive({ el: symptomEl.current, key: index })
		}
	}, [index, isActive])

	return (
		<div ref={symptomEl}
			className={`${style.symptomItem} ${style.symptoms__item} ${(index + 1) ? style[`symptoms__item_${index + 1}`] : ""}`}
		>
			<SymptomPicture mainImg={img} onClick={handler} />
			<div className={`${style.symptomItem__content} ${!isActive ? style.symptomItem__hidden : ""}`}>{description}</div>
		</div>
	)
}

export let SymptomItem = memo(SymptomItemWithoutMemo)



interface IDiseased {
	img: StaticImageData
	age: string
}

export let Diseased: FC<IDiseased> = ({ img, age }) => {
	return <div className={style.diseased}>
		<div className={style.diseased__imageContainer}>
			<img src={img.src} alt="" />
		</div>
		<div className={style.diseased__content}>{age}</div>
	</div>
}