const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// cloudinary.api.ping()
//     .then(response => {
//         console.log('Cloudinary connected successfully:', response);
//     })
//     .catch(error => {
//         console.error('Cloudinary connection error:', error);
//     });

module.exports = cloudinary;
