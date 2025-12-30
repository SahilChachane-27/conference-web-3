import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export const navLinks = [
  {
    label: "About",
    isDropdown: true,
    subLinks: [
      { href: "/about/conference", label: "About Conference" },
      { href: "/about/researcher-connect", label: "About Researcher Connect" },
      { href: "/about/college", label: "About College" },
    ],
  },
  { href: "/call-for-papers", label: "Call for Papers" },
  { href: "/committee", label: "Committee" },
  { href: "/speakers", label: "Speakers" },
  { href: "/important-dates", label: "Schedule" },
  { href: "/publication-details", label: "Publication" },
  { href: "/venue", label: "Venue" },
];


export const heroData = {
  title: 'SustainTechCon 2026',
  subtitle: 'The 1st International Conference on Sustainable Technologies and Intelligent Systems',
  date: '6–7 March 2026',
  location: 'VPPCOE&VA, Mumbai',
  countdownTarget: '2026-03-06T09:00:00',
  images: [getImage('hero-1'), getImage('hero-2')],
};

export const preamble = {
    title: 'Preamble',
    content: "SustainTechCon 2026 is the 1st International Conference on Sustainable Technologies and Intelligent Systems, designed to bring together researchers, academicians, industry experts, innovators, and policymakers from across the globe. The conference focuses on the convergence of sustainability, intelligent systems, artificial intelligence, IoT, smart engineering, and emerging technologies to address real-world challenges. In the era of rapid technological advancement and environmental concerns, SustainTechCon 2026 aims to provide a premier platform for knowledge exchange, innovation, and interdisciplinary collaboration. The conference emphasizes cutting-edge research, practical implementations, and sustainable engineering solutions aligned with global development goals."
}

