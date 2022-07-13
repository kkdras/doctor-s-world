import style from './index.module.scss'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { Title } from '../components/common'
import Layout from '../components/Layout'
import { PatientWrapper } from '../components/PatientWrapper'
import getArticles, { IArticlesData } from '../src/API/makeRequest'

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

    <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam velit, deleniti atque obcaecati omnis quibusdam maxime corporis consequuntur ipsam hic nihil architecto alias ad vitae officiis laboriosam temporibus excepturi quo commodi, qui, suscipit a iusto voluptas. Debitis voluptas eius inventore id maiores aut neque nihil alias! Earum minus excepturi sunt, iure aperiam neque, sit natus adipisci sapiente, dolores rerum vel dolorem ex eum dolorum maiores illum eveniet ipsum. Harum, beatae! Aperiam facere atque, deserunt praesentium, fugit officiis, autem ipsam molestias quam esse perferendis ab distinctio vero. Expedita, aperiam. Saepe culpa dolorem minima harum architecto accusantium eligendi assumenda voluptates unde nemo eum, laborum dolores nam distinctio expedita rerum. Eum, debitis aut quidem quisquam perferendis magnam reiciendis sequi laborum soluta excepturi, natus eveniet commodi consequatur repellat doloremque earum nulla quas in repudiandae voluptatum beatae fugit consectetur voluptatibus reprehenderit? Porro excepturi possimus modi eius atque sunt sed, explicabo vitae et mollitia quae voluptatum molestias culpa dolore distinctio ut ipsa perferendis totam! Commodi quae alias modi sed id eum quo aliquam ab nulla non veritatis culpa quos magni in maiores debitis hic magnam numquam distinctio natus voluptas, incidunt fuga? Maxime porro temporibus dolorem, dolore beatae incidunt aliquid esse adipisci sed, tempora dolorum, nisi illum quo! Harum, veritatis suscipit magni non amet eligendi ut veniam magnam! Mollitia, itaque ipsam dolores natus dicta id sed quae optio atque, reiciendis praesentium sit debitis voluptas consectetur veritatis. Illo, obcaecati, itaque similique dignissimos nulla ut quasi necessitatibus consequuntur iste, sit ullam laudantium harum sed maxime doloribus aperiam autem nihil nam placeat laboriosam impedit facere fugit quod! Ratione saepe labore obcaecati enim harum! Iure doloremque cupiditate repellat facilis alias deleniti nulla iste maiores quasi cum corporis in doloribus, odit voluptatum, a numquam aliquam pariatur voluptas, voluptatibus sunt temporibus! Itaque veritatis corrupti sequi repellendus voluptatibus nesciunt accusamus dolor odio doloremque ipsam.</div>
  </Layout>
}

export default IndexPage


//to do 

/* 
1. Адаптиыные блоки статей, на маленьких экранах нужно урать контент и оставить толеко названия.
2. Статьи вынести как независимые компоненты
3. При уменьшении контент будет отображаться в другомместе для именения нужно нажать на ссылку из адаптивных статей, можно реализовать скролл
4. При полном экране нужно реализовать изменнеие сиптомов при коике на статью 


*/


