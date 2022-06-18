import React, {useState, useEffect} from 'react';

export default function ProductCard ({product}) {
  const {
    substance,
    count,
    present,
    img,
    weight_count,
    selected_text,
    disabled_text,
    available } = product;

  const [productClass, setProductClass] = useState({
    isSelected: false,
    classN: 'default'
  });

  useEffect(() => {
    if(!available) {
      setProductClass({classN: 'disabled'})
    }
  }, [available])

  const selectedProduct = () => {
    if(!available) return
    
    if(!productClass.isSelected) {
      setProductClass({isSelected: true, classN: 'selected'})
    } else {
      setProductClass({isSelected: false, classN: 'default'})
    }
  }

  return (
    <li className={`product-item ${productClass.classN}`} onClick={() => selectedProduct()} 
    >
    <div className={`product-item_container ${productClass.isSelected ? 'selected-hover' : ''}`}>

        <div className="product-item_content">
            <div className="product-item_main">
                <span className="product-item_tagline">Cказочное заморское яство</span>
                <span className="product-item_tagline_hover">Котэ не одобряет?</span>
                <h2>Нямушка</h2>
                <span className="product-item_substance">{substance}</span>
                <div className="product-item_change">
                    <span className="product-item_count"><span className="product-count">{count}</span>порций</span>
                    <span className="product-item_present">{present}</span>
                    <span className="product-item_image">
                        <div>
                        <img src={img} className="image-kot_preview" alt="Котейка"/>
                        </div>
                    </span>
                </div>
            </div>
            <div className="product-item_weight">
                <span className="weight-count">{weight_count}</span>
                <span className="weight-measure">кг</span>
            </div>
        </div>
    </div>

    <div className="product-item_figcaption">
      {!available &&
       <span className="product-item_disabled">{disabled_text}</span>
      }
      {available && productClass.isSelected &&
      <span className="product-item_selected">{selected_text}</span>
      }
      {available && !productClass.isSelected &&
        <span className="product-item_default">Чего сидишь? Порадуй котэ, 
        <button type='button' 
                className="product-item_buy"
                onClick={() => selectedProduct()}
        >купи.</button>
        </span>
      }
    </div>
</li>
  )
}