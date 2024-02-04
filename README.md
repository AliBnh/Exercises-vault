
# Exercises Vault

## Table of Contents

- [Introduction](#Introduction)
- [Features](#features)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Project Structure](#project-structure)

## Introduction
Welcome to Exercises Vault, a React JS application built with Material UI that provides a curated collection of exercises to help you achieve your fitness goals. The app utilizes two Rapid API services for fetching data on YouTube videos and exercises.

## Features
- Explore a variety of exercises targeting different body parts.
- Search for specific exercises using the search functionality.
- Detailed information about each exercise, including instructions, targeted muscles, secondary muscles, and required equipment.
- Watch YouTube videos for proper exercise demonstration.
- Discover similar exercises based on targeted muscles and equipment.

## Screenshots

## Installation

### Prerequisites
Make sure you have Node.js and npm installed on your machine.

### Clone the repository
git clone https://github.com/your-username/exercises-vault.git
cd exercises-vault

### Install dependencies.
npm install

### Create a .env file in the root directory and add your Rapid API keys.
REACT_APP_EXERCISE_API_KEY=your-exercise-api-key

### Start the development server.
npm start


## Project Structure
The *src* folder contains three files and four folders:

### Folders
- src/assets: Contains static assets such as images and icons.
- src/components: Holds reusable React components that are used across different parts of the application.
- src/pages: Contains two main pages:
- Home Page: The landing page where users can explore exercises based on body parts, search for specific exercises, and view a list of exercises.
- +Exercise Details Page: Displays detailed information about a specific exercise, including instructions, targeted muscles, secondary muscles, and required equipment.
- +src/utils: Includes a single utility file fetchData.js. This file contains the logic for fetching data from the Rapid API services.

### Files:
- src/App.js: The main component that serves as the entry point for the application.
- src/App.css: Styling for the main App component.
- src/index.js: The entry point for rendering the React application.

### Dependencies
- @emotion/react and @emotion/styled: For styling components with Emotion.
- @fontsource/roboto: Provides the Roboto font for your application.
- @mui/icons-material and @mui/material: Material-UI components and icons.
- react, react-dom: React core and DOM-specific libraries.
- react-horizontal-scrolling-menu: For creating horizontal scrolling menus in React.
- react-loader-spinner: A loader spinner component for React.
- react-router-dom: For handling routing in your React application.
- react-scripts: Scripts and configuration used by Create React App.
