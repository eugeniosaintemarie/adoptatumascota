import sharp from "sharp"
import path from "path"
import fs from "fs"

const sourceImage = "C:\\Users\\Administrator\\Documents\\Downloads\\Gemini_Generated_Image_dhifgcdhifgcdhif.png"
const publicDir = "c:\\Users\\Administrator\\Documents\\Git\\adoptatumascota\\public"
const iconsDir = path.join(publicDir, "icons")

if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true })
}

async function generateIcons() {
    console.log("Generating icons from specific path...")

    // Standard icons
    await sharp(sourceImage).resize(32, 32).toFile(path.join(publicDir, "favicon.png"))
    await sharp(sourceImage).resize(512, 512).toFile(path.join(publicDir, "logo.png"))

    // Apple icon
    await sharp(sourceImage).resize(180, 180).toFile(path.join(publicDir, "apple-icon.png"))

    // PWA Icons from manifest.json
    const sizes = [72, 96, 128, 144, 152, 192, 384, 512]
    for (const size of sizes) {
        await sharp(sourceImage)
            .resize(size, size)
            .toFile(path.join(iconsDir, `icon-${size}x${size}.png`))
        console.log(`Generated ${size}x${size} icon`)
    }

    console.log("All icons generated successfully from the provided path!")
}

generateIcons().catch(console.error)