export const objectives = [
    {
      icon: 'Rocket' as const,
      title: 'Promote Innovation',
      description: 'To promote research and innovation in sustainable technologies and intelligent systems.',
    },
    {
      icon: 'Users' as const,
      title: 'Foster Collaboration',
      description: 'To encourage interdisciplinary collaboration among engineering, technology, management, healthcare, agriculture, and environmental sciences.',
    },
    {
      icon: 'Globe' as const,
      title: 'Global Platform',
      description: 'To provide a global platform for research scholars and professionals to present high-quality research.',
    },
    {
      icon: 'Bridge' as const,
      title: 'Bridge Gaps',
      description: 'To bridge the gap between academia, industry, and society.',
    },
    {
      icon: 'Cpu' as const,
      title: 'Highlight Technology',
      description: 'To highlight the role of AI, IoT, cyber-physical systems, and digital twins in sustainable development.',
    },
    {
      icon: 'GraduationCap' as const,
      title: 'Support Researchers',
      description: 'To support young researchers and students through mentorship and exposure to global research trends.',
    },
  ];

  export const callForPapers = {
    description: "Authors are invited to submit original, unpublished, and high-quality research papers that are not under review elsewhere. Papers should present novel research contributions, experimental studies, theoretical analysis, or practical applications related to the conference themes.",
    tracks: [
        {
            title: "Track 1: Sustainable Engineering & Smart Infrastructure",
            topics: [
                "Green civil and structural engineering",
                "Sustainable transportation and mobility systems",
                "Smart cities and resilient infrastructure",
                "Energy-efficient building materials and design",
                "Intelligent construction technologies",
                "Lifecycle analysis and carbon-neutral engineering"
            ],
            sdgs: "SDG 9, SDG 11, SDG 13",
            explanation: "This track supports sustainable infrastructure development, resilient urban systems, and low-carbon engineering solutions that reduce environmental impact and improve urban livability."
        },
        {
            title: "Track 2: Computer Science, Artificial Intelligence & Intelligent Systems",
            topics: [
                "Artificial intelligence and machine learning for sustainability",
                "Internet of Things (IoT) and cyber-physical systems",
                "Big data analytics for environmental monitoring",
                "Blockchain for sustainable and transparent systems",
                "Decision-support and intelligent control systems",
                "Green computing and sustainable software engineering"
            ],
            sdgs: "SDG 9, SDG 11, SDG 12",
            explanation: "AI, IoT, and data-driven systems enable intelligent decision-making, optimized resource usage, and digital sustainability across sectors."
        },
        {
            title: "Track 3: Electrical, Electronics & Renewable Energy Systems",
            topics: [
                "Renewable energy technologies and hybrid systems",
                "Smart grids and power system optimization",
                "Energy storage and battery management systems",
                "Power electronics for sustainable applications",
                "Electric vehicles and charging infrastructure",
                "Low-power and energy-efficient electronic design"
            ],
            sdgs: "SDG 7, SDG 9, SDG 13",
            explanation: "Focuses on clean energy generation, smart grids, energy efficiency, and electrification technologies that promote decarbonization and universal access to energy."
        },
        {
            title: "Track 4: Mechanical Engineering, Robotics & Sustainable Manufacturing",
            topics: [
                "Sustainable and smart manufacturing processes",
                "Robotics and automation for environmental applications",
                "Energy-efficient thermal and fluid systems",
                "Industry 4.0 and digital manufacturing",
                "Additive manufacturing and lightweight structures",
                "Predictive maintenance and intelligent systems"
            ],
            sdgs: "SDG 8, SDG 9, SDG 12",
            explanation: "Promotes sustainable manufacturing, automation, and energy-efficient systems that enhance productivity while reducing waste and emissions."
        },
        {
            title: "Track 5: Sustainable Microfinance, FinTech & Socio-Economic Systems",
            topics: [
                "Technology-enabled microfinance and financial inclusion",
                "FinTech solutions for sustainable development",
                "AI-based credit risk assessment and impact analysis",
                "Social entrepreneurship and sustainable business models",
                "Policy frameworks for inclusive economic growth",
                "Digital platforms for community empowerment"
            ],
            sdgs: "SDG 1, SDG 8, SDG 10",
            explanation: "Addresses financial inclusion, poverty alleviation, and equitable economic growth through technology-driven microfinance and digital financial services."
        },
        {
            title: "Track 6: Water Hygiene, Sanitation & Public Health Engineering",
            topics: [
                "Water quality assessment and monitoring technologies",
                "Sustainable WASH (Water, Sanitation and Hygiene) systems",
                "Low-cost sanitation engineering solutions",
                "Smart sensors for hygiene and health monitoring",
                "Public health analytics and water-borne disease control",
                "Governance and policy for water hygiene sustainability"
            ],
            sdgs: "SDG 3, SDG 6, SDG 11",
            explanation: "Covers WASH technologies, water quality monitoring, and sanitation systems that directly improve public health and living conditions."
        },
        {
            title: "Track 7: Water Technologies & Intelligent Water Resource Management",
            topics: [
                "Advanced water purification and desalination technologies",
                "Wastewater treatment, reuse, and recycling",
                "Smart irrigation and agricultural water systems",
                "AI-driven water demand and supply forecasting",
                "Hydrological modeling and water resource optimization",
                "Nature-based and climate-resilient water solutions"
            ],
            sdgs: "SDG 6, SDG 12, SDG 13",
            explanation: "Focuses on sustainable water use, treatment, reuse, and intelligent management to address water scarcity and climate resilience."
        },
        {
            title: "Track 8: Polymer Science, Materials Engineering & Green Chemistry",
            topics: [
                "Sustainable and biodegradable polymer materials",
                "Advanced composites and functional materials",
                "Materials for water treatment and environmental remediation",
                "Smart materials and responsive systems",
                "Recycling technologies and circular material economy",
                "Nanomaterials for sustainable engineering applications"
            ],
            sdgs: "SDG 9, SDG 12, SDG 14",
            explanation: "Promotes sustainable materials, biodegradable polymers, recycling technologies, and pollution reduction through advanced material innovation."
        },
        {
            title: "Track 9: Agriculture, Entomology & Sustainable Food Systems",
            topics: [
                "Agricultural entomology and integrated pest management",
                "Precision agriculture and smart farming technologies",
                "AI and IoT for crop monitoring and protection",
                "Bio-pesticides and eco-friendly pest control",
                "Climate-resilient and sustainable farming practices",
                "Digital tools for food security and supply chains"
            ],
            sdgs: "SDG 2, SDG 12, SDG 15",
            explanation: "Supports sustainable agriculture, pest management, food security, and ecosystem protection through intelligent and ecological farming practices."
        },
        {
            title: "Track 10: Visual Arts, Media & Design for Sustainability",
            topics: [
                "Visual communication and media for sustainability awareness",
                "Digital art, AI, and generative media",
                "Sustainable design methodologies",
                "Interactive and immersive media technologies",
                "Media ethics and social impact",
                "Cultural heritage and creative sustainability"
            ],
            sdgs: "SDG 4, SDG 11, SDG 12",
            explanation: "Uses visual communication, media, and design to promote sustainability awareness, education, cultural preservation, and behavioral change."
        }
    ],
    submissionDetails: [
        'Papers must be written in English',
        'Manuscripts should be original and plagiarism-free',
        'AI-generated content should be minimal and compliant with publisher guidelines',
        'Authors should follow the conference paper template (to be downloaded from the website)',
        'Paper length: 6–8 pages (as per template)',
        'Submission Mode: Online paper submission system',
        'All submissions will undergo a double-blind peer review process'
    ],
    publicationDetails: {
        title: 'Publication Details',
        description: 'Selected high-quality papers will be published in Scopus-Indexed Conference Proceedings / Scopus Journals (as per publisher approval at additional APC Charges ). Additional accepted papers may be published in peer-reviewed journals with DOI. All papers will be subjected to rigorous peer review, plagiarism, and quality checks. Publication is subject to publisher norms and ethical guidelines.',
        indexing: 'Scopus (for selected proceedings)'
    }
};

