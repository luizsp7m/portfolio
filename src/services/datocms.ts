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
    allTechnologies(first: 12, orderBy: [createdAt_ASC], filter: {
      display: { eq: true }
    }) {
      id 
      name 
      slug
      display 
      logo { 
        url 
      }
    }
  }`);

  return technologies.data.allTechnologies;
}

export async function getTechnologyBySlug(slug: string) {
  const technology = await getData(`{
    allTechnologies(filter: {
      slug: { eq: "${slug}" }
    }) {
      id
      name
      slug
      display
      logo {
        url
      }
    }
  }`);

  return technology.data.allTechnologies[0];
}

export async function getProjects() {
  const total = await getData(`{
    count: _allProjectsMeta {
      count
    }
  }`);

  const projects = await getData(`{
    projects: allProjects (filter: {
      display: { eq: true },
    }, first: ${total.data.count.count}, orderBy: [createdAt_DESC]) {
      id 
      title 
      description 
      deploy 
      repository 
      pinned 
      display 
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

  return projects.data.projects;
}

export async function getProjectsPinned() {
  const projects = await getData(`{
    allProjects(first: 6, orderBy: [createdAt_DESC], filter: {
      display: {
        eq: true
      }, pinned: {
        eq: true
      }
    }) {
      id 
      title 
      description 
      deploy 
      repository 
      pinned 
      display 
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
  const total = await getCountProjects(id);

  const projects = await getData(`{
    projects: allProjects(filter: {
      display: { eq: true }
      technologies: { allIn: ["${id}"] }
    }, orderBy: [createdAt_DESC], first: ${total} ) {
      id 
      title 
      description 
      deploy 
      repository 
      pinned 
      display 
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

  return projects.data.projects;
}

export async function getCountProjects(id: string) {
  const count = await getData(`{
    count: _allProjectsMeta(filter: {
      technologies: { allIn: ["${id}"] }
      display: { eq: true }
    }) {
      count
    }
  }`);

  return count.data.count.count;
}