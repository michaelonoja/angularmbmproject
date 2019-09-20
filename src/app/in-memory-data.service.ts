import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo, ResponseOptions } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }
  createDb() {
    const users = [
      { id: 11, firstName: 'rahul', lastName: 'gupta', email: 'test123@gmail.com', password: 'welcome',
    bio: 'this is my bio', role: 'admin', image: 'user-1.jpg' },
      { id: 12, firstName: 'rohan', lastName: 'gupta', email: 'test345@gmail.com', password: 'welcome',
      bio: 'i am a subscriber', role: 'subscriber', image: 'user-2.jpg' }
    ];

    const pages = [
      {id: 'intro',
        tagline: 'ABOUT COMPANY',
        title: 'MBN, Ltd. is loCated in the middle belt of Nigeria and it has its head office and machinery building workshops in Jos city, Plateau State. Our position is strategic to cover almost all the northern and middle territories where most of the agricultural and farming activities are carried out. We are basically specialized in Agricultural products, processing and machinery, which include',
        description: 'This is introduction!',
      },
      {id: 'clients',
        tagline: 'TRUST',
        title: 'Companies who use our services',
        description: 'Our clients',
      },
      {id: 'services',
        tagline: 'HERE AT MBN LTD ARE',
        title: 'OUR PRODUCTS AND SERVICES',
        //description: 'Service Section',
      },
    
      {id: 'testimonials',
        tagline: 'FEEDBACK',
        title: 'What our customers are saying',
        description: 'This is what our customer\'s feel about us',
      },
      {id: 'pricing',
        tagline: 'YOUR CHOICE',
        title: 'We have the right package for you',
        description: '',
      },
      {id: 'gallery',
        tagline: 'We ❤ Doing amazing things',
        title: 'MBN LTD',
        description: 'We are an amazing company',
      },
      {id: 'footer',
        copyrighttext: 'Made with ❤ by',
        developer: 'IngeniousCID',
        developerlink: '',
      },
      {id: 'blog',
        tagline: 'MBN LTD',
        title: 'Thoughts become things',
        description: 'We are and amazing company',
      },
      {id: 'header',
        heading: 'MBN LTD',
        headingtext: 'AGRICULTURAL PROCESSING MACHINERY',
        buttontext: 'do some action!',
        buttonlink: '/home',
        image: 'banner-image-1.jpg'
      },
    ];
  const features=[
    {id: 1,icon:'html5', title:' POTATO PROCESSING EQUIPMENT', description:'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choroneglegentur iudico'},
    {id: 2,icon:'bolt', title:'  GINGER PROCESSING EQUIPMENT', description:'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sitdetracto mediocrem disputationi'},
    {id: 3,icon:'tablet', title:'CASSAVA PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},
    {id: 4,icon:'rocket', title:'CRUDE PALM FRUIT AND OIL PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},
    {id: 5,icon:'rocket', title:'SOYA BEAN PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},
    {id: 6,icon:'rocket', title:'TOMATO PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},  
    {id: 7,icon:'rocket', title:'OTHER VEGETABLES AND FRUITS PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},
    {id: 8,icon:'rocket', title:'EGG INCUBATORS AND CHICKEN POULTRY AND FARMING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'}, 
    {id: 9,icon:'rocket', title:'COW AND GOAT MILK PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},
    {id: 10,icon:'rocket', title:'SUGAR CANE AND BEAT SUGAR PROCESSING EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'}, 
    {id: 10,icon:'rocket', title:'MOLASSES PRODUCTION TECHNOLOGY AND EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'}, 
    {id: 11,icon:'rocket', title:'BAKERS YEAST PRODUCTION TECHNOLOGY AND EQUIPMENT', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},   
    {id: 12,icon:'rocket', title:'BEES HONEY REFINING TECHNOLOGY', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'},
    {id: 12,icon:'rocket', title:'HYDROPONIC PLANTATION EQUIPMENT AND TECHNOLOGY FOR ADDED VALUE FLOWER, GRASS AND OTHER AGRICULTURAL ITEMS', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pronemore vivendum'}    
]

  const images = [
    {id: 1, name: 'gallery-image-1.jpg'},
    {id: 2, name: 'gallery-image-2.jpg'},
    {id: 3, name: 'gallery-image-3.jpg'},
    {id: 4, name: 'gallery-image-4.jpg'},
    {id: 5, name: 'gallery-image-5.jpg'},
    {id: 6, name: 'gallery-image-6.jpg'},
];


    const menu = [
      {id: 1, title: 'Home', link: '/home', outlet: ''},
      {id: 2, title: 'About', link: '/about', outlet: ''},
      {id: 3, title: 'Services', link: '/services', outlet: ''},
      {id: 4, title: 'Gallery', link: '/gallery', outlet: ''},
      {id: 5, title: 'Testimonials', link: '/testimonials', outlet: ''},
      {id: 6, title: 'Clients', link: '/clients', outlet: ''},
      {id: 7, title: 'Pricing', link: '/pricing', outlet: ''},
      {id: 8, title: 'Blog', link: '/blog', outlet: ''},
      {id: 9, title: 'Contact Us', link: 'contactus', outlet: 'popup'},
      {id: 10, title: 'Subscribe', link: 'subscribe', outlet: 'popup'},
    ];

    const posts = [
      {id: 1, title: 'The first Article',   author: 'AD', image: 'gallery-image-1.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 2, title: 'The second Article',  author: 'AD', image: 'gallery-image-2.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 3, title: 'The third Article',   author: 'AD', image: 'gallery-image-3.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 4, title: 'The fourth Article',  author: 'AD', image: 'gallery-image-4.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 5, title: 'The fifth Article',   author: 'AD', image: 'gallery-image-5.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 6, title: 'The sixth Article',   author: 'AD', image: 'gallery-image-6.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 7, title: 'The seven Article',   author: 'AD', image: 'gallery-image-7.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 8, title: 'The eight Article',   author: 'AD', image: 'gallery-image-8.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 9, title: 'The nine Article',    author: 'AD', image: 'gallery-image-9.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 10,title: 'The ten Article',     author: 'AD', image: 'gallery-image-10.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 11,title: 'The eleven Article',  author: 'AD', image: 'gallery-image-11.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
      {id: 12,title: 'The twelve Article',  author: 'AD', image: 'gallery-image-12.jpg', publishdate: '2018-06-19T07:22Z', excert: 'This is the summary of the article...'},
  ];

  const companies = [
    {id: 1 , name: 'Tree', weblink: 'company-logo1.png', logo: 'company-logo1.png'},
    {id: 2 , name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png'},
    {id: 3 , name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png'},
    {id: 4 , name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png'},
    {id: 5 , name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png'},
    {id: 6 , name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png'},
    {id: 7 , name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png'},
    {id: 8 , name: 'Cold', weblink: 'company-logo8.png', logo: 'company-logo8.png'},
    {id: 9 , name: 'Cold', weblink: 'company-logo9.png', logo: 'company-logo9.png'},
];
const feedbacks = [
  {id: 1 , name: 'Ogezi Michael', userimage: 'user-1.jpg',
  comments: 'This compamny doing excellent Job',
  company: 'ABC'},
  {id: 2 , name: 'Peter Dung', userimage: 'user-2.jpg',
  comments: 'People seem to love the work they have done',
  company: 'XYZ'},
  {id: 3 , name: 'Biodun Owolabi', userimage: 'user-3.jpg',
  comments: 'This work is great, i reall loved working with them',
  company: 'PQR'},
];

const plans = [
  {id: 1, title: 'PERSONAL', subtitle: 'The standard version',
  description: 'Best Plan to buy', price: '1,999,999', currency: '₦',
  downloads: 'Processing Machines', extensions: 'Farm implements',
  tutorials: 'Heyley Tractors', support: '1 Year waranty ', updates: 'Technical Support',
  buttontext: 'Buy Now', buttonlink: '#', featured: false
  },
  {id: 2, title: 'Companies', subtitle: 'Most popular choice',
  description: 'Best Plan for Companies', price: '2,999,999', currency: '₦',
  downloads: 'Custom duties', extensions: 'Harversters ',
  tutorials: 'Drones sprayers', support: '2 years waranty', updates: 'Technical support',
  buttontext: 'Buy Now', buttonlink: '#', featured: true
  },
  {id: 3, title: 'BUSINESS', subtitle: 'For the whole team',
  description: 'Best plan for business', price: '4,999,999', currency: '₦',
  downloads: 'Bringing of Product to project site', extensions: 'Tractors',
  tutorials: 'Farm implements', support: '3 years waranty', updates: 'Technical support',
  buttontext: 'Buy Now', buttonlink: '#', featured: false
  }
];

const websites = [
  {id: 1, link: 'https://facebook.com/', title: 'Facebook', target: '_blank', username: 'jagmohan', icon: 'facebook'},
  {id: 2, link: 'https://googleplus.com/', title: 'Google+', target: '_blank', username: '+jagmohan', icon: 'google-plus'},
  {id: 3, link: 'https://twitter.com/', title: 'Twitter', target: '_blank', username: 'jagmohan', icon: 'twitter'},
  {id: 4, link: 'https://instagram.com/', title: 'Instagram', target: '_blank', username: 'admister_in', icon: 'instagram'},
  {id: 5, link: 'https://behance.com/', title: 'Behance', target: '_blank', username: 'jagmohan', icon: 'behance'},
];

    return {users, posts, menu, pages, features, images, companies, feedbacks, plans, websites};
  }

getToken(user) {
  return 'this is a token';
}

get (reqInfo: RequestInfo) {
  if (reqInfo.collectionName === 'posts') {
    return this.getArticles(reqInfo);
  }
  return undefined;
}

getArticles(reqInfo: RequestInfo) {

  return reqInfo.utils.createResponse$(() => {
    const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
    const collection = reqInfo.collection;
    const id = reqInfo.id;
    const data = id === undefined ? collection : reqInfo.utils.findById(collection, id);

    console.log(data);

    const options: ResponseOptions = data ?
    {
      body: dataEncapsulation ? { data } : data,
      status: 200
    } :
    {
      body: { error: `Post not found` },
      status: 404
    };

    options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
    options.headers = reqInfo.headers;
    options.url = reqInfo.url;
    return options;


  });
}


  post(reqInfo: RequestInfo) {

    if (reqInfo.id === 'login') {
      console.log('from login');
      return reqInfo.utils.createResponse$(() => {
        const dataEncapsulation = reqInfo.utils.getConfig().dataEncapsulation;
        const users = reqInfo.collection.find(user => {
          return reqInfo.req['body'].email === user.email && reqInfo.req['body'].password === user.password ;
        });

        let responseBody = {};

        if (users) {
          responseBody = {
            id: users.id,
            firstName: users.firstName,
            lastName: users.lastName,
            bio: users.bio,
            image: users.image,
            email: users.email,
            token: this.getToken(users)
          };
        }

        const options: ResponseOptions = responseBody ?
        {
          body: dataEncapsulation ? { responseBody } : responseBody,
          status: 200
        } :
        {
          body: { error: `'User' with email='${reqInfo.req['body'].email}' not found` },
          status: 404
        };

        options.statusText = options.status === 200 ? 'ok' : 'Not Found' ;
        options.headers = reqInfo.headers;
        options.url = reqInfo.url;
        return options;


      });


    } else if (reqInfo.id === 'signup') {
      reqInfo.id = null;
      console.log(' from signup');
    }
  }

}
