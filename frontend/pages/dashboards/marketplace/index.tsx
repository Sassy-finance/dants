import Head from 'next/head';
import SidebarLayout from '@/layouts/SidebarLayout';
import { useState } from 'react';

import PageTitle from '@/components/PageTitle';
import PageTitleWrapper from '@/components/PageTitleWrapper';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Divider
} from '@mui/material';
import Footer from 'src/components/Footer';
import CardActions from '@mui/material/CardActions';
import { styled } from '@mui/material/styles';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Cards() {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Head>
        <title>Marketplace</title>
      </Head>
      <PageTitleWrapper>
        <PageTitle
          heading="Marketplace"
          subHeading="Create your request or find community requests"
          docs="https://material-ui.com/components/cards/"
        />
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
            <Card style={{backgroundColor:"#0e112b"}}>
              <CardHeader title="Community requests" />
              <Divider />
              <CardContent>
                <Card sx={{ maxWidth: 345 }} style={{backgroundColor:"#0e112b"}}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title="Lending borrows aggregator"
                    subheader="January 29, 2023"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      Our protocol needs a pipeline that aggregates data from 
                      Aave, Compound and Maker borrows and creates a dataset
                      with all the aggregated data in a daily basis.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Make an offer</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

Cards.getLayout = (page) => <SidebarLayout>{page}</SidebarLayout>;

export default Cards;
