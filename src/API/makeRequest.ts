import grownUpImg from "../assets/grown-up.svg"
import childrenImg from "../assets/children.svg"

import fatigue from "../assets/fatigue.png"
import scoliosis from "../assets/scoliosis.png"
import limitedCapacity from "../assets/limitedCapacity.png"
import violations from "../assets/violations.png"
import failure from "../assets/failure.png"
import legs from "../assets/legs.png"
import joints from "../assets/joints.png"
import dislocation from "../assets/dislocation.png"

import { TypePatient } from "../../pages"
import { StaticImageData } from 'next/image';


export interface IPatient {
	age: string
	img: StaticImageData,
	diagnostics: string[],
	type: TypePatient,
	symptoms: { img: StaticImageData, description: string }[]
}

const initialState: { patients: IPatient[] } = {
	patients: [
		{
			age: "Взрослый",
			img: grownUpImg,
			diagnostics: [
				"Менее тяжелые формы СМА могут возникать и диагностироваться в зрелом возрасте.",
				"По сравнению с СМА у детей, СМА у взрослых может иметь более легкие симптомы, но без патогенетической терапии пациенты со СМА 2-3 типа неуклонно теряют двигательные навыки.",
				"По сравнению с СМА в детстве, течение СМА у взрослых может быть более коварным и трудным для распознавания."
			],
			type: 0,
			symptoms: [
				{
					description: "Утомляемость",
					img: fatigue
				},
				{
					description: "Сколиоз",
					img: scoliosis
				},
				{
					description: "Ограниченная способность поднимать руки и переносить предметы",
					img: limitedCapacity
				},
				{
					description: "Вывих бедра",
					img: dislocation
				},

				{
					description: "Нарушения жевания и глотания",
					img: violations
				},
				{
					description: "Контрактура суставов",
					img: joints
				},
				{
					description: "Неспособность бегать, изменение походки",
					img: legs
				},
				{
					description: "Дыхательная недостаточность/ респираторная дисфункция",
					img: failure
				},
			]
		},
		{
			type: 1,
			age: "Ребенок",
			img: childrenImg,
			diagnostics: [
				"Ребенок, плохо удерживающий голову, когда ему придают сидячее положение, с вялыми движениями нижних конечностей или с трудом тянущийся к предметам но при этом с осмысленным и ярким взглядом, улыбающийся и социально активный вызывает настороженность в отношении наличия СМА.",
				"Младенцам со СМА необходимо экстренное направление к специалисту, ранняя диагностика и обеспечение терапией, спасающей жизнь, поскольку эти мотонейроны очень быстро подвергаются дегенерации при прогрессировании заболевания"
			],
			symptoms: [
				{
					description: "Утомляемость",
					img: fatigue
				},
				{
					description: "Сколиоз",
					img: violations
				},
				{
					description: "Ограниченная способность поднимать руки и переносить предметы",
					img: legs
				},
				{
					description: "Неспособность бегать, изменение походки",
					img: fatigue
				},

				{
					description: "Вывих бедра",
					img: scoliosis
				},
				{
					description: "Контрактура суставов",
					img: failure
				},
				{
					description: "Нарушения жевания и глотания",
					img: limitedCapacity
				},
				{
					description: "Дыхательная недостаточность/ респираторная дисфункция",
					img: joints
				},
			]
		}
	]
}

export type IArticlesData = typeof initialState

export default (): IArticlesData => {
	return initialState
}

