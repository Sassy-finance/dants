class Querys:
    borrows = """
            {
            borrows{
                id
                hash
                nonce
                logIndex
                blockNumber
                timestamp
                account{
                    id
                }
                market{
                    id
                }
                asset{
                    id
                }
                amount
                amountUSD
                }
            }
    """
