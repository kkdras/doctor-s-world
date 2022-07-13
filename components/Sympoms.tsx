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

export let Symptoms: FC<ISymptoms> = ({ patients, activePatient }) => {
	if (!patients) return <div>"...loading"</div>

	let [active, setActive] = useState<{ el: HTMLElement, key: number } | null>(null)

	useEffect(() => {
		let handler = (e) => {
			if (active && !active.el.contains(e.target)) setActive(null)
		}
		document.addEventListener("click", handler)
		return () => document.removeEventListener("click", handler)
	})


	let { img, age, symptoms } = patients[activePatient]
	return <div className={style.symptoms}>
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
	</div>
}


interface ISymptomItem {
	description: string
	img: StaticImageData
	index: number
	setActive: (active: { el: HTMLElement, key: number }) => void
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
	console.log("hey ho")

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