import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import History from '../../History/History';
import { InnerLayout } from '../../styles/Layouts';
import { dollar } from '../../utils/Icons';
import { rupee } from '../../utils/Icons';
import Chart from '../Chart/Chart';

function Dashboard() {
    const { totalExpenses, incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

    useEffect(() => {
        getIncomes()
        getExpenses()
    }, [])

    return (
        <DashboardStyled>
            <InnerLayout>
                <h1 style={{ fontSize: '5rem', textAlign: 'center' }} >Overall Stats</h1>
                <div className="stats-con">
                    <div className="chart-con">
                        {/* <Chart /> */}
                        <div className="amount-con">
                            <div className="income">
                                <h2>Total Income</h2>
                                <p>

                                    ₹ {totalIncome()}
                                    {/* {dollar} {totalIncome()} */}
                                </p>
                            </div>
                            <div className="expense">
                                <h2>Total Expense</h2>
                                <p>
                                    ₹ {totalExpenses()}
                                </p>
                            </div>
                            <div className="balance">
                                <h2>Total Balance</h2>
                                <p>
                                    ₹ {totalBalance()}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="history-con">
                        <History />
                        <h2 className="salary-title" style={{marginTop:'3rem'}}>Min <span>Income</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ₹{incomes.length > 0 ? Math.min(...incomes.map(item => item.amount)) : 0 }
                            </p>
                            <p>
                                ₹{incomes.length > 0 ? Math.max(...incomes.map(item => item.amount)) : 0 }
                                {/* ${Math.max(...incomes.map(item => item.amount))} */}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        {/* <div className="salary-item">
                            <p>
                                ₹{Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ₹{Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div> */}
                        <div className="salary-item">
                            <p>
                                ₹{expenses.length > 0 ? Math.min(...expenses.map(item => item.amount)) : 0}
                            </p>
                            <p>
                                ₹{expenses.length > 0 ? Math.max(...expenses.map(item => item.amount)) : 0}
                            </p>
                        </div>

                    </div>
                </div>
            </InnerLayout>
        </DashboardStyled>
    )
}

const DashboardStyled = styled.div`
    .stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: auto auto;
                grid-gap: 2rem;
                margin-top: 2rem;
                height:40rem;
                .balance{
                    grid-column: 1 / span 2;
                    color: green;
                }
                .expense{
                    color: red;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                    flex-direction: column;
                    h2{
                        font-size: 4rem;
                    }
                    p{
                        margin: auto center;
                        font-size: 3rem;
                        font-weight: 700;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard