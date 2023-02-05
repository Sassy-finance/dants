import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from '@mui/material';
import { margin } from '@mui/system';
import Link from 'src/components/Link';
import Enginners from 'src/images/enginners.png';
import Analyst from 'src/images/analyst.png';
import Dants from 'src/images/dants.png';


const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const TsAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const NextJsAvatar = styled(Box)(
  ({ theme }) => `
  width: ${theme.spacing(8)};
  height: ${theme.spacing(8)};
  border-radius: ${theme.general.borderRadius};
  background-color: #dfebf6;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const SectionTitle = styled(Box)(
  ({ theme }) => `
  font-color: #00204C;
  font-size: 65px;
  color: #00204A;
`
);

const SectionTitleApp = styled(Box)(
  ({ theme }) => `
  font-color: #00204C;
  font-size: 45px;
  color: #00204A;
`
);



const SectionSubTitle = styled(Box)(
  ({ theme }) => `
  font-color: #00204C;
  font-size: 28px;
  color: #00204A;
`
);


const SectionTools = styled(Box)(
  ({ theme }) => `
  font-color: #00204C;
  font-size:44px;
  color: #00204A;
  margin-top: 170px;
`
);


const SectionSubTools = styled(Box)(
  ({ theme }) => `
  font-color: #00204C;
  font-size: 20px;
  color: #00204A;
`
);


function Hero() {
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
      <Grid
        spacing={{ xs: 6, md: 10 }}
        justifyContent="center"
        alignItems="center"
        container
      >
        <Grid container spacing={3} mt={5}>
          <Grid item md={10} lg={8} mx="auto">
            <div style={{ width: '1240px', marginLeft: '-180px' }}>
              <img style={{ height: '140px' }} src='/static/images/shape.png'></img>
              <span style={{ width: '950px', height: '140px', display: 'inline-block' }}>
                <div style={
                  {
                    width: '280px',
                    height: '132px',
                    background: '#fff',
                    marginLeft: '380px',
                    marginTop: '-60px',
                    position: 'absolute',
                    borderRadius: '25px',
                  }
                }>
                  <img style={{ height: '80px', marginTop: '32px', marginLeft: '-160px' }} src='/static/images/Hourglass.png'></img>
                  <span style={{
                    height: '980px',
                    paddingTop: '52px',
                    position: 'absolute',
                    fontSize: '19px',
                    color: '#00204C',
                    fontWeight: 'bold',
                    paddingLeft: '30px',
                  }}>Automatise</span>
                </div>
              </span>
              <img style={{ height: '140px' }} src='/static/images/shape2.png'></img>
            </div>
          </Grid>
          <Grid item md={10} lg={8} mx="auto">
            <SectionTitle>By Engineers, <span style={
              {
                color: '#FFF',
                backgroundColor: "#A700FA",
                borderRadius: '25px',

              }}> &nbsp;For Scientist&nbsp; </span></SectionTitle>
            <SectionSubTitle>An open source Blockchain Data Analytics on top of Filecoin</SectionSubTitle>
          </Grid>
          <Grid item md={10} lg={8} mx="auto">
            <div style={{ width: '1240px', marginLeft: '-180px' }}>
              <span style={{ width: '950px', height: '140px', display: 'inline-block' }}>
                <div style={
                  {
                    width: '280px',
                    height: '132px',
                    background: '#fff',
                    marginLeft: '-10px',
                    marginTop: '80px',
                    position: 'absolute',
                    borderRadius: '25px',
                  }
                }>
                  <img style={{ height: '80px', marginTop: '32px', marginLeft: '-160px' }} src='/static/images/Cloud.png'></img>
                  <span style={{
                    height: '980px',
                    paddingTop: '52px',
                    position: 'absolute',
                    fontSize: '19px',
                    color: '#00204C',
                    fontWeight: 'bold',
                    paddingLeft: '30px',
                  }}>Standarise</span>
                </div>
                <div style={
                  {
                    width: '280px',
                    height: '132px',
                    background: '#fff',
                    marginLeft: '780px',
                    marginTop: '10px',
                    position: 'absolute',
                    borderRadius: '25px',
                  }
                }>
                  <img style={{ height: '80px', marginTop: '32px', marginLeft: '-160px' }} src='/static/images/Star.png'></img>
                  <span style={{
                    height: '980px',
                    paddingTop: '52px',
                    position: 'absolute',
                    fontSize: '19px',
                    color: '#00204C',
                    fontWeight: 'bold',
                    paddingLeft: '30px',
                  }}>Monetise</span>
                </div>
              </span>
            </div>
          </Grid>
          <Grid item md={10} lg={8} mx="auto">
            <SectionTools><span style={
              {
                color: '#FFF',
                backgroundColor: "#A700FA",
                borderRadius: '25px',

              }}>&nbsp;Explore&nbsp;</span> Our tools</SectionTools>
            <SectionSubTools>Forget about endless transformation processes or data you don’t understand</SectionSubTools>
          </Grid>
          <Grid item md={10} lg={10} mx="auto">
            <div style={{
              marginTop: '50px',
              backgroundImage: `url("${Enginners}")`,
              height: '428px',
              width: '1303px',
              backgroundSize: '100%'
            }}>
              <div>
                <div style={{
                  height: '380px',
                  width: '557px',
                  float: 'left',
                  backgroundColor: '#fff',
                  marginTop: '20px',
                  marginLeft: '20px',
                  borderRadius: '25px',
                }}>
                  <div>

                  </div>
                  <img style={{ height: '80px', marginTop: '32px', marginLeft: '-360px' }} src='/static/images/Phone.png'></img>
                  <span style={{
                    height: '980px',
                    paddingTop: '52px',
                    position: 'absolute',
                    fontSize: '30px',
                    color: '#00204C',
                    fontWeight: 'bold',
                    paddingLeft: '30px',
                  }}>Data Engineers</span>
                  <div style={{ textAlign: 'left', marginLeft: '70px', color: '#00204C', marginTop: '40px' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '18px' }}>
                      Automatise your data extraction & standardisation</p>
                    <p style={{ marginTop: '-14px' }}> Build automatise datasets and create stunning charts</p>
                  </div>
                  <div style={{ textAlign: 'left', marginLeft: '70px', color: '#00204C' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Save, share and monetise your datasets</p>
                    <p style={{ marginTop: '-14px' }}> Don’t just work for free, publish your work and get paid for it</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={10} lg={10} mx="auto">
            <div style={{
              marginTop: '50px',
              backgroundImage: `url("${Analyst}")`,
              height: '428px',
              width: '1303px',
              backgroundSize: '100%'
            }}>
              <div>
                <div style={{
                  height: '380px',
                  width: '557px',
                  float: 'left',
                  backgroundColor: '#fff',
                  marginTop: '20px',
                  marginLeft: '720px',
                  borderRadius: '25px',
                }}>
                  <div>
                  </div>
                  <img style={{ height: '80px', marginTop: '32px', marginLeft: '-360px' }} src='/static/images/Eye.png'></img>
                  <span style={{
                    height: '980px',
                    paddingTop: '52px',
                    position: 'absolute',
                    fontSize: '30px',
                    color: '#00204C',
                    fontWeight: 'bold',
                    paddingLeft: '30px',
                  }}>Data Scientist</span>
                  <div style={{ textAlign: 'left', marginLeft: '70px', color: '#00204C', marginTop: '20px' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '18px' }}>
                      Get "ready to use pre-processed blockchain data"</p>
                    <p style={{ marginTop: '-14px' }}>Validated and standardised by community experts</p>
                  </div>
                  <div style={{ textAlign: 'left', marginLeft: '70px', color: '#00204C' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Execute “compute to data” algorithms</p>
                    <p style={{ marginTop: '-14px' }}>Save time and resources</p>
                  </div>
                  <div style={{ textAlign: 'left', marginLeft: '70px', color: '#00204C' }}>
                    <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Use simple analytical tools</p>
                    <p style={{ marginTop: '-14px' }}>No need to use blockchain frameworks or languages just use you everyday tools like Python</p>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item md={10} lg={10} mx="auto" style={{ textAlign: 'left', marginTop: '60px', marginBottom: '60px' }}>
            <SectionTitleApp>Great People Make&nbsp;&nbsp;<span style={
              {
                color: '#FFF',
                backgroundColor: "#A700FA",
                borderRadius: '25px',

              }}> &nbsp;Great DAPPs.&nbsp; </span></SectionTitleApp>
            <SectionTitleApp>Explore now</SectionTitleApp>
            <Button
              component={Link}
              href="/dashboards/tasks"
              variant="contained"
            >
              Go to the App
            </Button>
          </Grid>
          <Grid item md={10} lg={10} mx="auto">
            <div style={{
              backgroundImage: `url("${Dants}")`,
              height: '308px',
              width: '603px',
              backgroundSize: '100%'
            }} />
          </Grid>
          <Grid item md={10} lg={10} mx="auto" style={{ textAlign: 'left', marginTop: '60px', marginBottom: '60px' }}>
            <SectionTitleApp>Cutting-Edge <span style={
              {
                color: '#FFF',
                backgroundColor: "#A700FA",
                borderRadius: '25px',

              }}> &nbsp;Thechnology&nbsp; </span></SectionTitleApp>
            <div style={
              {
                marginTop : '35px',

              }}>
              <img style={{ height: '90px' }} src='/static/images/filecoin-fil-logo.png'></img>
              <img style={{ height: '90px', marginLeft: '48px' }} src='/static/images/bacalhau.png'></img>
              <img style={{ height: '90px', marginLeft: '48px' }} src='/static/images/airbyte.png'></img>
              <img style={{ height: '90px', marginLeft: '48px' }} src='/static/images/lighthouse.jpeg'></img>
              <img style={{ height: '90px', marginLeft: '48px' }} src='/static/images/the-graph-grt-logo.png'></img>
              <img style={{ height: '90px', marginLeft: '48px' }} src='/static/images/spheron.jpeg'></img>
              <img style={{ height: '90px', marginLeft: '48px' }} src='/static/images/messari.png'></img>
            </div>
          </Grid>
        </Grid>
      </Grid >
    </Container >
  );
}

export default Hero;
