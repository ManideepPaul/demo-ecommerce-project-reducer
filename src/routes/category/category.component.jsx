import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component';
import './category.styles.scss'
import { selectCategoriesMap } from '../../store/categories/categories.selector';

const Category = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const { category } = useParams(); //* useParams will get the values from path.
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products && products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </>
    )
}

export default Category