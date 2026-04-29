# 🧊 Smart Fridge List

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/alphacodeke/smart-fridge/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/alphacodeke/smart-fridge)](https://github.com/alphacodeke/smart-fridge/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/alphacodeke/smart-fridge)](https://github.com/alphacodeke/smart-fridge/network)
[![GitHub issues](https://img.shields.io/github/issues/alphacodeke/smart-fridge)](https://github.com/alphacodeke/smart-fridge/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/alphacodeke/smart-fridge)](https://github.com/alphacodeke/smart-fridge/commits/main)

A web-based shopping and inventory management app that helps users track grocery items, monitor expiry dates, and reduce food waste. Never let food expire in your fridge again!

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://alphacodeke.github.io/smart-fridge)
[![Netlify Status](https://img.shields.io/badge/netlify-deployed-success)](https://anthonyke.netlify.app)

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Font Awesome](https://img.shields.io/badge/Font%20Awesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![VS Code](https://img.shields.io/badge/VS%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## 📱 Responsive

![Responsive](https://img.shields.io/badge/responsive-yes-brightgreen)
![Mobile Friendly](https://img.shields.io/badge/mobile-friendly-blue)
![Cross Platform](https://img.shields.io/badge/cross%20platform-Yes-lightgrey)

## ✨ Features

### Core Features
- ✅ **Add Items** - Add groceries with name, expiry date, and price
- 🎨 **Smart Color Coding** - Visual indicators for freshness status
  - 🟢 Fresh (3+ days remaining)
  - 🟠 Urgent (2 days or less)
  - 🔴 Expired (Past expiry date)
- 📊 **Auto-Sorting** - Items automatically sorted by urgency
- 💾 **Local Storage** - Data persists after browser close
- 📱 **Mobile Responsive** - Works perfectly on all devices

### Advanced Features
- 🛒 **Store Mode** - Clean, large-text view for shopping trips
- 🏠 **Fridge Mode** - Full details for home inventory
- 💰 **Cost Tracking** - Total value of all groceries
- 📈 **Real-time Stats** - Item count and urgency tracking
- 🗑️ **Batch Operations** - Remove all purchased items at once
- ⚡ **Quick Delete** - Remove individual items easily

## 🎯 Problem Solved

This app addresses two major household challenges:

1. **Food Waste** - By making expiry dates visible and prioritized, items are less likely to be forgotten and expire
2. **Forgotten Shopping Lists** - Store Mode provides a clean, readable list for supermarket trips

## 🖥️ Installation

### Local Development

```bash
# Clone the repository
git clone https://github.com/alphacodeke/smart-fridge.git

# Navigate to project directory
cd smart-fridge

# Open index.html in your browser
open index.html
```

### Using with Live Server (Recommended)

```bash
# Using VS Code Live Server extension
Right-click index.html → Open with Live Server
```

## 📖 Usage Guide

### Adding Items
1. Enter item name (e.g., "Milk", "Chicken", "Salad")
2. Select expiry date from date picker
3. Enter price (optional)
4. Click "Add Item" or press Enter

### Managing Your List
- **Check off items** - Click checkbox when item is purchased
- **View expiry info** - Hover over expiry badge for details
- **Delete items** - Click trash icon to remove single items
- **Clear bought** - Remove all checked items at once
- **Clear all** - Delete entire list (with confirmation)

### Mode Switching
- **Fridge Mode** - Full details with expiry tracking
- **Store Mode** - Clean view optimized for shopping

## 🎨 Color Legend

| Color | Status | Meaning |
|-------|--------|---------|
| 🟢 Green | Fresh | 3+ days until expiry |
| 🟠 Orange | Urgent | 1-2 days remaining |
| 🔴 Red | Expired | Past expiry date |
| ⚪ Gray | Purchased | Item has been bought |

## 📁 Project Structure

```
smart-fridge/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # Application logic
├── README.md           # Documentation
└── .gitignore          # Git ignore file
```

## 🔧 Future Enhancements

- [ ] Voice input for hands-free adding
- [ ] Barcode scanner integration
- [ ] Recipe suggestions based on expiring items
- [ ] Shopping list sharing with family members
- [ ] Email notifications for expiring items
- [ ] Export/Import list as JSON
- [ ] Dark mode support
- [ ] Multiple fridge/freezer profiles

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**ALPHACODE SOLUTIONS**

- GitHub: [@alphacodeke](https://github.com/alphacodeke)
- Website: [https://anthonyke.netlify.app](https://anthonyke.netlify.app)

## 🙏 Acknowledgments

- Font Awesome for the amazing icons
- Netlify for free hosting
- All contributors and users of this app

## 📊 Project Status

![Project Status](https://img.shields.io/badge/status-active-success)
![Open Source](https://img.shields.io/badge/open%20source-%E2%9D%A4-brightgreen)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen)
