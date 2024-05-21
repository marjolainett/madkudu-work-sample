# Technical requirements document (TRD)

## Project overview

The Antelope Data Dashboard is a web application providing data visualization about antelopes through various charts and a detailed data table. It aims to offer users an intuitive interface to explore and analyze data related to different antelope species.

## Functional requirements

- **Web application:**

  - Use JavaScript or TypeScript
  - Build with React.js
  - Fetch and display data from a provided JSON file

- **Data visualization:**

  - Implement at least 2 charts to represent antelopes data meaningfully

- **Data table:**
  - Display comprehensive antelopes data including images, names, continents, weights, heights, and horn types.
  - Support large datasets

## Non-functional requirements

- **Usability:**

  - The interface should be user-friendly
  - Consistent design and styling should be applied for a professional look

## Constraints and assumptions

- The data provided will be in JSON format
- The application will be used in modern web browsers

## Test cases

- **Table:**

  - Ensure all antelope data is correctly displayed in the table
  - Verify that the table supports vertical scrolling for large datasets

- **Charts:**

  - Verify that the scatter chart accurately represents the relationship between antelope weight and height
  - Ensure the radar chart correctly compares different horn types across various countries
  - Test the chart type selector to ensure it switches charts correctly

## Technical specifications

- **Frontend**: HTML, CSS, JavaScript, React.js, Chart.js
- **Data**: static JSON file located in the public directory
