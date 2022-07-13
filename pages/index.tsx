import style from './index.module.scss'

import { useEffect, useState } from 'react'
import { Title } from '../components/common'
import Layout from '../components/Layout'
import { PatientWrapper } from '../components/PatientWrapper'
import getArticles, { IArticlesData } from '../src/API/makeRequest'
import { Symptoms } from '../components/Sympoms'

export enum TypePatient {
  grownUp,
  child
}

const IndexPage = () => {
  let [state, setState] = useState<null | IArticlesData>(null)
  let [activePatient, setActivePatient] = useState<TypePatient>(TypePatient.grownUp)

  useEffect(() => {
    setState(getArticles())
  }, [])

  return <Layout title="doctor's world">
    <div className={style.titleContainer}>
      <Title text={'А вдруг СМА?'} type={'h1'} />
      <Title text={'Выберите, кто Ваш пациент:'} type={'h2'} />
    </div>
    <PatientWrapper data={state} activePatient={activePatient} setActivePatient={setActivePatient} />
    <Symptoms patients={state?.patients} activePatient={activePatient} />
  </Layout>
}

export default IndexPage


