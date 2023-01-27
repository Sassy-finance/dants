import { Card } from '@mui/material';
import { CryptoOrder } from '@/models/crypto_order';
import ETLsTable from './ETLsTable';
import { useEffect, useState, useContext } from 'react';
import { getAllETLs } from '@/api/airbyte';
import { User } from "../../../../src/contexts"

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

  const { wholeWallet } = useContext(User);

  useEffect(() => {
    if (wholeWallet) {
      loadData()
    }
  }, [wholeWallet])

  const [etls, setETLs] = useState([])

  const loadData = async () => {
    alert(wholeWallet)
    const etlResponse = await getAllETLs(wholeWallet)
    console.log(etlResponse)
    setETLs(etlResponse)
  }

  return (
    <Card>
      <ETLsTable cryptoOrders={cryptoOrders} etls={etls} />
    </Card>
  );
}

export default ETLs;
