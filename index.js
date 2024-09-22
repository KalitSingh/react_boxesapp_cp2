const Box = props => {
  const {boxName, boxSize} = props
  return (
    <div className={`box ${boxSize}`}>
      <p className='para'>{boxName}</p>
    </div>
  )
}

const element = (
  <div className='bg-container'>
    <h1 className='main-heading'>Boxes</h1>
    <div className='boxes-container'>
      <Box boxName='Small' boxSize='small-box' />
      <Box boxName='Medium' boxSize='medium-box' />
      <Box boxName='Large' boxSize='large-box' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
