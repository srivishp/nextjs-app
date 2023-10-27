// our-domain.com/news

// * NEXT JS has file based routing.
// ie: Folder & file structure (file paths) in the project defines the nesting of web pages

// Link makes it a single page application
import Link from "next/link";

function NewsPage() {
  return (
    <>
      <h1> The News Page</h1>
      <ul>
        <li>
          <Link href="/news/newsarticleone">News Article 1</Link>
        </li>
        <li>News Article 2</li>
      </ul>
    </>
  );
}

export default NewsPage;
