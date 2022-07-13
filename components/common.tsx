import { FC } from "react"
import style from "./common.module.scss"

interface ITitle {
	text: string
	type: "h1" | "h2"
}

export let Title: FC<ITitle> = ({ text, type }) => {

	return type === "h1" ?
		<h1 className={`${style.title} ${style.title_primary}`}>{text}</h1> :
		<h2 className={`${style.title} ${style.title_secondary}`}>{text}</h2>
}