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
      defaultVisible: { eq: true }
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
  const total = await getData(`{
    count: _allProjectsMeta {
      count
    }
  }`);

  const projects = await getData(`{
    projects: allProjects (first: ${total.data.count.count}) {
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

  return projects.data.projects;
}

export async function getProjectsPinned() {
  const projects = await getData(`{
    allProjects(first: 6, orderBy: [createdAt_ASC], filter: {
      defaultVisible: {
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
  const projects = await getData(`{
    projects: allProjects(filter: {
      defaultVisible: { eq: true }
      technologies: { allIn: ["${id}"] }
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

  return projects.data.projects;
}