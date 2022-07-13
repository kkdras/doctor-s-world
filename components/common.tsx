import { StaticImageData } from "next/image"
import { FC, memo } from "react"
import style from "./common.module.scss"
import cross from "../src/assets/cross.png"
interface ITitle {
	text: string
	type: "h1" | "h2"
}

export let Title: FC<ITitle> = ({ text, type }) => {

	return type === "h1" ?
		<h1 className={`${style.title} ${style.title_primary}`}>{text}</h1> :
		<h2 className={`${style.title} ${style.title_secondary}`}>{text}</h2>
}

interface ISymptomPicture {
	mainImg: StaticImageData
	secondImg?: StaticImageData
	onClick?: (e: Event) => void
}

let SymptomPictureWithoutMemo: FC<ISymptomPicture> = ({ mainImg, secondImg = cross, onClick }) => {
	let handler = (e) => {
		onClick && onClick(e)
	}

	return <div onClick={handler} className={style.symptomPicture}>
		<div className={style.symptomPicture__secondImage}>
			<img src={secondImg.src} alt="" />
		</div>
		<div className={style.symptomPicture__mainImg}>
			<img src={mainImg.src} alt="" />
		</div>
	</div>
}

export let SymptomPicture = memo(SymptomPictureWithoutMemo)