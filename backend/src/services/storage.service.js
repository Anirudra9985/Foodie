const ImageKit = require("imagekit");
const fs = require('fs');
const path = require('path');

let imagekit = null;
if (
    process.env.IMAGEKIT_PUBLIC_KEY && 
    !process.env.IMAGEKIT_PUBLIC_KEY.includes('your_') &&
    process.env.IMAGEKIT_PRIVATE_KEY && 
    !process.env.IMAGEKIT_PRIVATE_KEY.includes('your_')
) {
    try {
        imagekit = new ImageKit({
            publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
            urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
        });
    } catch (e) {
        console.warn("ImageKit initialization failed, will use local storage fallback:", e.message);
    }
}

async function uploadFile(fileBuffer, fileName) {
    if (imagekit) {
        try {
            const result = await imagekit.upload({
                file: fileBuffer,
                fileName: fileName,
            });
            return result;
        } catch (err) {
            console.warn("ImageKit upload error, falling back to local file storage:", err.message);
        }
    }

    // Local storage fallback
    const uploadDir = path.join(__dirname, '../../public/uploads');
    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
    }

    const fileExt = fileName.includes('.') ? '' : '.mp4';
    const cleanFileName = `${Date.now()}-${fileName}${fileExt}`;
    const filePath = path.join(uploadDir, cleanFileName);

    await fs.promises.writeFile(filePath, fileBuffer);

    const localUrl = `http://localhost:3000/uploads/${cleanFileName}`;
    return {
        url: localUrl,
        fileId: cleanFileName,
        name: cleanFileName
    };
}

module.exports = {
    uploadFile
};