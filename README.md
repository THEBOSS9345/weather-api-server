# Weather API Server

This is a simple Express.js server that provides weather information based on the city name. It uses the OpenWeatherMap API to fetch weather data for the specified city and returns the main weather details in JSON format.

## Getting Started

To get started with this weather API server, follow these instructions:

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your system

### Installation

1. Clone the repository to your local machine:

    ```sh
    git clone https://github.com/THEBOSS9345/weather-api-server.git
    ```

2. Navigate to the project directory:

    ```sh
    cd weather-api-server
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

### Usage

1. Start the server:

    ```sh
    node index.js
    ```

    The server will be running at `http://localhost:3000`.

2. Make a GET request to fetch weather information for a specific city:

    ```sh
    GET http://localhost:3000/weather?city=CityName
    ```

    Replace `CityName` with the name of the city for which you want to get weather information.

    Example:

    ```sh
    GET http://localhost:3000/weather?city=New York
    ```

    The response will be a JSON object containing the main weather details for the specified city.

## Response Format

The API responds with a JSON object containing the following main weather details:

- `main`: Main weather condition (e.g., Clear, Clouds, Rain)
- `description`: Description of the weather condition (e.g., clear sky, broken clouds)
- `temperature`: Current temperature in Celsius
- `humidity`: Humidity percentage

Example response:

```json
{
  "main": "Clear",
  "description": "clear sky",
  "temperature": 25.5,
  "humidity": 60
}
