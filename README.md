# Skinstric

A responsive AI-powered skin analysis experience built with React and Vite.

Skinstric guides users through an interactive onboarding and selfie-capture flow, sends user data to an external API for analysis, and presents demographic results through a polished, responsive interface.

## Live Demo

[View Skinstric](https://skinstric-olive.vercel.app)

## About the Project

Skinstric is a frontend application focused on creating a smooth, intuitive user experience around AI-powered demographic analysis.

Users move through a multi-step flow that collects basic information, captures or uploads a selfie, submits the image for analysis, and displays the resulting demographic predictions.

The project challenged me to work with asynchronous API requests, image handling, multi-page application flow, responsive layouts, and reusable React components while closely translating a provided design into a functional application.

## Features

- Multi-step onboarding experience
- Name and location data collection
- Selfie capture and image upload
- External API integration
- AI-generated demographic analysis
- Interactive results and summary views
- Responsive layouts across screen sizes
- Reusable React components
- Loading and navigation states
- Structured multi-page user flow

## Tech Stack

**Frontend**

- React
- JavaScript
- Vite
- CSS

**Development & Deployment**

- Git
- GitHub
- Vercel
- REST APIs

## Application Flow

1. User enters their name and location.
2. The information is submitted through the initial API request.
3. The user proceeds to the selfie experience.
4. A selfie can be captured or an image uploaded.
5. The image is submitted for demographic analysis.
6. The application receives the analysis response.
7. Results are presented through interactive demographic and summary views.

## What I Learned

Building Skinstric strengthened my understanding of:

- Managing state across a multi-step React experience
- Working with asynchronous API requests and responses
- Handling image data in the browser
- Building reusable components
- Creating responsive interfaces from a provided design
- Managing navigation across a multi-page user journey
- Debugging API and application-state behavior
- Refining an application through multiple development phases

## Project Structure

```text
src/
├── components/
├── pages/
│   ├── Select.jsx
│   ├── Selfie.jsx
│   ├── Summary.jsx
│   ├── Testing.jsx
│   └── Upload.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```
