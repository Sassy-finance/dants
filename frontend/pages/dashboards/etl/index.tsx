import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container, Card, CardContent, Box, CardHeader, Divider, TextField, Button } from '@mui/material';
import Footer from '@/components/Footer';



function DashboardTasks() {
  return (
    <>
      <Head>
        <title>ETLs</title>
      </Head>
      <PageTitleWrapper>
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
          <Card>
              <CardHeader title="Source Detail" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      required
                      id="subgraphName"
                      label="Subgraph Name"
                      defaultValue="messari/aave-v2-polygon"
                    />
                    <TextField
                      id="startDate"
                      label="Start Date"
                      defaultValue="2022-01-01"
                    />
                    <TextField
                      required
                      id="entity"
                      label="Entity Name"
                      defaultValue="borrows"
                    />
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
          <Card>
              <CardHeader title="Destination Detail" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      required
                      id="publicKey"
                      label="publicKey"
                      defaultValue="0x..."
                    />
                    <TextField
                      id="privateKey"
                      label="Private Key"
                      type="password"
                    />
                    <TextField
                      id="apiKey"
                      label="Api Key"
                      type="password"
                    />
                    <TextField
                      required
                      id="pipelineName"
                      label="borrows-aave-polygon"
                      defaultValue="borrows-aave-polygon"
                    />
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
        >
          Save
        </Button>
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
