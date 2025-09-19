# GeoBots.xyz - Geolocation Intelligence Embedded into Maps

An interactive web map showing snippets of the world at any location, with adjustable "boundaries" and the ability to toggle between a circle and actual walking distances using Mapbox isochrone API.

This project is open-source. All the code and interface is created from scratch with the fewest external libraries possible, and the objective is to be a base for AI applications.


---

## 🌐 Live Demo

**Try it now:** [https://geobots.xyz/](https://geobots.xyz/)

---

## ✨ Key Features

* **Global Support**: Explore worldwide.
* **Interactive Map**: Simply click anywhere to instantly find the layers you want.
* **Adjustable Boundaries**: Easily choose to display between circle and walking distances.
* **Ultra-High Performance**: Optimized React application with minimal dependencies.
* **Modern Frontend**: Built with React 19, TypeScript, and Sass.

---

---

## 🚀 Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* **Node**

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/hvoking/geobots.xyz.git](https://github.com/hvoking/geobots.xyz.git)
    cd geobots
    ```

2.  **Install dependencies:**
    ```bash
    yarn install
    ```

3.  **Set up environment variables:**
    ```bash
    cp .env.example .env
    ```
    Then add your Mapbox API key to the `.env` file (see Setup section below).

4.  **Start the development server:**
    ```bash
    yarn start
    ```
    Visit `http://localhost:3000`

---

## 🔑 Mapbox API Setup

1. **Create a Mapbox account** at [mapbox.com](https://account.mapbox.com/auth/signup/)
2. **Get your access token** from [your account page](https://account.mapbox.com/access-tokens/)
3. **Add the token to your `.env` file:**
   ```
   REACT_APP_MAPBOX_TOKEN=your_actual_token_here
   ```

## 📂 Project Structure
* `src/app/` - Main application components
    * `panel/` - Left sidebar with logo and menu sections
    * `map/` - Core mapping interface with boundary tools and markers
    * `tools/` - Map interaction tools (cursor, location, search)
    * `views/` - Different view modes (agents, basemaps, features)
* `src/context/` - React Context for global state management
* `src/utils/` - Utility functions for geometry, mapping, and UI components

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please open an issue or submit a pull request.

---

## 👨‍💻 Created By

**Gustavo Gonzalez - Urban Geometry** - [ugeom.com](https://ugeom.com)  
Architect and Urbanist [Urban Geometry] (https://ugeom.com)
