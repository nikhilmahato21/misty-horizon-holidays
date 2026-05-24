# 📖 Complete Setup & Customization Guide

## Quick Start (5 Minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173
# Done! Modal opens automatically ✨
```

---

## 🎯 Customization Guide

### 1. Business Information

**File**: `src/App.jsx`

```javascript
// Update contact details
const contactInfo = [
  { 
    icon: FiPhone, 
    label: 'Phone', 
    value: '+91 7384853108',  // ← Your phone
    href: 'tel:+917384853108' 
  },
  { 
    icon: FiMail, 
    label: 'Email', 
    value: 'mistyhorizonholidays@gmail.com',  // ← Your email
    href: 'mailto:mistyhorizonholidays@gmail.com' 
  },
  { 
    icon: FiMapPin, 
    label: 'Address', 
    value: 'Kutchery Rd, near DM Office, Chauk Bazaar, Darjeeling'  // ← Your address
  },
];
```

### 2. Change Colors

**File**: `tailwind.config.js`

```javascript
colors: {
  primary: {
    400: '#F4C46E',  // Change golden color
  },
  secondary: {
    400: '#7CB8C8',  // Change teal color
  },
  forest: {
    800: '#3D6B4F',  // Change green color
  },
}
```

Or inline in `src/App.jsx`:
```javascript
const COLORS = {
  primary: '#YOUR_COLOR',
  secondary: '#YOUR_COLOR',
  // ... etc
};
```

### 3. Update Logo

**File**: `public/logo.png`

Replace the logo image, then update references:

```html
<!-- index.html -->
<link rel="icon" type="image/svg+xml" href="/logo.png" />
```

```javascript
// src/App.jsx - Navigation
<div className="text-2xl font-bold text-[#3D6B4F]">
  Misty Horizon
</div>
```

### 4. Add Your Images

**Hero Image**:
```javascript
// src/App.jsx - HeroSection
style={{
  backgroundImage: 'url("YOUR_HERO_IMAGE_URL")',
}}
```

**Destination Images**:
```javascript
// Update in DestinationsSection
{
  image: 'https://your-image-url.jpg',
}
```

**Gallery Images**:
```javascript
// Update in GallerySection
const images = [
  'https://your-image-1.jpg',
  'https://your-image-2.jpg',
  // ...
];
```

### 5. Update Destinations

**File**: `src/App.jsx` - `DestinationsSection`

```javascript
const destinations = [
  {
    id: 1,
    name: 'Your Destination',
    description: 'Description here',
    attractions: ['Attraction 1', 'Attraction 2'],
    bestTime: 'Months',
    image: 'https://image-url.jpg',
    color: 'from-[#7CB8C8]/40 to-[#8BC4D4]/40',
  },
  // Add more...
];
```

### 6. Modify Services

**File**: `src/App.jsx` - `ServicesSection`

```javascript
const services = [
  { 
    icon: '🏔️', 
    title: 'Service Name', 
    desc: 'Description' 
  },
  // Add/remove as needed
];
```

### 7. Update Testimonials

**File**: `src/App.jsx` - `TestimonialsSection`

```javascript
const testimonials = [
  {
    name: 'Customer Name',
    location: 'City',
    rating: 5,
    text: 'Their feedback...',
    avatar: '👨‍🦰',  // Unicode emoji
  },
];
```

### 8. Customize Modal Form

**File**: `src/App.jsx` - `EnquiryModal`

Change destinations:
```javascript
const destinations = [
  'Sikkim', 
  'Darjeeling', 
  // Add/remove destinations
];
```

Change travel types:
```javascript
const travelTypes = [
  'Family Tour',
  'Honeymoon',
  // Add/remove types
];
```

### 9. Update "Why Choose Us"

**File**: `src/App.jsx` - `WhyChooseUsSection`

```javascript
const reasons = [
  {
    icon: '🌍',
    title: 'Your Reason',
    desc: 'Description here',
  },
];
```

### 10. Modify Contact/Map

**File**: `src/App.jsx` - `ContactSection`

```javascript
// Update the iframe src with your Google Maps embed URL
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  // Get embed code from Google Maps
/>
```

---

## 🎨 Advanced Styling

### Change Font Family

**File**: `tailwind.config.js`

```javascript
fontFamily: {
  serif: ['Playfair Display', 'serif'],  // Change serif
  sans: ['Inter', 'sans-serif'],  // Change sans
}
```

Then import fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
```

### Custom Animations

Add to `src/index.css`:
```css
@keyframes myCustomAnimation {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-myCustom {
  animation: myCustomAnimation 0.8s ease-out;
}
```

Use in components:
```javascript
<motion.div
  className="animate-myCustom"
  // or
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
/>
```

