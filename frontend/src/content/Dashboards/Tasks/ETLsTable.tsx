import { FC, ChangeEvent, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader,
  Dialog,
  DialogTitle,
  Button
} from '@mui/material';

import Label from '@/components/Label';
import { CryptoOrder, CryptoOrderStatus } from '@/models/crypto_order';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { runConnection } from '@/api/airbyte';

interface ETLsTableProps {
  className?: string;
  cryptoOrders: CryptoOrder[];
  etls: any[];
  userUploads: any[];
}

interface Filters {
  status?: CryptoOrderStatus;
}

const getStatusLabel = (cryptoOrderStatus: CryptoOrderStatus): JSX.Element => {
  if (cryptoOrderStatus == 'failed') return <Label color={'success'}>{'text'}</Label>;
  return <Label color={'success'}>{'Ready'}</Label>;
};

const applyFilters = (
  cryptoOrders: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    if (filters.status && cryptoOrder.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const ETLsTable: FC<ETLsTableProps> = ({ cryptoOrders, etls, userUploads }) => {

  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });

  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'completed',
      name: 'Completed'
    },
    {
      id: 'pending',
      name: 'Pending'
    },
    {
      id: 'failed',
      name: 'Failed'
    }
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleSelectAllCryptoOrders = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCryptoOrders(
      event.target.checked
        ? cryptoOrders.map((cryptoOrder) => cryptoOrder.id)
        : []
    );
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCryptoOrders = applyFilters(cryptoOrders, filters);

  const selectedSomeCryptoOrders =
    selectedCryptoOrders.length > 0 &&
    selectedCryptoOrders.length < cryptoOrders.length;
  const selectedAllCryptoOrders =
    selectedCryptoOrders.length === cryptoOrders.length;
  const theme = useTheme();

  const [openRunETL, setOpenRunETL] = useState(false);

  const runETL = (event) => {
    const response = runConnection(event.currentTarget.id)
    if (response) {
      setOpenRunETL(true)
    }
  }

  const seeResults = (event) => {
    const cid = event.currentTarget.id
    window.open(`https://files.lighthouse.storage/viewFile/${cid}`, '_blank', 'noreferrer');
    console.log(cid)
  }

  const handleCloseRunETL = () => {
    setOpenRunETL(false);
  };



  return (
    <>
      <Card style={{backgroundColor:"#0e112b"}}>
        {selectedBulkActions && (
          <Box flex={1} p={2}>
          </Box>
        )}
        {!selectedBulkActions && (
          <CardHeader
            action={
              <Box width={150}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={filters.status || 'all'}
                    onChange={handleStatusChange}
                    label="Status"
                    autoWidth
                  >
                    {statusOptions.map((statusOption) => (
                      <MenuItem key={statusOption.id} value={statusOption.id}>
                        {statusOption.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            }
            title="Your ETLs"
          />
        )}
        <Divider />
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={selectedAllCryptoOrders}
                    indeterminate={selectedSomeCryptoOrders}
                    onChange={handleSelectAllCryptoOrders}
                  />
                </TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Source Name</TableCell>
                <TableCell align="right">Destination Name</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {etls.map((etl) => {
                return (
                  <TableRow
                    hover
                    key={etl.etl_name}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                      />
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {etl.etl_name}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {etl.source_name}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {etl.destination_name}
                      </Typography>
                    </TableCell>
                    <TableCell align="right">
                      {getStatusLabel('Active')}
                    </TableCell>
                    <TableCell align="right">
                      <Tooltip title="Launch ETL" arrow >
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.primary.lighter
                            },
                            color: theme.palette.primary.main
                          }}
                          color="inherit"
                          size="small"
                          id={etl.etl_id}
                          onClick={runETL}
                        >
                          <PlayCircleFilledWhiteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="See results" arrow>
                        <IconButton
                          sx={{
                            '&:hover': {
                              background: theme.colors.primary.lighter
                            },
                            color: theme.palette.primary.main
                          }}
                          color="inherit"
                          size="small"
                          id={userUploads.filter((u) => u.fileName == etl.etl_name + '.csv').length 
                          ?
                          userUploads.filter((u) => u.fileName == etl.etl_name + '.csv')[0].cid
                          :
                          "" }
                          onClick={seeResults}
                        >
                          <RemoveRedEyeIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <Box p={2}>
          <TablePagination
            component="div"
            count={filteredCryptoOrders.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25, 30]}
          />
        </Box>
      </Card>
      <Dialog onClose={handleCloseRunETL} open={openRunETL}>
        <DialogTitle>ETL launched!</DialogTitle>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          onClick={handleCloseRunETL}
        >
          Close
        </Button>
      </Dialog>
    </>
  );
};

ETLsTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired
};

ETLsTable.defaultProps = {
  cryptoOrders: []
};

export default ETLsTable;
