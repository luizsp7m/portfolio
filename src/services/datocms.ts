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
      id 
      name 
      slug
      defaultVisible 
      logo { 
        url 
      }
    }
  }`);

  return technologies.data.allTechnologies;
}

export async function getTechnologyByID(slug: string) {
  const technology = await getData(`{
    allTechnologies(filter: {
      slug: { eq: "${slug}" }
    }) {
      id
      name
      slug
      defaultVisible
      logo {
        url
      }
    }
  }`);

  return technology.data.allTechnologies[0];
}

export async function getProjects() {
  const projects = await getData(`{
    allProjects(first: 50, filter: {
      defaultVisible: {
        eq: true
      }
    }) {
      id 
      title 
      description 
      deploy 
      repository 
      pinned 
      defaultVisible 
      thumbnail { url } 
      technologies { 
        id 
        name 
        slug
        logo { 
          url 
        } 
      }
    }
  }`);

  return projects.data.allProjects;
}

export async function getProjectsByTechnology(id: string) {

}