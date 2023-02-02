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

  const { wholeWallet, getUserUploads } = useContext(User);

  useEffect(() => {
    if (wholeWallet) {
      loadData()
    }
  }, [wholeWallet])

  const [etls, setETLs] = useState([])
  const [userUploads, setUserUploads] = useState([])


  const loadData = async () => {
    const etlResponse = await getAllETLs(wholeWallet)
    const uploads = await getUserUploads() as any
    setETLs(etlResponse || [])
    if (uploads) {
      setUserUploads(uploads.data.uploads || [])
    }
  }

  return (
    <Card>
      <ETLsTable cryptoOrders={cryptoOrders} etls={etls} userUploads={userUploads} />
    </Card>
  );
}

export default ETLs;
