import { Card } from '@mui/material';
import { CryptoOrder } from '@/models/crypto_order';
import ETLsTable from './ETLsTable';

function ETLs() {
  const cryptoOrders: CryptoOrder[] = [
    {
      id: '1',
      orderDetails: 'Fiat Deposit',
      orderDate: new Date().getTime(),
      status: 'completed',
      orderID: 'VUVX709ET7BY',
      sourceName: 'Bank Account',
      sourceDesc: '*** 1111',
      amountCrypto: 34.4565,
      amount: 56787,
      cryptoCurrency: 'ETH',
      currency: '$'
    }
  ];

  return (
    <Card>
      <ETLsTable cryptoOrders={cryptoOrders} />
    </Card>
  );
}

export default ETLs;
