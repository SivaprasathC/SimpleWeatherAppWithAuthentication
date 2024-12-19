function weather(){
    const lat=document.getElementById("lat").value
    const lon=document.getElementById("lon").value
    url=`https://api.weatherapi.com/v1/current.json?key=6c4a02b4a6aa43b4963190517241812&q=${lat},${lon}&aqi=no`
    fetch(url)
    .then(response=> response.json())
    .then(res=>{
         const data=res;
         console.log(data.current.humidity)
         const apiresult=`<table>
                <tr>
                  <th>Temperature(C)</th>
                  <th>Humidity</th>
                  <th>Wind Speed(KM/H)</th>
                </tr>
                <tr>
                  <td>${data.current.feelslike_c}</td>
                  <td>${data.current.humidity}</td>
                  <td>${data.current.wind_kph}</td>
                </tr>
              </table>  `
         document.getElementById("result").innerHTML=apiresult;
     })
}