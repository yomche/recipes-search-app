import { CategoryItem } from "./CategoryItem";

function CategoryList({ catalog = [] }) {
  return (
    <>
      <div className="list">
        {catalog.map((catalogItem) => (
          <CategoryItem key={catalogItem.idCategory} {...catalogItem} />
        ))}
      </div>
    </>
  );
}

export { CategoryList };
