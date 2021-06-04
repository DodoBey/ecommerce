const Sidebar = () => {
    return(
        <div className="sidebarArea">
            <div className="searchFilter">
                <input type="text" placeholder="Search" value=""/>
            </div>
            <div className="categoryFilter">
                <h4>Categories</h4>
                <input type="checkbox" name="Electronics" id="Electronics" />
                <label htmlFor="Electronics">Electronics</label>
                <input type="checkbox" name="Clothing" id="Clothing" />
                <label htmlFor="Clothing">Clothing</label>
                <input type="checkbox" name="Books" id="Books" />
                <label htmlFor="Books">Books</label>
                <input type="checkbox" name="Home" id="Home" />
                <label htmlFor="Home">Home</label>
                <input type="checkbox" name="Grocery" id="Grocery" />
                <label htmlFor="Grocery">Grocery</label>
                <input type="checkbox" name="Sport" id="Sport" />
                <label htmlFor="Sport">Sport</label>
            </div>
            <div className="brandFilter">
                <h4>Brands</h4>
                <input type="checkbox" name="Apple" id="Apple" />
                <label htmlFor="Apple">Apple</label>
                <input type="checkbox" name="Samsung" id="Samsung" />
                <label htmlFor="Samsung">Samsung</label>
                <input type="checkbox" name="Nike" id="Nike" />
                <label htmlFor="Nike">Nike</label>
                <input type="checkbox" name="Air Jordan" id="Air Jordan" />
                <label htmlFor="Air Jordan">Air Jordan</label>
                <input type="checkbox" name="Sony" id="Sony" />
                <label htmlFor="Sony">Sony</label>
                <input type="checkbox" name="Amazon" id="Amazon" />
                <label htmlFor="Amazon">Amazon</label>
            </div>
            <div className="typeFilter">
                <h4>Product Type</h4>
                <input type="checkbox" name="Computer" id="Computer" />
                <label htmlFor="Computer">Computer</label>
                <input type="checkbox" name="Tablet" id="Tablet" />
                <label htmlFor="Tablet">Tablet</label>
                <input type="checkbox" name="Smartphone" id="Smartphone" />
                <label htmlFor="Smartphone">Smartphone</label>
                <input type="checkbox" name="Shoes" id="Shoes" />
                <label htmlFor="Shoes">Shoes</label>
                <input type="checkbox" name="Sony" id="Sony" />
                <label htmlFor="Sony">Sony</label>
                <input type="checkbox" name="Amazon" id="Amazon" />
                <label htmlFor="Amazon">Amazon</label>
            </div>
            <div className="availabilityFilter">
                <h4>Stock Status</h4>
                <input type="checkbox" name="In Stock" id="In Stock" />
                <label htmlFor="In Stock">Show In Stock Only</label>
            </div>
            <div className="shippingFilter">
                <h4>Shipping Area</h4>
            </div>
            <div className="priceFilter">
                <h4>Price Filter</h4>
                <div>
                    <input type="number" name="PriceMin" value="" id="PriceMin"/>
                    <label htmlFor="PriceMin">Min</label>
                </div>
                <div>
                    <input type="number" name="PriceMax" value="" id="PriceMax"/>
                    <label htmlFor="PriceMax">Max</label>
                </div>
                <div>
                    <button>Filter</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;