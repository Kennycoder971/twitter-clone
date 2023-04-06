import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "twitter";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2022-11-16";
const useCdn = process.env.NODE_ENV === "production";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});
