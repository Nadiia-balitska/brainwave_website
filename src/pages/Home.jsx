import { Categories } from "../assets/mockData";

export const Home = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <div>Shop by categories</div>
            <ul>
              {Categories.map((category, index) => (
                <li key={index}>
                  <div></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
