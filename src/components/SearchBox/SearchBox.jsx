import css from "./SearchBox.module.css";

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div className={css.searchBox}>
      <p>Find contacts by name</p>
      <input 
       value={filter}
       onChange={(e) => setFilter(e.target.value)}
      className={css.searchImp}
      type="text"/>
    </div>
  );
};

export default SearchBox;