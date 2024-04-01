import ProductCard, { ProductImage, ProductTitle, ProductButtons } from "../components/index"

const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png',
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>

                {/* ProductCard = Compound Component Pattern */}
                {/* La idea de este ProductCard es que tiene todas las props y ellas */}
                {/* se dispersan en el resto de sus componentes hijos */}
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title title="Compound - Forma 1" />
                    <ProductCard.Buttons />
                </ProductCard>

                {/* Esta es otra manera de hacerlo */}
                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title="Compound - Forma 2" />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
