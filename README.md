# Weather App

A simple and clean browser-based weather application that fetches and displays real-time weather data for any city using a public weather API.

---

## Live Demo
 
You can access the live version of the app here:
 
**https://weather-app-six-zeta-11.vercel.app/**

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [File Structure](#file-structure)
- [Getting Started](#getting-started)
- [Issues Faced](#issues-faced)
- [Future Endeavours](#future-endeavours)
- [License](#license)

---

## About

This weather app is a lightweight, front-end-only web application built with vanilla HTML, CSS, and JavaScript. It allows users to search for any city and instantly view current weather conditions including temperature, humidity, and an overall weather description. No frameworks or back-end servers are required to run this project.

---

## Features

- Search weather by city name
- Displays current temperature (Celsius / Fahrenheit toggle)
- Displays humidity percentage
- Shows weather condition (e.g., Clear, Cloudy, Rainy, Stormy)
- Clean and minimal user interface
- Responsive design that works on both desktop and mobile browsers

---

## File Structure

```
weather-app/
│
├── index.html       # Main HTML file - contains the app structure and layout
└── script.js        # JavaScript file - handles API calls, data parsing, and DOM updates
```

### index.html

This is the entry point of the application. It contains the search bar, the weather display card, and links to the stylesheet and JavaScript file. All UI elements such as the temperature display, humidity readout, and weather condition label are defined here.

### script.js

This file contains all the application logic. It is responsible for:

- Listening for user input and form submissions
- Making API requests to the weather data provider
- Parsing the JSON response
- Dynamically updating the DOM with temperature, humidity, and weather condition data
- Handling errors such as invalid city names or failed network requests

---

## Issues Faced

The following are common challenges encountered while building a browser-based weather application of this nature:

### 1. API Key Exposure

Since this is a purely front-end application with no back-end, the API key is visible in the JavaScript source code. Any user who inspects the page can extract the key. This is a known limitation of client-side-only apps and was partially mitigated by using a key with restricted usage permissions on the provider dashboard.

### 2. Handling Invalid City Names

When a user types a city name that does not exist or is misspelled, the API returns an error status code. Without proper error handling, the app would crash or display stale data. Robust conditional checks on the API response status were added to display a user-friendly message in such cases.

### 3. Unit Conversion

Toggling between Celsius and Fahrenheit without making a new API call required storing the raw Kelvin or Celsius value and performing the conversion locally in JavaScript. Getting the rounding and formula correct without introducing floating-point display issues took some iteration.

### 4. Inconsistent API Response Structure

Different weather conditions return slightly different JSON structures from the API (for example, some responses include multiple weather objects in an array while others include only one). Defensive coding was necessary to safely access nested properties and avoid undefined errors.

### 5. Network Latency and User Experience

On slower connections, there is a noticeable delay between submitting the search and seeing results. Without a loading indicator, the interface appeared frozen. A simple loading state was added to give the user feedback that a request was in progress.

### 6. Mobile Keyboard Behavior

On mobile browsers, the virtual keyboard would sometimes remain open after the search was submitted, obscuring the results. Programmatically blurring the input field after submission resolved this.

---

## Future Endeavours

The following features and improvements are planned for future versions of this application:

### Geolocation Support

Automatically detect the user's current location using the browser Geolocation API and display local weather without requiring a manual city search.

### 5-Day Forecast

Extend the app to show a multi-day weather forecast in addition to the current conditions, giving users a broader view of upcoming weather patterns.

### Hourly Breakdown

Add an hourly weather timeline for the current day, displaying how temperature and conditions are expected to change throughout the day.

### Weather Alerts

Integrate severe weather alert data from the API and notify the user if there are any active warnings or advisories for the searched location.

### Dark Mode

Add a dark mode toggle that persists across sessions using localStorage, improving usability in low-light environments.

### Search History

Maintain a short list of recently searched cities so users can quickly revisit weather data without retyping city names.
