# Secret Number Game 🎲

<div align="center">
  
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A JavaScript-based number guessing game developed as part of Alura's Programming Logic course.

[Demo](#-how-to-play) · [Features](#-features) · [Technologies](#-technologies-used)

</div>

---

## 📋 About The Project

An interactive web game where players try to guess a secret number between 1 and 10. The application features text-to-speech functionality, visual feedback, and a modern, responsive interface with gradient backgrounds and glassmorphism effects.

### Built With

This project was developed using vanilla JavaScript and modern web technologies to create an engaging learning experience.

## ✨ Features

- **🎯 Random Number Generation**: Generates unique random numbers without repetition until all numbers in the range have been used
- **💬 Interactive Gameplay**: Players receive "higher" or "lower" hints after each guess
- **📊 Attempt Tracking**: Counts and displays the number of attempts taken to guess correctly
- **🔊 Text-to-Speech**: Audio feedback using ResponsiveVoice.js for an enhanced user experience
- **📱 Responsive Design**: Fully responsive layout that adapts to screens below 1250px width
- **🔄 Game Reset**: Start a new game with a fresh secret number after winning

## 🎮 How to Play

1. Enter a number between 1 and 10 in the input field
2. Click the **"Guess"** button to submit your answer
3. Follow the hints:
   - ⬆️ "Try a higher number"
   - ⬇️ "Try a lower number"
4. Win the game by guessing the correct number 🎉
5. Click **"New game"** to play again

## 🛠️ Technologies Used

| Technology             | Purpose                                                          |
| ---------------------- | ---------------------------------------------------------------- |
| **HTML5**              | Structure and semantic markup                                    |
| **CSS3**               | Modern styling with flexbox layout, gradients, and media queries |
| **JavaScript (ES6)**   | Game logic and DOM manipulation                                  |
| **ResponsiveVoice.js** | Text-to-speech functionality                                     |
| **Google Fonts**       | Chakra Petch and Inter font families                             |

## 📂 Project Structure

```
jogonumerosecretojs/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── app.js              # Game logic and functionality
├── README.md           # Project documentation
└── img/                # Image assets
    ├── code.png        # Background image
    ├── Ruido.png       # Noise texture
    └── ia.png          # Decorative character image
```

## 🎨 Design Features

- **Color Palette**: Blue gradient background (`#1354A5` → `#041832` → `#01080E`)
- **UI Effects**: Glassmorphism container with border and shadow effects
- **Visual Elements**: Background image overlay with reduced opacity
- **Interactions**: Disabled button state styling
- **Responsiveness**: Mobile-responsive layout adjustments for screens < 1250px

## 🔧 Key Functions

```javascript
// Core game functions
generateRandomNumber(); // Creates unique random numbers within the defined range
verificarChute(); // Validates player guesses and provides feedback
exibirTextoNaTela(); // Updates UI text and triggers speech synthesis
restartGame(); // Resets game state for a new round
clearInput(); // Clears the input field after each guess
```

## 📚 Learning Objectives

This project was developed as part of **Alura's Programming Logic course** to practice:

- ✅ DOM manipulation
- ✅ Event handling
- ✅ Conditional logic
- ✅ Function creation and reuse
- ✅ Array operations
- ✅ Random number generation

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/ricardoslinhares/jogonumerosecretojs.git
   ```

2. Navigate to the project directory

   ```bash
   cd jogonumerosecretojs
   ```

3. Open `index.html` in your browser

   ```bash
   # On macOS
   open index.html

   # On Linux
   xdg-open index.html

   # On Windows
   start index.html
   ```

No installation or build process required! 🎉

## 📸 Screenshots

The game features a modern interface with:

- Centered layout with gradient background
- Responsive input field for number entry
- Visual feedback for game state
- Glassmorphism design effects

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is part of an educational course and is available for learning purposes.

## 👤 Author

<div align="center">
  <img src="https://avatars.githubusercontent.com/u/155170516?v=4" width="100" style="border-radius: 50%;" alt="Ricardo Linhares"/>
  
  **Ricardo Linhares**
  
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ricardoslinhares)
</div>

---

<div align="center">
  Made with ❤️ as part of Alura's Programming Logic Course
  
  ⭐ Star this repo if you found it helpful!
</div>
