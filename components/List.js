export default function List({ data }) {
  function toTitleCase(str) {
    return str
      .toLowerCase()
      .split(" ")
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  return (
    <div
      id="list"
      style={
        {
          //display: "grid",
          //grid: "auto / repeat(auto-fit, minmax(15em,1fr))",
          //gap: "1rem"
        }
      }
    >
      {[...data].map((item) => {
        return (
          <ul
            key={item.id}
            style={{
              margin: "2rem",
              padding: "1.5rem",
              listStyle: "none",
              background: "#eee",
              borderRadius: ".5rem"
            }}
          >
            {Object.entries(item).map(([key, value]) => {
              var origkey = key;
              if (key === "company") {
                value = value.name;
                key = "Company Name";
              }
              if (typeof value !== typeof "" || key === "__typename")
                return null;
              if (key === "applyUrl") {
                key = "Link";
                value = (
                  <a href={value} target="_blank" rel="noopener noreferrer">
                    Click here to apply
                  </a>
                );
              }
              if (key === "id") return null;

              if (key === "postedAt") {
                key = "posted at";
              }
              if (key === "title") value = <strong>{value}</strong>;

              return (
                <li key={origkey} className={origkey}>
                  <strong>{toTitleCase(key)}</strong>: {value}
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
}
