
const SearchWidget = () => {
    return (
        <section className="search-widget">
            <div className="container">
                <form className={'form'}>
                    <input type="text" name={'search'} className={'input mb-0'} placeholder={'Unesi grad'}/>
                    <button className={'btn'}>Pronadji macku</button>
                    <button className={'btn'}>Pronadji psa</button>
                    <button className={'btn'}>Ostali ljubimci</button>
                </form>
            </div>
        </section>
    );
};

export { SearchWidget };
