// prettify-design-tokens.ts
import fs from "fs";

try {
  
  // Step 1: Read the raw JSON file
  const rawLine = fs.readFileSync("./design-tokens.tokens.json", "utf-8");

  // Step 2: Parse it
  const data = JSON.parse(rawLine);

  // Step 3: Convert to formatted (pretty) JSON
  const prettyJson = JSON.stringify(data, null, 2);

  // Step 4: Write it to a new file
  fs.writeFileSync("./pretty-design-tokens.tokens.json", prettyJson, "utf-8");

  console.log("Pretty JSON saved as ./pretty-design-tokens.tokens.json");
} catch (err) {
  console.error("Error processing JSON file:", err);
}
