import { imagePool } from "../data/images";

export const OAuthIcons = () => {
  return (
    <>
      <p className="oauth-signin">Sign in using</p>
      <div className="icon-container">
        {imagePool.map((x) => {
          return (
            <div key={x.id}>
              <img src={x.img} alt={x.alt} />
            </div>
          );
        })}
      </div>
    </>
  );
};
