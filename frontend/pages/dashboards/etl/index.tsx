import Head from 'next/head';
import { useState, useContext } from 'react';
import SidebarLayout from '@/layouts/SidebarLayout';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import { User } from "../../../src/contexts"

import {
  Grid,
  Container,
  Card,
  CardContent,
  Box,
  CardHeader,
  Divider,
  TextField,
  Button,
  Dialog,
  DialogTitle
} from '@mui/material';
import Footer from '@/components/Footer';
import { createConnection, createDestination, createSource } from '@/api/airbyte';
import {
  LIGHTHOUSE_AIRBYTE_ID,
  AIRBYTE_WORKSPACE_ID,
  THEGRAPH_AIRBYTE_ID
} from '@/config';
import { useRouter } from 'next/router'


function DashboardTasks() {

  const router = useRouter()

  const { isLogged, wholeWallet } = useContext(User);


  const handleChange = (event) => {
    const name = event.target.id;
    const value = event.target.value;

    setState({
      ...state,
      [name]: value
    })
  }

  const submit = async () => {

    if (!isLogged) {
      setOpenLogin(true)
      return
    }

    const destination = await createDestination(
      AIRBYTE_WORKSPACE_ID,
      state.destinationName,
      LIGHTHOUSE_AIRBYTE_ID,
      state.apiKey,
      state.publicKey,
      state.privateKey,
      state.pipelineName
    )

    const source = await createSource(
      AIRBYTE_WORKSPACE_ID,
      state.sourceName,
      THEGRAPH_AIRBYTE_ID,
      state.entity,
      state.subgraphName,
      state.startDate
    )

    await createConnection(
      state.pipelineName,
      source.sourceId,
      destination.destinationId,
      wholeWallet,
      state.sourceName,
      state.destinationName,
      state.description
    )

    setOpen(true)
  }

  const [state, setState] = useState({
    sourceName: "",
    description: "",
    destinationName: "",
    subgraphName: "",
    startDate: "",
    entity: "",
    publicKey: "",
    privateKey: "",
    apiKey: "",
    pipelineName: ""
  })

  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);


  const handleClose = () => {

  }

  const closeModalLogin = () => {
    setOpenLogin(false);
  }

  const closeModal = () => {
    setOpen(false);
    router.push("/dashboards/tasks")
  }


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
              <CardHeader title="ETL" />
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
                      id="pipelineName"
                      label="ETL Name"
                      defaultValue="Aave-borrows-polygon"
                      value={state.pipelineName}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="description"
                      label="Description"
                      defaultValue="Retrieves all the borrows from Aave protocol"
                      value={state.description}
                      onChange={handleChange}
                    />
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
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
                      id="sourceName"
                      label="Source Name"
                      defaultValue="Compound"
                      value={state.sourceName}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="subgraphName"
                      label="Subgraph Name"
                      defaultValue="messari/aave-v2-polygon"
                      value={state.subgraphName}
                      onChange={handleChange}
                    />
                    <TextField
                      required
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
                      id="destinationName"
                      label="Destination Name"
                      defaultValue="LighthHouse"
                      value={state.destinationName}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="publicKey"
                      label="publicKey"
                      defaultValue="0x..."
                      value={state.publicKey}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="privateKey"
                      label="Private Key"
                      type="password"
                      value={state.privateKey}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="apiKey"
                      label="Api Key"
                      value={state.apiKey}
                      type="password"
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
      <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Connection created!</DialogTitle>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          onClick={closeModal}
        >
          Close
        </Button>
      </Dialog>

      <Dialog onClose={handleClose} open={openLogin}>
        <DialogTitle>Connect you wallet!</DialogTitle>
        <p>Please connect your wallet</p>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          onClick={closeModalLogin}
        >
          Close
        </Button>
      </Dialog>
    </>
  );
}

DashboardTasks.getLayout = (page) => (
  <SidebarLayout>{page}</SidebarLayout>
);

export default DashboardTasks;
