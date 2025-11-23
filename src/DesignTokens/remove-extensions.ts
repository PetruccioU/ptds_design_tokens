import fs from "fs";

const inputFile = "src/DesignTokens/formatted-tokens.json";
const outputFile = "src/DesignTokens/ext-formatted-tokens.json";

try {
  console.log(`Reading file: ${inputFile}`);
  
  // Read the JSON file
  const rawData = fs.readFileSync(inputFile, "utf-8");
  const data = JSON.parse(rawData);

  // Recursive function to remove "extensions" property
  function removeExtensions(obj: any): any {
    if (Array.isArray(obj)) {
      return obj.map(removeExtensions);
    } else if (obj !== null && typeof obj === "object") {
      const newObj: any = {};
      for (const key in obj) {
        if (key !== "extensions") {
          newObj[key] = removeExtensions(obj[key]);
        }
      }
      return newObj;
    }
    return obj;
  }

  // Remove extensions from the data
  const cleanedData = removeExtensions(data);

  // Convert to formatted JSON
  const formattedJson = JSON.stringify(cleanedData, null, 2);

  // Write to output file
  fs.writeFileSync(outputFile, formattedJson, "utf-8");

  console.log(`Extensions removed. Saved as ${outputFile}`);
} catch (err) {
  console.error("Error processing JSON file:", err);
  process.exit(1);
}
