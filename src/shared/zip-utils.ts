import JSZip from "jszip";

interface ZipFileOptions {
  folderName: string;
  files: { [filename: string]: string | Blob };
}

export async function createZip(options: ZipFileOptions): Promise<Blob> {
  const zip = new JSZip();
  const sanitizedFolderName = options.folderName.replace(/[<>:"/\\|?*]+/g, "_"); // Remove invalid characters
  const folder = zip.folder(sanitizedFolderName);

  for (const [filename, content] of Object.entries(options.files)) {
    if (content instanceof Blob) {
      folder?.file(filename, content);
    } else {
      folder?.file(filename, content);
    }
  }

  return zip.generateAsync({ type: "blob" });
}
