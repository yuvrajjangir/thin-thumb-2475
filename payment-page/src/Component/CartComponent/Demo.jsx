import React from 'react'
import Cart from './Cart'

const Demo = () => {
    const data=[
        { id: 1,image:"https://images.absolutdrinks.com/drink-images/Raw/Kahlua/8317f0a2-a13e-4eeb-954a-ae1d603537a6.jpg?imwidth=360" ,name: 'Product Name 1', price: 200, quantity: 2 },
        { id: 2, image:"https://www.tastingtable.com/img/gallery/coffee-brands-ranked-from-worst-to-best/intro-1645231221.jpg", name: 'Product Name 2', price: 150, quantity: 1 },
        { id: 3,image:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/04/15/16/china-coffee-cup.jpg", name: 'Product Name 2', price: 175, quantity: 1 },
        { id: 4, image:"https://media.post.rvohealth.io/wp-content/uploads/2020/08/coffee-worlds-biggest-source-of-antioxidants-1296x728-feature_0-800x728.jpg",name: 'Product Name 2', price: 180, quantity: 1 },
        { id: 5, image:"https://media.post.rvohealth.io/wp-content/uploads/2020/08/coffee-worlds-biggest-source-of-antioxidants-1296x728-feature_0-800x728.jpg",name: 'Product Name 2', price: 255, quantity: 1 },

    ]

  return (
    <div>
      <Cart data={data}/>
    </div>
  )
}

export default Demo
