import { db } from "@/db";
import { categories } from "@/db/schema";

const categoryNames = [
  "Trending Now",
  "Popular Uploads",
  "Recommended for You",
  "New Releases",
  "Recently Watched",
  "Tech & Gadgets",
  "Gaming",
  "Movies & TV Shows",
  "Music & Podcasts",
  "Sports & Fitness",
  "Education & Learning",
  "Comedy & Entertainment",
  "Travel & Adventure",
  "Food & Cooking",
  "Science & Innovation",
  "For Kids",
  "Family-Friendly",
  "Motivational & Self-Help",
  "Business & Finance",
  "News & Politics",
  "Watch Later",
  "Your Playlists",
  "Subscribed Channels",
  "Shorts",
  "Live Streams",
];

const main = async () => {
  try {
    const values = categoryNames.map((name) => ({
      name,
      description: `Videos related to ${name.toLowerCase()}`,
    }));

    await db.insert(categories).values(values);
  } catch (error) {
    console.error("Error seeding categories", error);
    process.exit(1);
  }
};

main();
