import { useMemo } from "react";
import { useActivityFeed } from "../react-query/queries/use-Activity-feed";

function ActivityFeed() {
  const { status, data } = useActivityFeed();

  const renderContent = useMemo(() => {
    switch (status) {
      case "pending":
        return <div>Loading...</div>;
      case "error":
        return <div>Error</div>;
      case "success":
        return <div>{JSON.stringify(data)}</div>;
    }
  }, [status, data]);

  return <div>{renderContent}</div>;
}

export default ActivityFeed;
