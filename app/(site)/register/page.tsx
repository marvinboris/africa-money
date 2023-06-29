import Client from "./client";

async function getCountries() {
  const res = await fetch("https://corsproxy.io/?http://country.io/names.json");
  const data = await res.json();
  const countries = Object.entries(data)
    .map(([code, name]) => ({
      code,
      name: name as string,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return countries;
}

export default async function Page() {
  const countries = await getCountries();

  return <Client countries={countries} />;
}
