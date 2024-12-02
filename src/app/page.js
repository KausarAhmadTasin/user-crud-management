import Banner from "@/components/layouts/Banner/Banner";
import FeaturedUsers from "@/components/layouts/FeaturedUsers/FeaturedUsers";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <Banner />
      <FeaturedUsers />
    </Provider>
  );
}
