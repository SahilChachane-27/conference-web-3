
import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id) as ImagePlaceholder;

export const navLinks = [
  { href: '#speakers', label: 'Speakers' },
  { href: '#schedules', label: 'Schedules' },
  { href: '#tickets', label: 'Tickets' },
  { href: '#sponsors', label: 'Sponsors' },
  { href: '#info', label: 'Info' },
  { href: '#contact', label: 'Contact' },
];

export const heroData = {
  title: 'Digital Conference 2026',
  date: 'December 3rd to 7th',
  location: 'Orlando, Florida.',
  countdownTarget: '2025-12-03T09:00:00',
  images: [getImage('hero-1'), getImage('hero-2')],
};

export const speakers = [
  {
    name: 'Ben Sheridan',
    title: 'Founder & CEO',
    bio: 'Interested in all digital things. Has earned several awards and has experience of being a speaker at world-class seminars.',
    image: getImage('speaker-ben'),
  },
  {
    name: 'Sophie Lana',
    title: 'Founder & CEO',
    bio: 'Interested in all the digital things. Has earned several awards and has been a speaker at many world-class seminars.',
    image: getImage('speaker-sophie'),
  },
  {
    name: 'James Hoult',
    title: 'Founder & CEO',
    bio: 'Interested in all the digital things. Has earned several awards and has been a speaker at many world-class seminars.',
    image: getImage('speaker-james'),
  },
  {
    name: 'Oscar Helman',
    title: 'Founder & CEO',
    bio: 'Interested in all the digital things. Has earned several awards and has been a speaker at many world-class seminars.',
    image: getImage('speaker-oscar'),
  },
  {
    name: 'Rose Shipp',
    title: 'Founder & CEO',
    bio: 'Interested in all the digital things. Has earned several awards and has been a speaker at many world-class seminars.',
    image: getImage('speaker-rose'),
  },
  {
    name: 'Isaac Nicholas',
    title: 'Founder & CEO',
    bio: 'Interested in all the digital things. Has earned several awards and has been a speaker at many world-class seminars.',
    image: getImage('speaker-isaac'),
  },
  {
    name: 'John Arnold',
    title: 'Founder & CEO',
    bio: 'Interested in all the digital things. Has earned several awards and has been a speaker at many world-class seminars.',
    image: getImage('speaker-john'),
  },
  {
    name: 'Emily Carter',
    title: 'Digital Strategist',
    bio: 'An expert in digital marketing and online presence, Emily helps brands connect with their audiences in meaningful ways.',
    image: getImage('speaker-emily'),
  },
];

export const stats = [
    { value: 8800, label: 'Participants', icon: 'Users' as const },
    { value: 300, label: 'Topics', icon: 'Presentation' as const },
    { value: 50, label: 'Speakers', icon: 'Mic' as const },
    { value: 20, label: 'Awards', icon: 'Globe' as const },
];
  
