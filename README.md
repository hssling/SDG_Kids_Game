# 🌍 SDG Kids Game

An interactive educational game for children 6-12 years old to learn about the United Nations Sustainable Development Goals (SDGs) through fun quizzes, riddles, and educational content.

![SDG Kids Game](https://img.shields.io/badge/Platform-Cordova-blue?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Version](https://img.shields.io/badge/Version-1.0.0-orange?style=flat-square)

## 🎯 About the Project

The SDG Kids Game is a mobile application designed to introduce children to the 17 United Nations Sustainable Development Goals. Through gamified learning experiences, children can:

- **Learn**: Discover what each SDG is about through clear descriptions and fun facts
- **Quiz**: Test their knowledge with multiple-choice questions
- **Solve**: Work through challenging riddles about global issues
- **Earn**: Points and badges for learning achievements

### 🏆 Key Features

- **📚 Comprehensive SDG Content**: All 17 SDGs covered with age-appropriate explanations
- **❓ Interactive Quizzes**: Multiple-choice questions with immediate feedback
- **🧩 Educational Riddles**: Problem-solving challenges with hints
- **🎨 Beautiful UI/UX**: Kid-friendly design with animations and visual feedback
- **📱 Mobile-First**: Optimized for mobile devices and touch interaction
- **🚀 Cross-Platform**: Built with Cordova for iOS and Android deployment

## 📋 Prerequisites

### System Requirements
- **Node.js**: v14.0.0 or higher (LTS version recommended)
- **Cordova CLI**: v10.0.0 or higher
- **Android Studio**: For Android development and APK building
- **Java JDK**: v8 or higher (JDK 8 recommended for Cordova compatibility)

### Installation
```bash
# Install Node.js (if not already installed)
# Download from: https://nodejs.org/

# Install Cordova CLI globally
npm install -g cordova

# Verify installations
node --version
npm --version
cordova --version
```

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/hssling/SDG_Kids_Game.git
cd SDG_Kids_Game
```

### 2. Install Dependencies
```bash
# Navigate to Cordova project
cd SDGApp

# Install project dependencies
npm install
```

### 3. Setup Android Platform
```bash
# Add Android platform
cordova platform add android

# Verify platforms
cordova platform list
```
*Note: Ensure Android SDK is properly configured in Android Studio*

### 4. Build the Project
```bash
# Build debug version
cordova build android

# Or build with specific configuration
cordova build android --debug
```

## 🎮 Development Workflow

### Testing in Browser
```bash
# Open app in browser for quick testing
# Navigate to: SDGApp/www/index.html
# Open directly in your preferred browser

# Or use a local server
npx http-server SDGApp/www -o
```

### Android Device Testing
```bash
# Connect Android device via USB
# Enable USB debugging in developer options

# Run on connected device
cordova run android --device

# Or run on emulator
cordova emulate android
```

### Code Structure

```
SDG_Kids_Game/
├── SDGApp/                    # Cordova project root
│   ├── www/                   # Web assets
│   │   ├── index.html         # Main HTML file
│   │   ├── css/
│   │   │   └── index.css      # Stylesheets
│   │   ├── js/
│   │   │   ├── game.js        # Main game logic
│   │   │   └── sdg_data.js    # SDG content and questions
│   │   └── img/               # Images and icons
│   ├── platforms/             # Platform-specific code
│   ├── plugins/               # Cordova plugins
│   ├── config.xml             # Cordova configuration
│   └── build.json             # Build configuration
├── .github/
│   └── workflows/             # GitHub Actions CI/CD
├── docs/                      # Documentation
├── screenshots/               # App screenshots
├── LICENSE                    # MIT License
└── README.md                  # This file
```

## 📱 App Features

### Main Menu
- **Play Quiz**: Test SDG knowledge with interactive questions
- **Solve Riddles**: Challenge yourself with SDG-themed puzzles
- **Learn SDGs**: Explore all 17 goals with descriptions and fun facts
- **View Points**: Track learning progress and achievements

### Game Modes

#### 📝 Quiz Mode
- Multiple-choice questions for each SDG
- Instant feedback with explanations
- Progressive difficulty levels
- Scoring system with points earned

#### 🧩 Riddle Mode
- Problem-solving challenges
- Context clues about SDGs
- Hint system for support
- Creative thinking exercises

#### 📚 Learning Mode
- Complete SDG information
- Age-appropriate explanations
- Fun facts and real-world examples
- Visual representations and animations

### Scoring System
- **Quiz Correct**: +10 points
- **Riddle Solved**: +15 points
- **Achievement Levels**:
  - 0-9 points: Beginner
  - 10-49 points: Learner
  - 50-99 points: Expert
  - 100+ points: SDG Champion

## 🚀 Deployment

### Android APK Generation

#### Debug APK (For Testing)
```bash
cd SDGApp
cordova build android --debug
# APK located: platforms/android/app/build/outputs/apk/debug/
```

#### Release APK (For Production)
```bash
# Build release version
cordova build android --release --buildConfig=build.json

# APK located: platforms/android/app/build/outputs/apk/release/
```

#### Android App Bundle (AAB) - Recommended
```bash
# Generate AAB for Google Play Store
cordova build android --release --buildConfig=build.json
# Bundle located: platforms/android/app/build/outputs/bundle/release/
```

### Google Play Store Publishing

See [PUBLISHING_GUIDE.md](README_PUBLISHING.md) for detailed instructions on:
- Creating Google Play Console account
- Preparing store listing
- Upload and release process
- Testing requirements

### iOS Deployment (Future)

Requirements for iOS deployment:
- macOS with Xcode
- iOS Developer Program membership ($99/year)
- Xcode command line tools

```bash
# Add iOS platform
cordova platform add ios

# Build for iOS
cordova build ios

# Open in Xcode for deployment
open platforms/ios/SDG Kids Game.xcodeproj
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

### 1. Fork the Repository
```bash
# Fork this repository on GitHub
```

### 2. Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 3. Make Changes
- Add new SDG content
- Improve game mechanics
- Fix bugs or UI issues
- Add new languages
- Enhance educational content

### 4. Test Thoroughly
```bash
# Test in browser
# Test on Android device
# Verify all features work correctly
```

### 5. Submit Pull Request
```bash
git push origin feature/your-feature-name
# Create pull request on GitHub
```

### Contribution Guidelines
- Follow existing code style and structure
- Add comments for complex logic
- Test on multiple devices when possible
- Update documentation for significant changes
- Ensure backward compatibility

## 📊 Testing & Quality Assurance

### Automated Testing
```bash
# Run Cordova tests (if configured)
npm test
```

### Manual Testing Checklist
- [ ] App launches without crashes
- [ ] All screens load correctly
- [ ] Touch/click interactions work
- [ ] Scoring system functions properly
- [ ] All 17 SDGs have content
- [ ] Quiz questions work correctly
- [ ] Riddles have working hints
- [ ] App works in both orientations
- [ ] Performance is smooth on target devices

### Compatibility Testing
Target device specifications:
- **Minimum Android**: API Level 21 (Android 5.0)
- **Target Android**: API Level 30 (Android 11+)
- **Screen Sizes**: Phones and small tablets
- **RAM**: 2GB minimum

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Dr. Siddalingaiah H S

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🏫 Educational Impact

### Learning Objectives
- Understand the Sustainable Development Goals
- Recognize global challenges and solutions
- Develop environmental awareness
- Appreciate diversity and inclusion
- Foster global citizenship values

### Age Appropriateness
- **Target Age**: 6-12 years
- **Reading Level**: Elementary school
- **Cognitive Level**: Basic problem-solving and comprehension

### Accessibility Features
- Large, touch-friendly buttons
- Clear font sizes and high contrast
- Simple language and explanations
- Visual feedback for interactions
- Audio cues (future enhancement)

## 🔄 Future Enhancements

### Planned Features
- [ ] Multiple language support (Hindi, Spanish, French)
- [ ] Parent dashboard for progress tracking
- [ ] Badge/achievement system
- [ ] Social sharing of progress
- [ ] Offline content updates
- [ ] Teacher resources and guides
- [ ] Integration with educational platforms

### Technical Improvements
- [ ] Progressive Web App (PWA) capabilities
- [ ] Better performance optimization
- [ ] Enhanced animations and graphics
- [ ] Voice narration for accessibility
- [ ] Advanced analytics and reporting

## 🙏 Acknowledgments

### Content Contributors
- SDG content sourced from official UN documentation
- Educational framework based on child development research
- Game mechanics inspired by successful educational apps

### Technical Credits
- Built with Apache Cordova framework
- Educational content validated by subject matter experts
- UI/UX designed for optimal child engagement

### Special Thanks
- United Nations Development Programme (UNDP)
- UNICEF for child education resources
- Educators and parents for valuable feedback
- Open-source community for development tools

## 📞 Support & Contact

### For Issues and Questions
- **GitHub Issues**: [Report bugs and request features](https://github.com/hssling/SDG_Kids_Game/issues)
- **Documentation**: Read full documentation in `/docs` folder

### Contact Information
- **Developer**: Dr. Siddalingaiah H S
- **Email**: [Contact information]
- **GitHub**: [@hssling](https://github.com/hssling)

### Community
- ⭐ Star this repository to show support
- 🔄 Fork and contribute improvements
- 💬 Share with educators and parents
- 📢 Spread awareness about SDGs

---

## 🌟 Impact Messages

*"Every child deserves to know about our beautiful planet and how to take care of it. This game helps bridge that knowledge gap in a fun, engaging way."*

*"Education is the key to sustainability. Thank you for creating tools that make learning about global goals accessible to children everywhere."*

*"Well-designed educational games like this have the power to shape tomorrow's global citizens. Keep up the excellent work!"*

---

**Made with ❤️ for a better world**

*Dr. Siddalingaiah H S*
*Healthcare Informatics & Computational Biology Expert*
