import { Card } from '@mui/material';
import { CryptoOrder } from '@/models/crypto_order';
import PipelinesTable from './PipelinesTable';
import { useEffect, useState, useContext } from 'react';
import { User } from "../../../contexts"
import { getAllPipelines } from "../../../api/pipeline"

function Pipelines({community}) {
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

  const [pipelines, setPipelines] = useState([])
  const [userUploads, setUserUploads] = useState([])

  const loadData = async () => {
    const pipelinesResponse = await getAllPipelines(wholeWallet)
    const uploads = await getUserUploads() as any
    setPipelines(pipelinesResponse || [])
    if (uploads) {
      setUserUploads(uploads.data.uploads || [])
    }
  }

  return (
    <Card>
      <PipelinesTable 
      cryptoOrders={cryptoOrders} 
      pipelines={pipelines}
      community={community} 
      userUploads={userUploads}
      />
    </Card>
  );
}

export default Pipelines;
