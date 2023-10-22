import express from 'express';
const app = express();

app.get('/weather', async (req, res) => {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.query.city}&appid=09119bb03f527a275a64ef7ce5fc92e5&units=metric`); // getting data from the api
        await response.json().then(({weather, main}) => { 
            const weatherInfo = {
                 main: weather[0].main,
                  description: weather[0].description,
                   temperature: main.temp,
                    humidity: main.humidity
            }; // weather info
            res.json(weatherInfo); // showing part
        });
});
app.listen(3000, () => console.log(`Server is running on port 3000`)); // wen the server is online
