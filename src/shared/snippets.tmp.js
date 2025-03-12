/*

(async () => {
    const files = [
        { url: "https://img.youtube.com/vi/D2W3N5wsD6I/maxresdefault.jpg", name: "image.jpg" },
        { url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf", name: "document.pdf" },
        { url: "https://www.w3.org/TR/PNG/iso_8859-1.txt", name: "sample.txt" }
    ];

    // Function to fetch a file and return as ArrayBuffer
    async function fetchFile(url) {
        const response = await fetch(url);
        return await response.arrayBuffer();
    }

    // Load JSZip dynamically
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js";
    script.onload = async () => {
        const zip = new JSZip();

        for (const file of files) {
            try {
                const data = await fetchFile(file.url);
                zip.file(file.name, data);
                console.log(`Added: ${file.name}`);
            } catch (error) {
                console.error(`Failed to fetch: ${file.name}`, error);
            }
        }

        // Generate the ZIP file
        const zipBlob = await zip.generateAsync({ type: "blob" });

        // Create a download link
        const a = document.createElement("a");
        a.href = URL.createObjectURL(zipBlob);
        a.download = "files.zip";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    document.body.appendChild(script);
})();


*/
