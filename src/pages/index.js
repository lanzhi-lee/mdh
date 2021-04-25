import Head from 'next/head'
// import '../styles/MainPage.css'

import { TopNav, AsideNav, MainList } from '../components/main'

export default function Home(props) {
  console.log(props)
  const { mainList } = props

  return (
    <>
      <Head>
        <title>MDH - make developer happier</title>
        <link rel='icon' href='https://www.leezx.cn/blog/favicon.ico' />
      </Head>

      <div className='view-container'>
        <header className='view-header'>
          <TopNav />
        </header>

        <main className='view-main'>
          <aside className='aside-panel'>
            <AsideNav />
          </aside>

          <main className='view-content'>
            <MainList data={mainList} />
          </main>
        </main>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      mainList: [
        {
          _id: '2425sf5s4er587rf5',
          type: 'news',
          desc: '微软的Rust入门教程，确实如云谦所说，微软最近搞了好多教程 ',
          links: ['https://docs.microsoft.com/zh-cn/learn/paths/rust-first-steps/'],
          sharer: 'baibai_lee@163.com',
          tags: ['前端'],
        },
        {
          _id: 'fawelfjo24iaufw435436',
          type: 'news',
          desc: '微软的Rust入门教程，确实如云谦所说，微软最近搞了好多教程 ',
          links: ['https://docs.microsoft.com/zh-cn/learn/paths/rust-first-steps/'],
          sharer: 'baibai_lee@163.com',
          tags: ['前端'],
        },
      ],
    },
  }
}
