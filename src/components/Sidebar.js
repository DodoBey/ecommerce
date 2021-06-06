import './Sidebar.css'
const Sidebar = (props) => {

    const categories = Object.values(
        props.products.reduce((a, c) => {
            a[c.category] = c;
            return a
        }, {})
    );

    const brands = Object.values(
        props.products.reduce((a, c) => {
            a[c.brand] = c;
            return a
        }, {})
    );

    let myBrand = Object.values(brands).filter(asd => { return asd !== "author"});
    console.log(myBrand)

    const types = Object.values(
        props.products.reduce((a, c) => {
            a[c.type] = c;
            return a
        }, {})
    );

    const shipping = Object.values(
        props.products.reduce((a, c) => {
            a[c.shipping] = c;
            return a
        }, {})
    );


    const categorieArea = categories.sort((a, b) => a.category.localeCompare(b.category)).map(allcategories => {
        return (
            <div>
                <input type="checkbox" name={allcategories.category} id={allcategories.category} />
                <label htmlFor={allcategories.category}>{allcategories.category}</label>
            </div>
        )
    })

    const brandArea = brands.map(allbrands => {
        return (
            <div>
                <input type="checkbox" name={allbrands.brand} id={allbrands.brand} />
                <label htmlFor={allbrands.brand}>{allbrands.brand}</label>
            </div>
        )
    })

    const productTypeArea = types.sort((a, b) => a.type.localeCompare(b.type)).map(alltypes => {
        return (
            <div>
                <input type="checkbox" name={alltypes.type} id={alltypes.type} />
                <label htmlFor={alltypes.type}>{alltypes.type}</label>
            </div>
        )
    })

    const shippingArea = shipping.sort((a, b) => a.shipping.localeCompare(b.shipping)).map(allshipping => {
        return (
            <div>
                <input type="checkbox" name={allshipping.shipping} id={allshipping.shipping} />
                <label htmlFor={allshipping.shipping}>{allshipping.shipping}</label>
            </div>
        )
    })

    return (
        <div className="sidebarArea">
            <div className="searchFilter">
                <input type="text" placeholder="Search" value="" />
            </div>
            <div className="categoryFilter">
                <h4>Categories</h4>
                {categorieArea}
            </div>
            <div className="brandFilter">
                <h4>Brands</h4>
                {brandArea}
            </div>
            <div className="typeFilter">
                <h4>Product Type</h4>
                {productTypeArea}
            </div>
            <div className="availabilityFilter">
                <h4>Stock Status</h4>
                <div>
                    <input type="checkbox" name="In Stock" id="In Stock" />
                    <label htmlFor="In Stock">Show In Stock Only</label>
                </div>
            </div>
            <div className="shippingFilter">
                <h4>Shipping Area</h4>
                {shippingArea}
            </div>
            <div className="priceFilter">
                <h4>Price Filter</h4>
                <div>
                    <input type="number" name="PriceMin" value="" id="PriceMin" />
                    <label htmlFor="PriceMin">Min</label>
                    <input type="number" name="PriceMax" value="" id="PriceMax" />
                    <label htmlFor="PriceMax">Max</label>
                </div>
                <div>
                    <button>Filter Price</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;