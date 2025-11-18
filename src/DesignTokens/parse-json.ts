import fs from "fs";

const filename = "src/DesignTokens/tokens.json";

try {
  console.log(`Reading file: ${filename}`);
  
  // Step 1: Read the raw JSON file
  const rawLine = fs.readFileSync(filename, "utf-8");

  // Step 2: Parse it
  const data = JSON.parse(rawLine);

  // Step 3: Convert to formatted (pretty) JSON
  const formattedJson = JSON.stringify(data, null, 2);

  // Step 4: Write it to formatted-tokens.json
  const outputFileName = "src/DesignTokens/formatted-tokens.json";
  fs.writeFileSync(outputFileName, formattedJson, "utf-8");

  console.log(`Formatted JSON saved as ${outputFileName}`);
} catch (err) {
  console.error("Error processing JSON file:", err);
  process.exit(1);
}
