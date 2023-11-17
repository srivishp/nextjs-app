// our-domain.com/news/dynamic_values_here

// -> DYNAMIC PATHS
// # [] in the file name can be used to create pages which can be accessed with dynamic values
// * Eg -> [newsId].js (in the news folder) can be displayed for any URL with
// ? localhost:3000/news/any_value_here
// If the file has [someName].js, it will open for any value given after /indexOfTheFolder/any_value
// ? It can be also set to whatever we want, and not just any value.

// useRouter is a custom hook offered by the NEXT.JS, and not a React JS hook
import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();

  // * Setting the concrete URL value
  const newsId = router.query.newsId;

  // console logging the query shows what was entered in the url after /news/
  console.log(newsId);
  return <h1> The Detail Page</h1>;
}

export default DetailPage;
