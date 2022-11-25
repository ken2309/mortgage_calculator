export interface IHomeData {
    homeTitle: string,
    heroBanner: banner,
    homeDescription: homeDescription,
    heroBannerButton: string
}
interface banner {
    url: string,
    size: string|number,
    id: string,
    height: string|number|undefined,
    width: string|number|undefined,
    description: string,
    title: string
}
interface homeDescription {
    homeDescription: string
}
// {
//     "heroBanner": {
    //   "url": "https://images.ctfassets.net/f5ysdy9ko3pp/3J4qcAQ4c9d9hj6dTQV0f3/b96a7e616728fbe6e8f6805bdcb962a6/hero.png",
    //   "size": 131057,
    //   "id": "68413d3c-fb1a-5072-9267-5a2f6fc51121",
    //   "height": 749,
    //   "width": 817
//     },
//     "heroBannerButton": "Learn More",
//     "homeDescription": {
//       "homeDescription": "Are you looking for amazing financial advisor services? Don’t worry! We got it for you!"
//     },
//     "homeTitle": "Financial Advisor For Next Level Happy Life!",
//     "id": "d5ed9441-696c-5c90-ab63-5c39eae6d087"
//   }