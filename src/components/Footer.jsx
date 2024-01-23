import { MarkGithubIcon } from "@primer/octicons-react";

export default function Footer() {
  return (
    <footer
      style={{ position: "fixed", bottom: 0, right: 0, fontSize: "10px" }}>
      <a href="http://jakubkanna.github.io">
        jakubkanna <MarkGithubIcon size={10} />
      </a>
    </footer>
  );
}
