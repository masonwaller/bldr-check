export function blobToArray(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    // On successful read
    reader.onload = () => {
      try {
        // Parse the JSON string into an array
        const array = JSON.parse(reader.result);
        resolve(array);
      } catch (error) {
        reject(new Error("Failed to parse Blob content: " + error.message));
      }
    };

    // On error
    reader.onerror = () => reject(new Error("Failed to read Blob content."));

    // Read the Blob as text
    reader.readAsText(blob);
  });
}