export const speakers = [
    {
      name: 'Coming Soon',
      title: 'Distinguished Speaker',
      bio: 'An overview of this speaker and their talk will be available soon.',
      image: getImage('2(1).jpg'),
    },
    {
      name: 'Coming Soon',
      title: 'Distinguished Speaker',
      bio: 'An overview of this speaker and their talk will be available soon.',
      image: getImage('speaker-sophie'),
    },
    {
      name: 'Coming Soon',
      title: 'Distinguished Speaker',
      bio: 'An overview of this speaker and their talk will be available soon.',
      image: getImage('speaker-james'),
    },
    {
      name: 'Coming Soon',
      title: 'Distinguished Speaker',
      bio: 'An overview of this speaker and their talk will be available soon.',
      image: getImage('speaker-rose'),
    },
    {
      name: 'Coming Soon',
      title: 'Distinguished Speaker',
      bio: 'An overview of this speaker and their talk will be available soon.',
      image: getImage('speaker-oscar'),
    },
    {
      name: 'Coming Soon',
      title: 'Distinguished Speaker',
      bio: 'An overview of this speaker and their talk will be available soon.',
      image: getImage('speaker-isaac'),
    },
      {
      name: 'Coming Soon',
      title: 'Distinguished Speaker',
      bio: 'An overview of this speaker and their talk will be available soon.',
      image: getImage('speaker-john'),
    },
    {
      name: 'Coming Soon',
      title: 'Distinguished Speaker',
      bio: 'An overview of this speaker and their talk will be available soon.',
      image: getImage('speaker-emily'),
    },
  ];

export const schedules = [
    {
      topic: 'Paper Submission Deadline',
      date: '31 Jan 2026',
    },
    {
      topic: 'Notification of Acceptance',
      date: '10 Feb 2026',
    },
    {
      topic: 'Registration Deadline',
      date: '20 Feb 2026',
    },
    {
      topic: 'Conference Day 1',
      date: '06 Mar 2026',
    },
    {
      topic: 'Conference Day 2',
      date: '07 Mar 2026',
    },
];

export const tickets = [
  { 
      type: 'Student UG/PG',
      category: 'Indian Delegate',
      earlyBird: { usd: '$100', inr: '₹8,000' },
      lateBird: { usd: '$120', inr: '₹10,000' },
      features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of presentation / participation', 'Lunch and refreshments', 'Publication processing (as applicable)'], 
      featured: false 
  },
  { 
      type: 'PhD / Research Scholar',
      category: 'Indian Delegate', 
      earlyBird: { usd: '$125', inr: '₹10,000' },
      lateBird: { usd: '$150', inr: '₹12,000' },
      features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of presentation / participation', 'Lunch and refreshments', 'Publication processing (as applicable)'], 
      featured: true 
  },
  { 
      type: 'Academia / Professional', 
      category: 'Indian Delegate',
      earlyBird: { usd: '$150', inr: '₹12,000' },
      lateBird: { usd: '$175', inr: '₹14,000' },
      features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of presentation / participation', 'Lunch and refreshments', 'Publication processing (as applicable)'], 
      featured: false 
  },
    { 
      type: 'International Author', 
      category: 'International Delegate',
      earlyBird: { usd: '$200', inr: '₹16,000' },
      lateBird: { usd: '$225', inr: '₹18,000' },
      features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of presentation / participation', 'Lunch and refreshments', 'Publication processing (as applicable)'], 
      featured: false 
  },
  { 
      type: 'Attendee Only',
      category: 'All Delegates',
      earlyBird: { usd: '$50', inr: '₹4,000' },
      lateBird: { usd: '$60', inr: '₹5,000' },
      features: ['Access to all conference sessions', 'Conference kit and materials', 'Certificate of participation', 'Lunch and refreshments'], 
      featured: false 
  },
];


export const testimonials = [
    { quote: "A fantastic platform for sharing cutting-edge research in sustainable tech. The keynote sessions were particularly insightful.", author: "A. Sharma, University of Delhi" },
    { quote: "Well-organized and highly relevant. It bridged the gap between academic theory and industry practice perfectly. I'm looking forward to the next one!", author: "R. Patel, Tech Innovators Inc." },
    { quote: "As a young researcher, the exposure to global research trends and the mentorship opportunities were invaluable. Highly recommend.", author: "P. Singh, PhD Scholar" },
    { quote: "The focus on real-world challenges and interdisciplinary collaboration makes this conference unique and impactful.", author: "Dr. Chen, International Delegate" },
];
    
