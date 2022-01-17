import { useQuery } from "@apollo/client";
import { QUERY } from "../data/apollo";
import "bootstrap/dist/css/bootstrap.css";
import List from "../components/List";

export default function IndexPage() {
  const { data, loading } = useQuery(QUERY);

  if (loading) return "Loading...";

  return (
    <div>
      <List data={data?.jobs} />
    </div>
  );
}
