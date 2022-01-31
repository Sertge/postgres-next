import { createGraphiQLFetcher } from '@graphiql/toolkit';
import GraphiQL from 'graphiql';
import ReactDOM from 'react-dom';

const getiQl = () => {
  const fetcher = createGraphiQLFetcher({
    url: 'https://localhost:3000/api/graphql',
  });
  ReactDOM.render(
    <GraphiQL fetcher={fetcher} editorTheme={'abcdef'} />,
    document.body
  )
}

export default getiQl