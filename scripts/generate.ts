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

  // Load all .txt files in the src/lib directory
  const txtLoader = new DirectoryLoader(
    "src/lib/",
    {
      ".txt": (path) => new TextLoader(path),
    },
    true,
  );
  const textDocs = await txtLoader.load();

  // Process text documents
  const processedTextDocs = textDocs.map(
    (doc): DocumentInterface => ({
      pageContent: doc.pageContent,
      metadata: {
        // Extract the filename and remove extension
        url: doc.metadata.source
          .replace(/\\/g, "/")
          .split("/src/lib/")[1]
          .replace(".txt", ""),
      },
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

  // Combine text documents with TS documents
  const allDocs = [...processedTextDocs, ...tsDocs];

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
