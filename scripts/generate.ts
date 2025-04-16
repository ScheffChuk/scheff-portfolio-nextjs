import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });
// Configure dotenv before other imports
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { DocumentInterface } from "@langchain/core/documents";
import { getVectorStore } from "../src/lib/astradb";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

async function generateEmbeddings() {
  // Clear existing data
  const vectorStore = await getVectorStore();

  // Load the text file
  const textLoader = new TextLoader("src/lib/personal-information.txt");
  const textDoc = await textLoader.load();

  // Process text document
  const processedTextDoc = textDoc.map(
    (doc): DocumentInterface => ({
      pageContent: doc.pageContent,
      metadata: { url: "/resume" },
    }),
  );

  // Load TypeScript files
  const loader = new DirectoryLoader(
    "src/lib/",
    {
      ".ts": (path) => new TextLoader(path),
    },
    true,
  );

  // Get TS documents and process their metadata
  const tsDocs = (await loader.load())
    .filter((doc) => doc.metadata.source.endsWith(".ts"))
    .map((doc): DocumentInterface => {
      const url =
        doc.metadata.source
          .replace(/\\/g, "/")
          .split("/src/lib")[1]
          .split("/.ts")[0] || "/";

      return {
        pageContent: doc.pageContent,
        metadata: { url },
      };
    });

  // Combine text document with TS documents
  const allDocs = [...processedTextDoc, ...tsDocs];

  // Initialize text splitter
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 800,
    chunkOverlap: 200,
    separators: ["\n\n", "\n", " ", ""],
  });

  // Split all documents
  const splitDocs = await splitter.splitDocuments(allDocs);

  // Add to vector store
  await vectorStore.addDocuments(splitDocs);
}

generateEmbeddings();
