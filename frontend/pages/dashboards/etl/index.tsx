import Head from 'next/head';
import { useState } from 'react';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { Grid, Container, Card, CardContent, Box, CardHeader, Divider, TextField, Button } from '@mui/material';
import Footer from '@/components/Footer';
import { createDestination } from '@/api/airbyte';
import {
  LIGHTHOUSE_AIRBYTE_ID,
  AIRBYTE_WORKSPACE_ID,
  THEGRAPH_AIRBYTE_ID
} from '@/config';


function DashboardTasks() {

  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;

    setState({
      ...state,
      [name]: value
    })
  }

  const submit = async () => {
    console.log({ state })
    const destination = await createDestination(
      AIRBYTE_WORKSPACE_ID,
      'lightouse-test2',
      LIGHTHOUSE_AIRBYTE_ID,
      state.apiKey,
      state.publicKey,
      state.privateKey,
      state.pipelineName
    )

    console.log({destination})
  }

  const [state, setState] = useState({
    subgraphName: "",
    startDate: "",
    entity: "",
    publicKey: "",
    privateKey: "",
    apiKey: "",
    pipelineName: ""
  })


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
                      value={state.subgraphName}
                      onChange={handleChange}
                    />
                    <TextField
                      id="startDate"
                      label="Start Date"
                      defaultValue="2022-01-01"
                      value={state.startDate}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="entity"
                      label="Entity Name"
                      defaultValue="borrows"
                      value={state.entity}
                      onChange={handleChange}

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
                      value={state.publicKey}
                      onChange={handleChange}
                    />
                    <TextField
                      id="privateKey"
                      label="Private Key"
                      type="password"
                      value={state.privateKey}
                      onChange={handleChange}
                    />
                    <TextField
                      id="apiKey"
                      label="Api Key"
                      value={state.apiKey}
                      type="password"
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="pipelineName"
                      label="borrows-aave-polygon"
                      value={state.pipelineName}
                      defaultValue="borrows-aave-polygon"
                      onChange={handleChange}
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
              onClick={submit}
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
