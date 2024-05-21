# Antelopes Data Dashboard

## Project overview

The Antelope Data Dashboard is a web application providing data visualization about antelopes through a choice of charts and a detailed data table. It helps users to explore and analyze data related to different antelope species.

## Features

- Visualization of antelopes data using scatter and radar charts
- A detailed data table displaying antelopes information with scrolling support for large datasets

## Technologies used

- **Frontend**: HTML, CSS, JavaScript, React.js
- **Charts**: Chart.js
- **Data**: static JSON file

## How to run locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/marjolainett/madkudu-work-sample.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd madkudu-work-sample
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the app in development mode:**

   ```bash
   npm start
   ```

5. Open your browser and go to [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

- src/: contains the source code
  - components/: contains React components (ScatterPlot, RadarChart and Table)
  - App.js: main application component
  - index.js: entry point of the application
  - index.css: global styles
- public/: contains public assets
  - species.json: static JSON file with antelope data
