import { Typography, Button, Grid } from '@mui/material';
import Link from 'next/link'

import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';

function PageHeader() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          ETLs
        </Typography>
        <Typography variant="subtitle2">
          These are your recent ETLs
        </Typography>
      </Grid>
      <Grid item>
      <Link href="etl">
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Create ETL
        </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
