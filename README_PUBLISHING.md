# SDG Kids Game - Testing and Publishing Guide

This guide provides step-by-step instructions to test your SDG educational game and publish it on the Google Play Store.

## 📋 Prerequisites

### Software Requirements:
- Node.js (latest LTS version)
- Cordova CLI: `npm install -g cordova`
- Android Studio (for APK building and testing)
- Google Play Console account ($25 one-time fee)
- Java JDK 8 (required for Cordova Android builds)

### Hardware Requirements:
- Android device for testing (or emulator)
- Developer computer with sufficient RAM

## 📱 Step 1: Setup Development Environment

### 1.1 Install Required Software
```bash
# Install Cordova CLI globally
npm install -g cordova

# Verify installation
cordova --version
```

### 1.2 Extract the Game Files
```bash
# Unzip the published game file
unzip SDG_Kids_Publishable_v2.zip
cd SDG_Kids_Game/SDGApp
```

### 1.3 Verify Node Modules
```bash
# Navigate to project root
cd SDG_Kids_Game

# Install dependencies (if package.json exists)
npm install

# If no package.json, create one:
npm init -y
npm install cordova --save-dev
```

## 🧪 Step 2: Testing the App

### 2.1 Basic Web Testing
```bash
# Open the app in browser for initial testing
# Navigate to: SDG_Kids_Game/SDGApp/www/index.html
# Open in your browser to test basic functionality
```

### 2.2 Cordova Platform Setup
```bash
# Navigate to Cordova project
cd SDG_Kids_Game/SDGApp

# Remove existing android platform (if any)
cordova platform remove android

# Add Android platform
cordova platform add android
```

### 2.3 Build Debug APK
```bash
# Build debug version for testing
cordova build android
```

### 2.4 Test on Device/Emulator

#### Option A: Real Android Device
```bash
# Connect Android device via USB (enable USB debugging)
# Transfer APK to device
adb install platforms/android/app/build/outputs/apk/debug/app-debug.apk

# Or use this for direct deployment:
cordova run android --device
```

#### Option B: Android Emulator
```bash
# Open Android Studio and start AVD Manager
# Create/configure virtual device
# Start emulator
# Then run:
cordova emulate android
```

### 2.5 Functional Testing Checklist

#### Game Features to Test:
- [ ] Main menu loads correctly
- [ ] All 17 SDGs display with descriptions and fun facts
- [ ] Quiz functionality works (questions, options, scoring)
- [ ] Riddle system functions (inputs, hints, answers)
- [ ] Score tracking updates correctly
- [ ] Animations and transitions work smoothly
- [ ] App handles different screen orientations
- [ ] Touch inputs respond accurately
- [ ] Sound (if added) works properly

#### Play Store Compliance Testing:
- [ ] App doesn't crash when navigating between screens
- [ ] Content is appropriate for all ages
- [ ] No personal data collection
- [ ] Offline functionality works
- [ ] Battery usage is reasonable
- [ ] Memory usage is optimized

## 📤 Step 3: Prepare for Play Store Publishing

### 3.1 Generate Production APK
```bash
# Build release version
cordova build android --release --buildConfig=build.json

# Alternative command for production build
cordova build android --release
```

### 3.2 Create Signing Key (Required for Play Store)
```bash
# Generate a new keystore (do this only once)
keytool -genkey -v -keystore sdg-game.keystore -alias sdg-alias -keyalg RSA -keysize 2048 -validity 10000

# When prompted:
# Password: [choose strong password]
# First/Last Name: Your Name
# Organizational Unit: Development
# Organization: Your Organization
# City/State/Country: Your Location
```

### 3.3 Sign the APK
```bash
# For Cordova builds, create build.json file:
# {
#   "android": {
#     "release": {
#       "keystore": "path/to/sdg-game.keystore",
#       "storePassword": "your-keystore-password",
#       "alias": "sdg-alias",
#       "password": "your-alias-password",
#       "keystoreType": "jks"
#     }
#   }
# }

# Then build signed APK:
cordova build android --release --buildConfig=build.json
```

### 3.4 Generate App Bundle (AAB) - Preferred for Play Store
```bash
# Modern Play Store requires AAB (Android App Bundle)
# This creates a smaller, optimized download

# Use the same build.json configuration
# The AAB will be created in: platforms/android/app/build/outputs/bundle/release/
```

## 🎯 Step 4: Play Store Listing Preparation

