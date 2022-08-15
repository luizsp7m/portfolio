import { GetStaticPaths, GetStaticProps } from "next";
import { COUNT_PROJECTS_QUERY, GET_TECHNOLOGIES_QUERY } from "../../../../graphql/queries";
import { client } from "../../../../services/apollo";
import { Technology } from "../../../../types";

const ITEMS_PER_PAGE = 9;

interface GetTechnologiesResponse {
  allTechnologies: Array<Technology>;
}

interface CountProjectsResponse {
  _allProjectsMeta: {
    count: number;
  }
}

export default function Page() {
  return (
    <h1>Page</h1>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: technologies } = await client.query<GetTechnologiesResponse>({
    query: GET_TECHNOLOGIES_QUERY,
  });

  const pages = await Promise.all(technologies.allTechnologies.map(async technology => {
    const { data: countProjects } = await client.query<CountProjectsResponse>({
      query: COUNT_PROJECTS_QUERY,
      variables: {
        allIn: technology.id,
      }
    });

    const numberPages = Math.ceil(countProjects._allProjectsMeta.count / ITEMS_PER_PAGE);

    return {
      slug: technology.slug,
      numberPages,
    }
  }));

  const paths = [];

  pages.forEach(page => {
    for(let index = 1; index <= page.numberPages; index++) {
      paths.push({ params: {
        technology: page.slug,
        page: String(index),
      } });
    }
  });

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      name: "Luiz",
    }
  }
}