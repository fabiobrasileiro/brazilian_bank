import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Fábio', lastName: 'Brasileiro', email: 'fabio@brasileiro.com'}
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type="greeting"
          title="welcome"
          user={loggedIn?.firstName || 'Guest'}
          subtext="Access and manage your account and transactions"
          />

          <TotalBalanceBox 
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.35}
          />

         
        </header>
        
      </div>
      <RightSideBar 
          user={loggedIn}
          transactins={[]}
          banks={[{currentBalance:123.50}, {currentBalance:123.50}]}
          />
    </section>
  )
}

export default Home