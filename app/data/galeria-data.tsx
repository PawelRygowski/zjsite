import "server-only";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
  secure: true,
});

export async function fetchAllGalleryImages() {
  return await cloudinary.v2.search
    .expression("resource_type:image")
    .sort_by("public_id", "desc")
    .execute();
}

export interface CloudinaryFolder {
  name: string;
  path: string;
}

export interface FolderWithRandomImage {
  name: string;
  image: string;
}

export async function fetchGalleryImagesFromPath(path: string) {
  return await cloudinary.v2.search
    .expression(`folder:"gallery/${path}" AND resource_type:image`)
    .max_results(500)
    .execute();
}

export async function getAllFoldersWithRandomImages(): Promise<
  FolderWithRandomImage[]
> {
  try {
    // 1️⃣ Get subfolders
    const { folders } = (await cloudinary.v2.api.sub_folders("gallery")) as {
      folders: CloudinaryFolder[];
    };
    console.log("folders: " + folders);
    // 2️⃣ For each folder, get a random image
    const results = await Promise.all(
      folders.map(async (subfolder: CloudinaryFolder) => {
        const search = await cloudinary.v2.search
          .expression(`folder:"${subfolder.path}" AND resource_type:image`)
          .max_results(500)
          .execute();
        if (!search.resources.length) return null;

        const randomIndex = Math.floor(Math.random() * search.resources.length);
        const randomImage = search.resources[randomIndex];

        return {
          name: subfolder.name,
          image: randomImage.public_id,
        };
      })
    );

    return results.filter(Boolean) as FolderWithRandomImage[];
  } catch (err) {
    console.error("Error fetching folders and images:", err);
    return [];
  }
}
