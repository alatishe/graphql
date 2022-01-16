import Link from "next/link";

export default function Header() {
  return (
    <header
      className="text-center"
      style={{ background: "#f8f0e3", padding: "4em" }}
    >
      <h1 style={{ margin: "0 0 1rem" }}>
        Work with GraphQL in a modern startup
      </h1>
      <p>
        <em style={{ float: "right" }}>
          Data provided by{" "}
          <a
            href="https://api.graphql.jobs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://api.graphql.jobs/
          </a>
        </em>
      </p>
    </header>
  );
}
