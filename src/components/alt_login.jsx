import { imagePool } from "../data/images";

export const OAuthIcons = () => {
  return (
    <div className="icon-container">
      {imagePool.map((x) => {
        return (
          <div key={x.id}>
            <img src={x.img} alt={x.img} />
          </div>
        );
      })}
    </div>
  );
};