### Theme Customization

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add custom colors
    },
    spacing: {
      // Add custom spacing
    },
    fontSize: {
      // Add custom font sizes
    },
    // More customizations...
  },
}
```

---

## 🔧 Component Structure

### Adding a New Section

1. Create component function:
```javascript
const NewSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Content */}
      </div>
    </section>
  );
};
```

2. Add to App.jsx:
```javascript
<NewSection />
```

3. Add animations:
```javascript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  {/* Content */}
</motion.div>
```

---

## 📱 Responsive Design

### Mobile-First Approach

```javascript
// Base (mobile) → then add responsive modifiers
<div className="text-lg md:text-2xl lg:text-4xl">
  Text size changes on different screens
</div>

// Breakpoints:
// sm: 640px
// md: 768px  
// lg: 1024px
// xl: 1280px
// 2xl: 1536px
```

### Test Responsive

```bash
npm run dev
# Open DevTools → Toggle Device Toolbar (Ctrl+Shift+M)
```

---

## 🎬 Animation Customization

### Framer Motion Examples

```javascript
// Simple animation
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
/>

// Stagger children
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }}
>
  {items.map((item) => (
    <motion.div key={item.id} variants={itemVariants}>
      {item}
    </motion.div>
  ))}
</motion.div>

// On scroll animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
/>

// Hover effects
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
/>
```

---

## 🔐 Security

### Environment Variables

Create `.env.local`:
```
VITE_API_URL=https://api.example.com
VITE_CONTACT_EMAIL=business@example.com
```

Use in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

### Form Validation

The form uses `react-hook-form` for validation:

```javascript
const { register, handleSubmit, formState: { errors } } = useForm();

<input
  {...register('email', { 
    required: 'Email is required',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Invalid email address'
    }
  })}
/>
{errors.email && <span>{errors.email.message}</span>}
```

---

## 📊 SEO Optimization

### Meta Tags

Update `index.html`:
```html
<meta name="description" content="Your description here">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://image-url.jpg">
```

### Structured Data

Add to `src/App.jsx`:
```javascript
useEffect(() => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Misty Horizon Holidays",
    "telephone": "+91-7384853108",
    "email": "mistyhorizonholidays@gmail.com",
    "address": "...",
  };
  
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}, []);
```

---

## 🚀 Performance Tips

### 1. Image Optimization
```javascript
// Use WebP with fallback
<picture>
  <source srcSet="image.webp" type="image/webp" />
  <img src="image.jpg" alt="description" />
</picture>

// Lazy load
<img loading="lazy" src="..." alt="..." />
```

### 2. Code Splitting
```javascript
// React.lazy for route-based splitting
const DestinationsSection = React.lazy(() => 
  import('./sections/Destinations')
);

<Suspense fallback={<Loading />}>
  <DestinationsSection />
</Suspense>
```

### 3. Memoization
```javascript
const MemoizedCard = React.memo(Card, (prevProps, nextProps) => {
  return prevProps.id === nextProps.id;
});
```

### 4. Reduce Bundle Size
```bash
# Analyze bundle
npm install -g vite-plugin-visualizer
npm run build
# Check dist/stats.html
```

---

## 🔄 Maintenance

### Regular Updates

```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Fix vulnerabilities
npm audit fix
```

### Backup Strategy

```bash
# Backup before updates
cp -r . backup-$(date +%s)

# Use git for version control
git add .
git commit -m "Version 1.0"
git tag v1.0
```

---

## 🐛 Common Issues & Solutions

### Issue: Modal not opening
**Solution**: Check localStorage in browser DevTools:
```javascript
localStorage.removeItem('mistyHorizonVisited');
```

### Issue: Images not loading
**Solution**: 
- Verify image URL is correct
- Check CORS headers
- Use relative paths for local images

### Issue: Styles not applying
**Solution**:
- Clear cache: `Ctrl+Shift+R`
- Rebuild: `npm run build`
- Check Tailwind config

### Issue: Slow performance
**Solution**:
- Optimize images
- Enable caching
- Reduce animations
- Use production build

### Issue: WhatsApp button not working
**Solution**: 
- Verify phone number format: `+91XXXXXXXXXX`
- Check URL encoding
- Test on mobile device

---

## 📚 Learning Resources

### Official Docs
- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

### Tutorials
- [React Tutorial](https://react.dev/learn)
- [Tailwind Components](https://tailwindcomponents.com)
- [Framer Motion Examples](https://www.framer.com/motion/animation/)

---

## ✅ Before Going Live

- [ ] Test all forms
- [ ] Test contact links
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Setup analytics
- [ ] Setup email notifications
- [ ] Test WhatsApp integration
- [ ] Verify all images load
- [ ] Check all links
- [ ] Test animations in production
- [ ] Update meta tags
- [ ] Setup SSL certificate
- [ ] Configure backups
- [ ] Setup monitoring

---

**Questions?** Check DEPLOYMENT.md or README.md for more help.

**Last Updated**: May 2026
