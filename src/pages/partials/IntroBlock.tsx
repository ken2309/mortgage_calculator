import React, { Key } from "react"
import checkWhite from '../../images/check-white.svg';
import useIntroBlock from '../../hooks/use-intro-block';
import { IIntroBlock } from "../../interface/IIntroBlock";

const ItroBlockItem = ({ title, description, icon }: IIntroBlock) => {
    return (
        <div className="IntroBlock-item">
            <div className="item__image">
                <img src={icon.url} alt={icon.title} />
            </div>
            <div>
                <div className="item__name">
                    {title}
                </div>
                <div className="item__description">
                    {description.description}
                </div>
            </div>
        </div>
    )
}
export default function index() {
    const listBlock = useIntroBlock() as IIntroBlock[];
    return (
        <section className="ItroBlock" id="service">
            <div className="title">
                <h2>
                    High Quality Output, Awesome Service
                </h2>
            </div>
            <div className="IntroBlock-list">
                {
                    listBlock.map((item: IIntroBlock, index: any): any =>
                        <ItroBlockItem title={item.title} description={item.description} key={index} icon={item.icon} />
                    )
                }
            </div>
        </section>
    )
}