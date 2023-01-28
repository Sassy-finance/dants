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
import { useRouter } from 'next/router'
import { createPipeline } from '@/api/pipeline';


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

    const pipeline = await createPipeline(
      state.pipelineName,
      state.pipelineDescription,
      state.pipelinePrice,
      state.sourceOne,
      state.sourceTwo,
      state.sourceThree,
      state.sourceFour,
      wholeWallet
    )

    if (pipeline) {
      setOpen(true)
    }

  }

  const [state, setState] = useState({
    pipelineDescription: "",
    pipelinePrice: "",
    fromDate: "",
    toDate: "",
    sourceOne: "",
    sourceTwo: "",
    sourceThree: "",
    sourceFour: "",
    pipelineName: ""
  })

  const [file, setFile] = useState<File>();
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);


  const handleClose = () => {
  }

  const handleFileChange = (e) => {
    console.log(file)
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const closeModalLogin = () => {
    setOpenLogin(false);
  }

  const closeModal = () => {
    setOpen(false);
    router.push("/dashboards/pipelines")
  }


  return (
    <>
      <Head>
        <title>Pipelines</title>
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
              <CardHeader title="Pipeline Detail" />
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
                      label="Pipeline Name"
                      defaultValue="Compound - Aave"
                      value={state.pipelineName}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="pipelineDescription"
                      label="Pipeline Description"
                      defaultValue="What the pipeline is doing..."
                      value={state.pipelineDescription}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="pipelinePrice"
                      label="Pipeline Price"
                      defaultValue="0.1FIL"
                      value={state.pipelinePrice}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="fromDate"
                      label="From Date"
                      defaultValue="2022-01-01"
                      value={state.fromDate}
                      onChange={handleChange}
                    />
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Sources" />
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
                      id="sourceOne"
                      label="Source"
                      defaultValue="Aave-borrows-polygon"
                      value={state.sourceOne}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="sourceTwo"
                      label="Source"
                      defaultValue="Compound-borrows-ethereum"
                      value={state.sourceTwo}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="sourceOne"
                      label="Source"
                      defaultValue="Aave-borrows-Ethereum"
                      value={state.sourceThree}
                      onChange={handleChange}
                    />
                    <TextField
                      required
                      id="sourceOne"
                      label="Source"
                      defaultValue="Aave-borrows-avalanche"
                      value={state.sourceFour}
                      onChange={handleChange}
                    />
                  </div>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Source code" />
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
                  <input type="file" onChange={handleFileChange} />
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
        <DialogTitle>Pipeline created!</DialogTitle>
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
