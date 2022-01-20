import {Page, Layout, Frame} from '@shopify/polaris';
import {APODCardList} from 'containers/APODCardList';
import {useState} from 'react';

export function App() {
  const [page, setPage] = useState(0);
  return (
    // TODO aria controls
    // TODO infinite scroll (pagination's behaviour on mobile) not functioning
    // TODO i18n
    // TODO unit & integration tests w/ Jest & jest-dom-mocks, e2e test w/ Cypress
    // TODO schema.org & OpenGraph metadata
    // TODO put date range in url & make url source of truth for date range. Add anchors (ids) for sharability
    <Frame>
      <Page
        title="Spacestagram"
        subtitle="Brought to you by NASA's Astronomy Photo of the Day (APOD) API"
        narrowWidth
        pagination={{
          hasPrevious: page > 0,
          hasNext: true,
          onNext: () => setPage((page) => page + 1),
          onPrevious: () => setPage((page) => page - 1),
          accessibilityLabels: {next: 'Next page', previous: 'Previous page'},
        }}
      >
        <Layout>
          <Layout.AnnotatedSection>
            <APODCardList page={page} />
          </Layout.AnnotatedSection>
        </Layout>
      </Page>
    </Frame>
  );
  // return <div>{JSON.stringify(items)}</div>;
}
