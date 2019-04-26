// @flow
import { List } from 'immutable'
import { type Token } from '~/logic/tokens/store/model/token'
import { buildOrderFieldFrom, FIXED, type SortRow } from '~/components/Table/sorting'
import { type Column } from '~/components/Table/TableHead'

export const BALANCE_TABLE_ASSET_ID = 'asset'
export const BALANCE_TABLE_BALANCE_ID = 'balance'
export const BALANCE_TABLE_VALUE_ID = 'value'

type BalanceData = {
  asset: Object,
  balance: string,
}

export type BalanceRow = SortRow<BalanceData>

export const getBalanceData = (activeTokens: List<Token>): List<BalanceRow> => {
  const rows = activeTokens.map((token: Token) => ({
    [BALANCE_TABLE_ASSET_ID]: { name: token.name, logoUri: token.logoUri },
    [BALANCE_TABLE_BALANCE_ID]: `${token.balance} ${token.symbol}`,
    [buildOrderFieldFrom(BALANCE_TABLE_BALANCE_ID)]: Number(token.balance),
    [FIXED]: token.get('symbol') === 'ETH',
  }))

  return rows
}

export const generateColumns = () => {
  const assetRow: Column = {
    id: BALANCE_TABLE_ASSET_ID,
    order: false,
    disablePadding: false,
    label: 'Asset',
    custom: false,
    width: 250,
  }

  const balanceRow: Column = {
    id: BALANCE_TABLE_BALANCE_ID,
    align: 'right',
    order: true,
    disablePadding: false,
    label: 'Balance',
    custom: false,
  }

  const actions: Column = {
    id: 'actions',
    order: false,
    disablePadding: false,
    label: '',
    custom: true,
  }

  return List([assetRow, balanceRow, actions])
}

export const filterByZero = (data: List<BalanceRow>, hideZero: boolean): List<BalanceRow> => data.filter((row: BalanceRow) => (hideZero ? row[buildOrderFieldFrom(BALANCE_TABLE_BALANCE_ID)] !== 0 : true))