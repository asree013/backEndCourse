const multer = require('multer')
const fs = require('fs')

module.exports = multerConfig = {
    config: {
        storage: multer.diskStorage({
            destination: (req, file, next) => {
                const folder = './images/';
                if (!fs.existsSync(folder)) {
                    fs.mkdirSync(folder)
                }
                next(null, folder)
            },
            filename: (req, file, next) => {
                const ext = file.mimetype.split('/')[1]
                next(null, `${file.fieldname}-${Date.now()}.${ext}`)
            }
        }),
        limits: { fileSize: 1024 * 1024 * 5 },
        fileFilter: (req, file, next) => {

            const images = file.mimetype.startsWith('image/')
            if (images) {
                next(null, true)
            }
            else {
                next({ message: 'file type no support' }, false)
            }
        }
    },
    keyUpload: 'photo'
}

