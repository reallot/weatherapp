# 🌤️ Weather App

A beautiful, modern weather application built with HTML, CSS, and JavaScript that provides real-time weather information for any city worldwide.

## ✨ Features

- **🌍 Global Weather Data**: Get weather information for any city around the world
- **📍 Location-Based Weather**: Use your current location for instant weather updates
- **🎨 Modern UI Design**: Beautiful frosted glass effect with backdrop blur
- **📱 Responsive Design**: Works perfectly on desktop and mobile devices
- **🌡️ Detailed Information**: Temperature, feels like, humidity, and weather conditions
- **🎯 User-Friendly**: Simple and intuitive interface with clear instructions
- **⚡ Real-Time Updates**: Instant weather data from OpenWeatherMap API
- **🖼️ Custom Weather Icons**: Beautiful SVG weather icons for different conditions

## 🚀 Live Demo

[View Live Demo]((https://weatherapp-tau-gules.vercel.app/))

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox, gradients, and backdrop filters
- **JavaScript (ES6+)**: Dynamic functionality and API integration
- **OpenWeatherMap API**: Real-time weather data
- **Boxicons**: Beautiful icon library
- **Google Fonts**: Poppins font family

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/reallot/weatherapp.git
   cd weather-app
   ```

2. **Get API Key**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/api)
   - Get your free API key
   - Replace `YOUR_API_KEY` in `app.js` with your actual API key

3. **Open the application**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 🔧 Configuration

### API Key Setup
In `app.js`, replace the API key:
```javascript
// Replace this with your actual API key
api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=YOUR_API_KEY`;
```

### Customization
- **Background**: Replace `assets/bg.jpg` with your preferred background image
- **Weather Icons**: Customize icons in `assets/weather/` directory
- **Colors**: Modify CSS variables in `styles.css` for different color schemes

## 📱 Usage

### Method 1: Search by City
1. Enter a city name in the input field
2. Click "Submit" or press Enter
3. View detailed weather information

### Method 2: Use Current Location
1. Click "Use My Location" button
2. Allow location access when prompted
3. Get weather for your current location

### Navigation
- Use the back arrow (←) to return to the search screen
- Input field automatically clears when returning

## 🎨 Features Breakdown

### UI Components
- **Frosted Glass Effect**: Semi-transparent container with backdrop blur
- **Gradient Buttons**: Beautiful gradient backgrounds with hover effects
- **Responsive Design**: Adapts to different screen sizes
- **Smooth Animations**: Hover effects and transitions

### Weather Information Display
- **Temperature**: Large, prominent display with Celsius
- **Weather Condition**: Current weather description
- **Location**: City and country information
- **Feels Like**: Perceived temperature
- **Humidity**: Current humidity percentage

### Error Handling
- **City Not Found**: Displays custom error message with illustration
- **Loading States**: Shows loading indicators during API calls
- **Geolocation Errors**: Handles location permission denials

## 📁 Project Structure

```
weather-app/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── app.js              # JavaScript functionality
├── README.md           # Project documentation
└── assets/
    ├── bg.jpg          # Background image
    ├── weather/        # Weather condition icons
    │   ├── clear.svg
    │   ├── clouds.svg
    │   ├── rain.svg
    │   ├── snow.svg
    │   ├── thunderstorm.svg
    │   ├── atmosphere.svg
    │   └── drizzle.svg
    └── message/        # Error and info images
        ├── not-found.png
        └── search-city.png
```

## 🔌 API Integration

The app uses OpenWeatherMap API for weather data:

- **Endpoint**: `https://api.openweathermap.org/data/2.5/weather`
- **Parameters**: 
  - `q`: City name (for city search)
  - `lat/lon`: Coordinates (for location-based)
  - `units=metric`: Celsius temperature
  - `lang=en`: English language
  - `appid`: Your API key

## 🎯 Weather Icon Mapping

The app maps OpenWeatherMap weather codes to custom SVG icons:

- **800**: Clear sky → `clear.svg`
- **200-232**: Thunderstorm → `thunderstorm.svg`
- **300-321**: Drizzle → `drizzle.svg`
- **500-531**: Rain → `rain.svg`
- **600-622**: Snow → `snow.svg`
- **701-781**: Atmosphere → `atmosphere.svg`
- **801-804**: Clouds → `clouds.svg`

## 🚀 Future Enhancements

- [ ] 5-day weather forecast
- [ ] Weather alerts and notifications
- [ ] Multiple temperature units (Fahrenheit/Celsius)
- [ ] Weather history and trends
- [ ] Offline functionality
- [ ] Dark/Light theme toggle
- [ ] Weather maps integration
- [ ] PWA (Progressive Web App) features

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing weather data API
- [Boxicons](https://boxicons.com/) for beautiful icons
- [Google Fonts](https://fonts.google.com/) for the Poppins font family

**Made with ❤️ by [Your Name]**

*Enjoy checking the weather! 🌤️*

