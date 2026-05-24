# 🏔️ Misty Horizon Holidays - Premium Travel Website

A production-grade, premium travel website for Misty Horizon Holidays featuring the North East and Himalayan destinations.

## 🎯 Features

✅ **Premium Design** - Built with logo color palette and mountain aesthetic
✅ **Hero Section** - Cinematic background with trust cards and animated counters
✅ **Modal Enquiry Form** - Auto-opening with smooth animations
✅ **7 Destinations** - Detailed cards with attractions and best travel times
✅ **Services Section** - 12+ services including tours, cab hire, and bookings
✅ **Testimonials** - Carousel with guest reviews
✅ **Gallery** - Masonry layout with hover effects
✅ **Contact Section** - Complete contact info and Google Maps embed
✅ **Responsive** - Perfect on desktop, tablet, and mobile
✅ **Smooth Animations** - Framer Motion and GSAP micro-interactions
✅ **SEO Optimized** - Meta tags and semantic HTML
✅ **Floating WhatsApp Button** - Quick inquiry option

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **Vite** - Build tool (⚡ Fast development)
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Advanced animations
- **GSAP** - High-performance animations
- **Swiper** - Touch carousel
- **React Hook Form** - Form management
- **React Icons** - Icon library
- **Lenis** - Smooth scrolling
- **React CountUp** - Animated counters
- **React Intersection Observer** - Scroll animations

## 📂 Project Structure

```
misty-horizon/
├── src/
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # React entry point
│   ├── index.css              # Global styles & Tailwind
│   ├── components/            # Reusable components
│   ├── pages/                 # Page components
│   ├── hooks/                 # Custom React hooks
│   ├── animations/            # Animation utilities
│   ├── constants/             # Constants & config
│   ├── utils/                 # Helper functions
│   ├── data/                  # Data files
│   └── services/              # API services
├── public/                    # Static assets
├── index.html                 # HTML entry point
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
├── postcss.config.js         # PostCSS configuration
├── package.json              # Dependencies
├── .eslintrc.json           # ESLint rules
├── .gitignore               # Git ignore
└── README.md                # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd misty-horizon
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
The website will open at `http://localhost:5173`

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 🎨 Color Palette (From Logo)

- **Golden Sun**: `#F4C46E`
- **Teal Mountains**: `#7CB8C8`, `#8BC4D4`
- **Forest Green**: `#3D6B4F`
- **Sage Green**: `#A8B89C`
- **Cream White**: `#F5F5F5`, `#FAFAF9`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## ✨ Key Sections

### 1. Hero Section
- Cinematic background image
- Main heading with serif font
- CTA buttons (Explore, Plan, Call)
- Trust cards
- Animated counters (5000+ travelers, 1000+ trips, 7+ destinations)

### 2. Enquiry Modal
- Auto-opens on first visit
- Destination dropdown
- Contact form fields
- WhatsApp quick button
- Smooth animations

### 3. Destinations
- 7 featured destinations
- Full-width images
- Attractions list
- Best time to visit
- Explore buttons

### 4. Services
- 12 service cards
- Icon-based design
- Grid layout
- Hover effects

### 5. Why Choose Us
- 6 key differentiators
- Feature cards
- Glassmorphism design

### 6. Testimonials
- Swiper carousel
- 5-star ratings
- Guest avatars
- Auto-rotating

### 7. Gallery
- Masonry grid
- Hover zoom effects
- Responsive images

### 8. Contact
- Complete contact info
- Google Maps embed
- Contact cards
- Phone, email, address

## 🔧 Configuration

### Update Business Details
Edit `src/App.jsx` and update:
```javascript
const COLORS = { ... }
const contactInfo = [ ... ]
```

### Customize Colors
Edit `tailwind.config.js` color palette section

### Change Logo
Replace images and update favicon in `index.html`

## 📊 Performance

- **Vite** - Sub-second HMR
- **Code splitting** - Optimized bundle sizes
- **Image optimization** - Responsive images
- **Lazy loading** - Intersection observer
- **CSS-in-JS** - Minimal CSS payload

Lighthouse scores target:
- ⚡ Performance: 90+
- ♿ Accessibility: 95+
- 🎨 Best Practices: 95+
- 🔍 SEO: 100

## 🔐 Security

- No hardcoded sensitive data
- Secure form handling
- HTTPS ready
- CSP compliant
- XSS protected

## 📈 SEO Features

- Meta tags for social sharing
- Semantic HTML structure
- Heading hierarchy
- Image alt texts
- Mobile-friendly design
- Fast loading speeds
- Structured data ready

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Deploy the 'dist' folder
```

### Traditional Server
```bash
npm run build
# Upload 'dist' folder contents to server
```

## 📞 Contact Information

**Business**: Misty Horizon Holidays
**Phone**: +91 7384853108
**Email**: mistyhorizonholidays@gmail.com
**Address**: Kutchery Rd, near DM Office, Chauk Bazaar, Darjeeling, West Bengal – 734101

## 📄 License

This project is proprietary and confidential.

## 🎓 Best Practices Implemented

✅ Component-based architecture
✅ Reusable components
✅ Custom hooks
✅ Proper error handling
✅ Accessibility (WCAG 2.1)
✅ Mobile-first design
✅ Performance optimization
✅ Code organization
✅ DRY principle
✅ Semantic HTML

## 🐛 Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3000
```

### Build errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Slow performance
- Clear browser cache
- Check network throttling
- Run in production mode
- Use Chrome DevTools

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [GSAP Documentation](https://gsap.com)
- [Swiper Documentation](https://swiperjs.com)

## 🤝 Contributing

For improvements or bug reports, please create an issue or submit a pull request.

## ✅ Testing Checklist

- [ ] Desktop responsiveness
- [ ] Tablet responsiveness
- [ ] Mobile responsiveness
- [ ] Modal opens on first visit
- [ ] Form submission works
- [ ] WhatsApp integration
- [ ] All links working
- [ ] Animations smooth
- [ ] Images loading
- [ ] Maps embed working
- [ ] Contact info correct
- [ ] SEO meta tags present

---

**Built with ❤️ for Misty Horizon Holidays**
