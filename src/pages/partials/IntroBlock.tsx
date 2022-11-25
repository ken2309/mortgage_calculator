import React, { Key } from "react"
import checkWhite from '../../images/check-white.svg';
interface blockItem {
    name?: string;
    description?: string;
}
const list = [
    {
        name: 'Advisor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    },
    {
        name: 'Agency',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    },
    {
        name: 'Management',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor '
    }
]
const ItroBlockItem = ({ name, description }: blockItem) => {
    return (
        <div className="IntroBlock-item">
            <div className="item__image">
                <img src={checkWhite} alt="" />
            </div>
            <div className="item__name">
                {name}
            </div>
            <div className="item__description">
                {description}
            </div>
        </div>
    )
}
export default function index() {
    return (
        <section className="ItroBlock" id="service">
            <div className="title">
                <h2>
                    High Quality Output, Awesome Service
                </h2>
            </div>
            <div className="IntroBlock-list">
                {
                    list.map((item: blockItem, index: any): any =>
                        <ItroBlockItem name={item.name} description={item.description} key={index} />
                    )
                }
            </div>
        </section>
    )
}