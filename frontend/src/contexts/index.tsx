/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

export const User = React.createContext({
  isLogged: false,
  loginMetamask: () => { },
  userWallet: '',
  getUserUploads: () => { },
  wholeWallet:'',
  buyPipeline: (pipelineId: string, price: string) => { },
})