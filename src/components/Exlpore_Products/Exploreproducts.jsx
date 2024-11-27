import React from 'react'
import './Exploreproducts.css'
import { menu_list } from '../../assets/assets'

const Exploreproducts = ({ category, setCategory }) => {
  return (
    <div>
      <div className="explore-products">
        <h1>Explore our Products</h1>
        <p>
          At M. K. Traders, we provide a comprehensive range of high-quality
          painting tools designed to meet the needs of professionals in the
          industry. Whether you are looking for precision rollers, sturdy
          hangers, wall brushes, extension poles, or durable putty knives, we
          have everything you need for a flawless finish. Our products are
          meticulously crafted to ensure exceptional performance, offering both
          reliability and ease of use on every job. Designed with the
          professional in mind, each item is engineered to provide maximum
          efficiency, ensuring that your projects are completed with precision
          and confidence. From surface preparation to the final coat, M. K.
          Traders equips you with the tools that elevate your work to the next
          level.
        </p>
        <div className="explore-product-list">
          {menu_list.map((item, index) => {
            return (
              <div
                onClick={() =>
                  setCategory(prev === item.menu_name ? 'All' : item.menu_image)
                }
                key={index}
                className="explore-product-list-item"
              >
                <img
                  className={category === item.menu_name ? 'active' : '?'}
                  src={item.menu_image}
                  alt=""
                />
                <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Exploreproducts
