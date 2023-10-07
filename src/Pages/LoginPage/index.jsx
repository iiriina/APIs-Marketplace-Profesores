import AboutUs from '../../components/AboutUs'
import HomeApisComponent from "../../components/HomeApisComponent"
import LogInComponent from '../../components/LogInComponent'

const LogInPage = ({ onLogin }) => {
  return (
    <> 
    <LogInComponent onLogin={onLogin}/>
    </>
  )
}

export default LogInPage