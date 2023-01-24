import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageHeader from '@/content/Dashboards/Tasks/PageHeader';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from '@/components/Footer';

import ETLs from '@/content/Dashboards/Tasks/ETLs';

function DashboardTasks() {
  return (
    <>
      <Head>
        <title>ETLs</title>
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
            <ETLs />
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
