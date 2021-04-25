const ListItem = (props) => {
  return <li className='main-list-item'>{props.children}</li>
}

export const MainList = (props) => {
  const list = props.data
  return (
    <ul className='main-list'>
      {list.map((item) => (
        <ListItem key={item._id} {...item}>
          {item.desc}
        </ListItem>
      ))}
    </ul>
  )
}
