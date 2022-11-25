import React, { useCallback, useState } from "react"
import { debounce } from 'lodash';
export default function index() {
    const [purchase, setPurchase] = useState(450000);
    const [downPayment, setDownPayment] = useState(135000);
    const [repaymentTime, setRepaymentTime] = useState(25);
    const [interestRate, setInterestRate] = useState(3);
    const debouncePurchasePrice = useCallback(debounce((nextValue) => { setPurchase(nextValue) }, 500), [])
    const debounceDownPayment = useCallback(debounce((nextValue) => { setDownPayment(nextValue) }, 500), [])
    const debounceRepaymentTime = useCallback(debounce((nextValue) => { setRepaymentTime(nextValue) }, 500), [])
    const debounceInterestRate = useCallback(debounce((nextValue) => { setInterestRate(nextValue) }, 500), [])
    const handlePurchase = (e: any, kind: string) => {
        const { value } = e;
        switch (kind) {
            case 'purchase':
                debouncePurchasePrice(value);
                break;
            case 'downPayment':
                debounceDownPayment(value)
                break;
            case 'repaymentTime':
                debounceRepaymentTime(value)
                break;
            case 'interestRate':
                debounceInterestRate(value)
                break;
            default:
                break;
        }
    }
    const rangeArr = [
        {
            content: 'Purchase Price: $' + formatPrice(purchase),
            input: {
                min: downPayment,
                max: 1000000,
                step: 1000,
                value: purchase,
                onChange: (event: any) => handlePurchase(event, 'purchase')
            }
        },
        {
            content: 'Down Payment: $' + formatPrice(downPayment),
            input: {
                min: 1000,
                max: purchase,
                step: 1000,
                value: downPayment,
                onChange: (event: any) => handlePurchase(event, 'downPayment')
            }
        },
        {
            content: 'Repayment time: ' + repaymentTime + ' years',
            input: {
                min: 1,
                max: 100,
                step: 1,
                value: repaymentTime,
                onChange: (event: any) => handlePurchase(event, 'repaymentTime')
            }
        },
        {
            content: 'Interest Rate: ' + interestRate + '%',
            input: {
                min: 1,
                max: 100,
                step: 0.1,
                value: interestRate,
                onChange: (event: any) => handlePurchase(event, 'interestRate')
            }
        }
    ]
    const Estimated_repayment_per_month = () => {
        let P, r, n, res = 0;
        r = interestRate / 100 / 12;
        n = repaymentTime * 12;
        P = purchase - downPayment;
        function monthlyPayment(p: any, n: any, i: any) {
            return p * i * ((1 + i) ** n) / ((1 + i) ** n - 1);
        }
        console.table({P,n,r});
        res = Math.floor(monthlyPayment(P, n, r)) || 0;
        return res;
    }
    return (
        <section className="mortgage" id="mortgage_calculator">
            <div className="mortgage__calculator">
                <div className="">
                    <div className="title">Mortgage Calculator</div>
                    <div className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</div>
                    <div className="range__block">
                        {
                            rangeArr.map((item, key) => (
                                <div key={key} className="range__item">
                                    <div className="item__title">
                                        {item.content}
                                    </div>
                                    <input type="range" min={item.input.min} max={item.input.max} step={item.input.step} defaultValue={item.input.value} className="item__slider" id="myRange" onChange={(event) => item.input.onChange(event.target)} />
                                </div>
                            ))
                        }
                    </div>
                    <div className="mortgage__result">
                        <span>Loan amounts: </span>
                        <div className="mortgage__result-number">${formatPrice(purchase - downPayment)}</div>
                    </div>
                    <div className="mortgage__result">
                        <span>Estimated repayment per month: </span>
                        <div className="mortgage__result-number">${formatPrice(Estimated_repayment_per_month())}</div>
                    </div>
                </div>
            </div>

            <div className="mortgage__try_out">
                <div>
                    <div className="title">
                        Try our awesome Calculator
                    </div>
                    <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                    </div>
                    <button
                        className="orangeBackground"
                    >Register</button>
                </div>
            </div>
        </section>
    )
}
export function formatPrice(num: any) {
    return num?.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}