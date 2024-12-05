 
import Pagination from '../Components/Pagination';

const MyComponent = () => {
  const pageCount = 100; // For example, 10 pages
  const displayItems = (page) => {
    console.log(`Displaying items for page ${page}`);
  };

  return (
    <div>
      <Pagination pageCount={pageCount} displayItems={displayItems} />
    </div>
  );
};

export default MyComponent;
