import { redirect } from "next/navigation";

export default function Home() {
  redirect("/onboarding"); // или "/login/onboarding" — см. пункт 1
}