export const schedules = [
    {
      day: '01',
      date: '3 December, 2025',
      events: [
        { time: '08:00 - 10:00 AM', speakerName: 'Ben Sheridan', topic: 'Introduction WordPress', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment. This session will last for 2 hours.' },
        { time: '12:00 - 14:00 PM', speakerName: 'Sophie Lana', topic: 'Getting Started With WordPress', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment. This session will last for 2 hours.' },
        { time: '16:00 - 18:00 PM', speakerName: 'James Hoult', topic: 'Prepare Your Hosting & Domain', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment. This session will last for 2 hours.' },
        { time: '20:00 - 22:00 PM', speakerName: 'Oscar Helman', topic: 'WordPress Theme Development Basic', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment. This session will last for 2 hours.' },
      ],
    },
    {
        day: '02',
        date: '4 December, 2025',
        events: [
          { time: '08:00 - 10:00 AM', speakerName: 'Rose Shipp', topic: 'WordPress Theme Development Basic 2', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
          { time: '12:00 - 14:00 PM', speakerName: 'Isaac Nicholas', topic: 'Getting Started With Photoshop', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
          { time: '16:00 - 18:00 PM', speakerName: 'John Arnold', topic: 'Getting Started With HTML & CSS', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
          { time: '20:00 - 22:00 PM', speakerName: 'Ben Sheridan', topic: 'Convert From PSD to HTML', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
        ],
    },
    {
        day: '03',
        date: '5 December, 2025',
        events: [
            { time: '08:00 - 10:00 AM', speakerName: 'Sophie Lana', topic: 'Make Your HTML to WordPress', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
            { time: '12:00 - 14:00 PM', speakerName: 'James Hoult', topic: 'Introduction Search Engine Optimisation', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
            { time: '16:00 - 18:00 PM', speakerName: 'Oscar Helman', topic: 'Make SEO Friendly WP Theme', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
            { time: '20:00 - 22:00 PM', speakerName: 'Rose Shipp', topic: 'Advanced Theme Development', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
        ],
    },
    {
        day: '04',
        date: '6 December, 2025',
        events: [
            { time: '08:00 - 10:00 AM', speakerName: 'Isaac Nicholas', topic: 'Advanced Theme Development 2', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
            { time: '12:00 - 14:00 PM', speakerName: 'John Arnold', topic: 'Make Mobile Friendly Theme', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
            { time: '16:00 - 18:00 PM', speakerName: 'Ben Sheridan', topic: 'Quality Asurance Your WP Theme', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
            { time: '20:00 - 22:00 PM', speakerName: 'Sophie Lana', topic: 'Getting Started With WP Plugin', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
        ],
    },
    {
        day: '05',
        date: '7 December, 2025',
        events: [
            { time: '08:00 - 10:00 AM', speakerName: 'Ben Sheridan', topic: 'WP Plugin Development', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
            { time: '12:00 - 14:00 PM', speakerName: 'Sophie Lana', topic: 'Customize Your WordPress Theme', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
            { time: '16:00 - 18:00 PM', speakerName: 'James Hoult', topic: 'Interview With WP Author', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
            { time: '20:00 - 22:00 PM', speakerName: 'Oscar Helman', topic: 'Close Event Ceremony & Doorprize', description: 'In this session we will discuss about digital topics in detail. You need laptops and other tech support equipment.' },
        ],
    },
];

export const tickets = [
    { type: 'Personal', price: 100, features: ['2 Days Pass', '1 Workshop', 'Free Lunch'], featured: false },
    { type: 'Business', price: 200, features: ['5 Days Pass', '3 Workshops', 'Free Lunch and Snacks'], featured: true },
    { type: 'Premium', price: 300, features: ['5 Days Pass', '5 Workshops', 'VIP Seating and Full Catering'], featured: false },
  ];

export const testimonials = [
    { quote: "I'm very happy with this event. I will recommend this to my family and friends. The speakers are professional. It's worth quality for the price.", author: "John, Freelancer" },
    { quote: "A wonderful event thank you! The best event as it proved by quality. I learn many digital things. I would definitely return for future events.", author: "Sarah, College Student" },
    { quote: "I will recommend this to my family and friends. I'm very happy with this event. The speakers are professional. It's worth quality for the price.", author: "Michael, Office Staff" },
    { quote: "I learn many digital things! A wonderful event thank you! The best event as it proved by quality. I would definitely return for future events.", author: "Jenny, Student" },
];
  
export const sponsors = {
    gold: [
        { name: 'Skype', image: getImage('sponsor-skype') },
        { name: 'Envato', image: getImage('sponsor-envato') },
        { name: 'Dribbble', image: getImage('sponsor-dribbble') },
    ],
    silver: [
        { name: 'Mailchimp', image: getImage('sponsor-mailchimp') },
        { name: 'Android', image: getImage('sponsor-android') },
        { name: 'jQuery', image: getImage('sponsor-jquery') },
        { name: 'Sass', image: getImage('sponsor-sass') },
        { name: 'Pinterest', image: getImage('sponsor-pinterest') },
    ],
};
  
export const venueInfo = [
    { title: 'Venue', icon: 'Flag' as const, description: 'Large audiotorium with capacity of fifty thousand participants is also equipped with advanced facilities for your pleasure.' },
    { title: 'Transport', icon: 'Bike' as const, description: 'The location of the seminar is located in the city center so it is easily reached by private or public vehicles which available for 24 hours.' },
    { title: 'Hotel', icon: 'Hotel' as const, description: 'There are many hotels available around the event location for temporary residence as long as you follow this event, from motels to 5 stars.' },
];
  
export const contactInfo = [
    { title: 'Call Us', icon: 'Smartphone' as const, value: '(208) 333 9296' },
    { title: 'Address', icon: 'Home' as const, value: 'Orange County Convention Center,\n9800 International Dr,\nOrlando, FL 32819, USA' },
    { title: 'Email Us', icon: 'Mail' as const, value: 'contact@eventbiz.com' },
];
  
export const socialLinks = [
    { name: 'Facebook', icon: 'Facebook' as const, href: '#' },
    { name: 'Twitter', icon: 'Twitter' as const, href: '#' },
    { name: 'Rss', icon: 'Rss' as const, href: '#' },
    { name: 'Dribbble', icon: 'Dribbble' as const, href: '#' },
];