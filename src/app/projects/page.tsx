import { redirect } from "next/navigation";

/*
  Phase 1 establishes the final portfolio IA without pulling the Phase 3
  project migration forward. The new destination temporarily hands off to the
  existing project index; Phase 3 replaces this route with the new /projects UI.
*/
export default function ProjectsCompatibilityPage() {
  redirect("/portfolio");
}
