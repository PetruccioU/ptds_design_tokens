// parse-json.ts
import fs from "fs";

const args = process.argv.slice(2);
const filename = args[0] || process.env.FILENAME;

if (!filename) {
  console.error("No filename provided. Pass it as an argument or set FILENAME env var.");
  process.exit(1);
}

try {
  console.log(`📄 Reading file: ${filename}`);
  
  // Step 1: Read the raw JSON file
  const rawLine = fs.readFileSync(filename, "utf-8");

  // Step 2: Parse it
  const data = JSON.parse(rawLine);

  // Step 3: Convert to formatted (pretty) JSON
  const prettyJson = JSON.stringify(data, null, 2);

  // Step 4: Write it to a new file with "pretty-" prefix
  const outputFileName = `./pretty-${filename.split("/").pop()}`;
  fs.writeFileSync(outputFileName, prettyJson, "utf-8");

  console.log(`Pretty JSON saved as ${outputFileName}`);
} catch (err) {
  console.error("Error processing JSON file:", err);
  process.exit(1);
}
