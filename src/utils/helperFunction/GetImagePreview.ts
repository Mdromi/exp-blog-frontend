import { AnyAction } from "redux";
import Default from "../../assets/default.png";
import routes from "../../apiRoute";

const GetImagePreview = (currentUser: AnyAction) => {
  const STATIC_ROUTE = routes.STATIC_ROUTE;
  let imagePreview = null;

  if (currentUser && currentUser.avatar_path) {
    // imagePreview = currentUser.avatar_path;
    imagePreview = `${STATIC_ROUTE}/${currentUser.avatar_path}`;
  } else {
    imagePreview = Default;
  }

  return imagePreview;
};

export default GetImagePreview;
