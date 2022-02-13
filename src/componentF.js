import { userContext } from './App'

const ComponentF = () => {
  return (
    <div>
      <userContext.Consumer>
        {(user) => {
          return <div>My name is {user}</div>
        }}
      </userContext.Consumer>
    </div>
  )
}

export default ComponentF
