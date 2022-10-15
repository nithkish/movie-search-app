
export interface SortOption {
  id: number;
  title: string;
  name: string;
}

const sortOptions: SortOption[] = [
  {
    id: 1,
    title: "Episode",
    name: "episode",
  },
  {
    id: 2,
    title: "Year",
    name: "year",
  },
];

export default sortOptions;
