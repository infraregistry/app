import { openSearch } from "$lib/components/search/search";
import { dependencies } from "../dependencies";

export const openRelateModal = () => {
  openSearch({
    data: dependencies
  });
};