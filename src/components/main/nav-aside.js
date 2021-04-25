export const AsideNav = () => {
  const data = [
    {
      type: 'news',
      desc: 'News',
    },
    {
      type: 'tools',
      desc: '工具',
    },
    {
      type: 'guides',
      desc: '教程',
    },
  ]

  return (
    <nav className='aside-nav'>
      <ul className='aside-nav-list'>
        {data.map((item) => {
          return <li key={item.type}>{item.desc}</li>
        })}
      </ul>
    </nav>
  )
}
