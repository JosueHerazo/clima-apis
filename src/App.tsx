import styles from "./App.module.css"
import Alert from "./components/form/Alert/Alert"
import Form from "./components/form/Form"
import Spinner from "./components/form/spinner/Spinner"
import WeatherDetail from "./components/form/weatherDetail/WeatherDetail"
import useWeather from "./hooks/useWeather"



function App() {
const {weather, loading, notFound, fetchWeather, hasWeatherData} = useWeather()  

  return (
    <>
     <h1 className={styles.title}>Buscador de Clima</h1>
     
     <div className={styles.container}>
        <Form
        fetchWeather={fetchWeather}
        />
        {loading && <Spinner/>}
        {hasWeatherData &&  
        <WeatherDetail
        weather={weather}/>
      }
      {notFound && <Alert>Ciudad No Encontrada</Alert>}
     </div>
    </>
  )
}

export default App
