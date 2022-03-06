import sanityClient from "@sanity/client";
export const client = sanityClient({
    // projectId: process.env.SANITY_PROJECT_ID,
  projectId: "6lwhdb8f",
  dataset: "production",
    // token: process.env.SANITY_TOKEN,
  token:
    "skfp0SwhP6UH8ARz3DfYCmn1LhnliJ8PzQNyEploL4KsSU3PN4DduXFe2K8LT1CoS81CM7Q4faqsePqUyjTgRIg9gp5aoOttm6e3SZVNE9jlwD0lMO7Qu8olrCvNkInH9VWwRcRwsMnmkCbu8bVo3x91dHaoYVvYDq8UEyMMw6ls9tIXVOhS",
  useCdn: false,
  apiVersion: "v1",
});
