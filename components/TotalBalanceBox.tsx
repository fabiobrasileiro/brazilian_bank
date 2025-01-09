

import { formatAmount } from '@/lib/utils'
import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import DoughnutChart from './DoughnutChart'

const TotalBalanceBox = ({
    accounts = [],
    totalBanks,
    totalCurrentBalance
}: TotalBalanceBoxProps) => {
    return (
        <section className="total-balance">
            <div className="total-balance-chart">
                {/* DOUGHNUTCHART */}
                <DoughnutChart accounts={accounts}/>
            </div>

            <div className="flex flex-col gap-6">
                <h2 className="header-2">
                BankAccounts: {totalBanks} 
                </h2>
                <div className="flex flex-col gap-2">
                    <p className='total-balance-label'>Total Current Balance</p>
                    <div >
                        <AnimatedCounter amount={totalCurrentBalance} />
                    </div>
                </div>

            </div>

        </section>
    )
}

export default TotalBalanceBox
