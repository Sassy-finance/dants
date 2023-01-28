import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageHeader from '@/content/Dashboards/Pipelines/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from '@/components/Footer';

import Pipelines from '@/content/Dashboards/Tasks/Pipelines';

function DashboardTasks() {
  return (
    <>
      <Head>
        <title>Pipelines</title>
      </Head>
      <PageTitleWrapper>
        <PageHeader />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <Pipelines community={true}/>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

DashboardTasks.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default DashboardTasks;
