const ENDPOINT = "https://graphql.datocms.com/";
const API_TOKEN = process.env.NEXT_PUBLIC_READ_ONLY_API_TOKEN;

async function getData(query: string) {
  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
    })
  });

  const data = await response.json();

  return data;
}

export async function getTechnologies() {
  const technologies = await getData(`{
    allTechnologies(orderBy: [createdAt_ASC]) {
      id name defaultVisible logo { url }
    }
  }`);

  return technologies.data.allTechnologies;
}

export async function getProjects() {
  const projects = await getData(`{
    allProjects(first: 50) {
      id title description deploy repository pinned defaultVisible thumbnail { url } 
      technologies { id name logo { url } }
    }
  }`);

  return projects.data.allProjects;
}