export const contactInfo = [
    { title: 'Email Us', icon: 'Mail' as const, value: 'sustaintechcon@pvppcoe.ac.in' },
    { title: 'Call Us', icon: 'Smartphone' as const, value: '+91-8485863406' },
    { title: 'Address', icon: 'Home' as const, value: 'Vasantadada Patil Patil Pratishthan’s College of Engineering and Visual Arts' },
];
  
export const socialLinks = [
    { name: 'Facebook', icon: 'Facebook' as const, href: 'https://www.facebook.com/profile.php?id=61583580994300' },
    { name: 'Instagram', icon: 'Instagram' as const, href: 'https://www.instagram.com/researcher_connect?igsh=MTRhbjZ4dHczcHBrbw==' },
    { name: 'Youtube', icon: 'Youtube' as const, href: 'https://www.youtube.com/@Researcherconnect' },
];

export const committeeData = {
    chiefPatrons: {
        title: 'Chief Patron',
        members: [
            { name: 'Shri. Nandkumar M. Katkar', role: 'President, VPP' },
            { name: 'Shri. Ravindra Ghorpade', role: 'Vice- President, VPP' },
            { name: 'Adv. Shri Appasaheb Desai', role: 'General Secretary, VPP' }
        ]
    },
    patrons: {
        title: 'Patrons',
        members: [
            { name: 'Adv. Shri. Amit A. Desai', role: 'Treasurer VPP' },
            { name: 'Mr. Suresh G. Desai', role: 'Trustee, VPP' },
            { name: 'Mr. shivraj D. Shinde', role: 'Industrialist' },
            { name: 'Mrs. Urmila A. Desai', role: 'Trustee, VPP' },
            { name: 'Mr. Anandrao K. Shinde', role: 'Trustee, VPP' },
            { name: 'Mr. Prakash B. Chavan', role: 'Trustee, VPP' },
            { name: 'Dr. Ashok Chavan', role: 'Campus Director, VPP' }
        ]
    },
    generalChief: {
        title: 'General Chief',
        members: [
            { name: 'Dr. Alam N. Shaikh', role: 'Principal, VPPCOE & VA' }
        ]
    },
    convener: {
        title: 'Convener',
        members: [
            { name: 'Dr. Rais A. Mulla', role: 'HoD, Computer Engineering' }
        ]
    },
    coConvener: {
        title: 'Co- Convener',
        members: [
            { name: 'Dr. Rais A. Mulla', role: 'HoD, Computer Engineering' }
        ]
    },
    advisoryCommittee: {
        title: 'Advisory Committee',
        members: [
            { name: 'Dr. Chandra Prakash', role: 'SVNIT Surat' },
            { name: 'Dr. Alok Kumar', role: 'SVNIT Surat' },
            { name: 'Dr. Anirban Bhattacharjee', role: 'SVNIT Surat' },
            { name: 'Dr. Vilas Nandivekar', role: 'Registrar, SNDT University, Mumbai' },
            { name: 'Dr. Vilas Karjini', role: 'Professor, Warana University, Kolhapur' },
            { name: 'Dr. P.K. Desai', role: 'President ISTE, New Delhi' },
            { name: 'Dr. Uddav Bhosale', role: 'Vice Chancellor, S, G. University Kolhapur' },
            { name: 'Dr. A.K. Gupta', role: 'Vice Chancellor, D.Y. Patil University, Talsande, Kolhapur' },
            { name: 'Mr. Ravishankar Desai', role: 'Ex.Vice Chancellor & Head IM Reliance Industries Ltd.' },
            { name: 'Dr. Jayendra Kumar', role: 'Professor, Grade- 1, VIT- AP University' }
        ]
    },
    correspondenceContact: {
        title: 'Correspondence Contact',
        members: [
            { name: 'Dr. Rais A. Mulla', role: '(8485863406)' },
            { name: 'Dr. Mahendra E. Pawar', role: '(9890838047)' },
            { name: 'Dr. Gayatri Bachhav', role: '(8087294699)' },
            { name: 'Prof. Manisha Patil', role: '(9664214038)' }
        ]
    }
};

export const publishingPartners = [
    { name: 'Skype', image: getImage('sponsor-skype') },
    { name: 'Envato', image: getImage('sponsor-envato') },
    { name: 'Dribbble', image: getImage('sponsor-dribbble') },
    { name: 'Mailchimp', image: getImage('sponsor-mailchimp') },
    { name: 'Android', image: getImage('sponsor-android') },
    { name: 'jQuery', image: getImage('sponsor-jquery') },
    { name: 'Sass', image: getImage('sponsor-sass') },
    { name: 'Pinterest', image: getImage('sponsor-pinterest') },
];
