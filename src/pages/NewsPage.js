import Footer from "../components/layout/Footer";
import NewsList from "../features/news/NewsList";

function NewsPage() {
  return (
    <div className="Home">
      <NewsList />
      <Footer />
    </div>
  );
}

export default NewsPage;
