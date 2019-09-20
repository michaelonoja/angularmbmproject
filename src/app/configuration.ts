import { PLATFORM_SERVER_ID } from "@angular/common/src/platform_id";

export const configuration = {
    header: {
        heading: 'My MBN LTD',
        headingtext: 'AGRICULTURAL PROCESSING MACHINERY',
        buttontext: 'do some action!',
        buttonlink: '\home'
    },
    intro: {
        tagline: 'ABOUT COMPANYABOUT COMPANY',
        title: 'COMPANY BACKGROUND',
        description: 'MBN, Ltd. is loated in the middle belt of Nigeria and it has its head office and machinery building workshops in Jos city, Plateau State. Our position is strategic to cover almost all the northern and middle territories where most of the agricultural and farming activities are carried out. We are basically specialized in Agricultural products, processing and machinery, which include',
        features:[
            {icon:'html5', title:' POTATO PROCESSING EQUIPMENT', description:'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choroneglegentur iudico'},
            {icon:'bolt', title:'  GINGER PROCESSING EQUIPMENT', description:'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sitdetracto mediocrem disputationi'},
            {icon:'tablet', title:'CASSAVA PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},
            {icon:'rocket', title:'CRUDE PALM FRUIT AND OIL PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},
            {icon:'rocket', title:'SOYA BEAN PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},
            {icon:'rocket', title:'TOMATO PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},  
            {icon:'rocket', title:'OTHER VEGETABLES AND FRUITS PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},
            {icon:'rocket', title:'EGG INCUBATORS AND CHICKEN POULTRY AND FARMING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'}, 
            {icon:'rocket', title:'COW AND GOAT MILK PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},
            {icon:'rocket', title:'SUGAR CANE AND BEAT SUGAR PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'}, 
            {icon:'rocket', title:'MOLASSES PRODUCTION TECHNOLOGY AND EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'}, 
            {icon:'rocket', title:'BAKERS YEAST PRODUCTION TECHNOLOGY AND EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},   
            {icon:'rocket', title:'BEES HONEY REFINING TECHNOLOGY', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},
            {icon:'rocket', title:'HYDROPONIC PLANTATION EQUIPMENT AND TECHNOLOGY FOR ADDED VALUE FLOWER, GRASS AND OTHER AGRICULTURAL ITEMS', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'}    
        ]
    },
    services: {
        tagline: 'BELIEVING',
        title: 'Focusing On What Matters Most',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    },
    
    testimonials: {
        tagline: 'FEEDBACK',
        title: 'What our customers are saying',
        description: '',
        feedbacks : [
            {name: 'John Doe', userimage: 'user-1.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'ABC'},
            {name: 'Roslyn Doe', userimage: 'user-2.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'XYZ'},
            {name: 'Thomas Doe', userimage: 'user-3.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'PQR'},
        ]
    },
    clients: {
        tagline: 'TRUST',
        title: 'Companies who use our services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        companies: [
            {name: 'Tree', weblink: 'company-logo1.png', logo: 'company-logo1.png'},
            {name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png'},
            {name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png'},
            {name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png'},
            {name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png'},
            {name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png'},
            {name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png'},
            {name: 'Cold', weblink: 'company-logo8.png', logo: 'company-logo8.png'},
            {name: 'Cold', weblink: 'company-logo9.png', logo: 'company-logo9.png'},
        ]
    },
    pricing: {
        tagline: 'YOUR CHOICE',
        title: 'We have the right package for you',
        description: '',
        plans: [
            {title: 'PERSONAL', subtitle: 'The standard version', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '19', currency: '₹',
                downloads:'5 Downloads', extensions:'2 Extensions', tutorials: 'Tutorials', support: 'Forum Support', updates:'1 year free updates',
            buttontext: 'Buy Now', buttonlink: '#', featured: false
            },
            {title: 'STUDENT', subtitle: 'Most popular choice', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '29', currency: '₹', 
                downloads:'15 Downloads', extensions:'5 Extensions', tutorials: 'Tutorials with files', support: 'Forum Support', updates:'2 year free updates',
            buttontext: 'Buy Now', buttonlink: '#', featured: true
            },
            {title: 'BUSINESS', subtitle: 'For the whole team', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '49', currency: '₹', 
                downloads:'Unlimited Downloads', extensions:'Unlimited Downloads', tutorials: 'HD Video Tutorials', support: 'Chat Support', updates:'Lifetime free updates',
            buttontext: 'Buy Now', buttonlink: '#', featured: false
            }
        ]
    },
    gallery: {
        images: [
            'gallery-image-1.jpg',
            'gallery-image-2.jpg',
            'gallery-image-3.jpg',
            'gallery-image-4.jpg',
            'gallery-image-5.jpg',
            'gallery-image-6.jpg',
        ]
    },
    footer: {
        copyrighttext: 'Made with ❤ by',
        developer: 'AdMISTER STUDIO',
        developerlink: 'http://admister.in',
    },
    socialsites: [
        {title: 'Facebook', target: '_blank', username: 'jagmohan', icon: 'facebook'},
        {title: 'Google+', target: '_blank', username: '+jagmohan', icon: 'google-plus'},
        {title: 'Twitter', target: '_blank', username: 'jagmohan', icon: 'twitter'},
        {title: 'Instagram', target: '_blank', username: 'jagmohan', icon: 'instagram'},
        {title: 'Behance', target: '_blank', username: 'jagmohan', icon: 'behance'},
    ],
    blog: {
        tagline: 'MY BLOG',
        title: 'Thoughts become things..'
        
    }
};
