import LogInComponent from '../components/LogInComponent'

const Login = ({ onLogin }) => {
  return (
    <> 
    <LogInComponent onLogin={onLogin}/>
    </>
  )
}

export default Login;