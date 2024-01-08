/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:[
            "res.cloudinary.com",
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com"
            //To fix the error cause by Image from next/Image during google login
        ]
    }
}

module.exports = nextConfig