### 4.1 Create Google Play Console Account
1. Go to [Google Play Console](https://play.google.com/console/)
2. Sign in with Google account
3. Pay $25 one-time developer registration fee
4. Complete account verification process

### 4.2 App Store Listing Information

#### Required Assets:
- **App Name:** SDG Kids Game - Learn About Global Goals
- **Short Description:** Educational game teaching children about Sustainable Development Goals
- **Full Description:** (4000 character limit)

#### Suggested Full Description:
```
🌍 Educational Game for Kids - Learn About Sustainable Development Goals!

Join our exciting educational adventure and discover the United Nations Sustainable Development Goals (SDGs) through fun interactive gameplay!

🎮 What You Can Do:
• Learn about all 17 Global Goals through engaging content
• Take quizzes to test your SDG knowledge
• Solve educational riddles about the planet
• Earn points and track your progress
• Beautiful animations and kid-friendly design

🎯 SDG Topics Covered:
• No Poverty • Zero Hunger • Good Health
• Quality Education • Gender Equality • Clean Water
• Affordable Energy • Decent Work • Industry Innovation
• Reduced Inequalities • Sustainable Cities • Responsible Consumption
• Climate Action • Life Below Water • Life on Land
• Peace & Justice • Partnerships for Development

Perfect for children 6-12 years old to learn about making the world a better place while having fun!

📚 Educational Value:
This game teaches kids about global challenges and solutions through interactive learning, helping them become informed global citizens.
```

#### Screenshots Required (minimum 2):
1. Main menu with SDG icons
2. Quiz gameplay showing question
3. Riddle solve screen with hint button
4. SDG learning section with fun fact
5. Score/results screen

#### Required Images:
- Icon: 512x512px (PNG format)
- Feature Graphic: 1024x500px (PNG/JPG)
- At least 8 screenshots

#### App Details:
- **Category:** Education > Education
- **Content Rating:** Everyone (PEGI 3 / ESRB Everyone)
- **Pricing:** Free
- **Supported Languages:** English

### 4.3 Create App Entry in Play Console

1. **Create App**
   - Choose "Create app" in Play Console
   - Select "Games" as app type
   - Name: SDG Kids Game
   - Default language: English

2. **Fill App Details**
   - **About your app:** Education game category
   - **App access:** All features are unrestricted
   - **Ads:** No ads in app
   - **Content rating:** Request rating

3. **Set Up Store Listing**
   - **App name:** SDG Kids Game
   - **Short description:** Educational SDG game for kids
   - **Full description:** [Copy from above]
   - **Screenshots:** Upload 8+ screenshots
   - **Feature graphic:** Upload 1024x500 image

## 📊 Step 5: Upload and Release

### 5.1 Upload APK/AAB
1. Go to **Release > Production** in Play Console
2. **Create new release**
3. **Upload bundle** (.aab file from Step 3.4)
4. **Release name:** Version 1.0 - SDG Education
5. **Release notes:**
   ```
   First release!
   - Complete SDG educational content
   - Interactive quizzes and riddles
   - Beautiful animations and feedback
   - Designed for children 6-12 years old
   ```

### 5.2 Complete Store Listing Setup

#### Pricing & Distribution:
- **Countries/regions:** All countries
- **Content rating:** Complete rating questionnaire
- **Targeted users:** All users
- **Free app:** Yes

#### Additional Requirements:
- **Privacy Policy URL:** Create on Google Sites/privacy generator
- **Terms of Service:** Link to Google's standard terms
- **App License:** Open Source/Free

### 5.3 Pre-Launch Checklist

#### Before Publishing:
- [ ] All 17 SDGs have correct descriptions
- [ ] Quiz questions work and score correctly
- [ ] Riddle hints provide helpful information
- [ ] App doesn't crash on any device tested
- [ ] Touch inputs are responsive
- [ ] App works offline (if intended)
- [ ] Memory usage is reasonable
- [ ] Battery drain test passed

#### Play Store Compliance:
- [ ] Accurate screenshots show actual gameplay
- [ ] Content rating accurately reflects app content
- [ ] App description matches functionality
- [ ] Privacy policy exists and is accurate
- [ ] Testing completed on multiple devices
- [ ] APK/AAB signed with valid certificate

### 5.4 Launch the App

1. **Review Release**
   - Check all information is correct
   - Verify screenshots and descriptions

2. **Submit for Review**
   - Click "Save" then "Review release"
   - Click "Start rollout to production"
   - Publishing usually takes 2-7 days

3. **Monitor First Reviews**
   - Respond to user feedback promptly
   - Monitor crash reports in Play Console
   - Track download and engagement metrics

## 🔧 Troubleshooting Common Issues

### Build Errors:
```bash
# Clear Cordova cache
cordova clean

# Check Android SDK installation
android update sdk --no-ui --filter platform-tools,android-23

# Verify Java version (should be JDK 8)
java -version
```

### Play Store Rejection Reasons:
- **Permissions:** App requests too many permissions
- **Content:** Inappropriate content for children
- **Stability:** App crashes frequently
- **Functionality:** App doesn't work as described
- **Privacy:** Missing or inadequate privacy policy

### Performance Issues:
- **Memory:** Optimize images and reduce unused code
- **Battery:** Remove unnecessary background processes
- **Storage:** Minimize app size (target <100MB)

## 📞 Support and Resources

- **Cordova Documentation:** https://cordova.apache.org/docs/
- **Google Play Console Help:** https://support.google.com/googleplay/android-developer
- **Android Developer Guides:** https://developer.android.com/guide
- **Google Play Policy Center:** https://play.google.com/about/developer-content-policy/

## 🚀 Post-Launch Activities

- **Monitor Performance:** Check crash reports and user metrics
- **Gather Feedback:** Read reviews and implement improvements
- **Plan Updates:** Add new content, fix bugs, improve features
- **Marketing:** Share the app on educational platforms
- **Expansion:** Consider iOS version or additional languages

---

*Note: This guide assumes you have basic development knowledge. If you encounter technical difficulties, consider consulting with an experienced mobile developer.*
