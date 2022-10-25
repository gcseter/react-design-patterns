const Accordion = () => (
    <div className="accordion">
        <h3 className="accordion__title">Title</h3>
        <div className="accordion__wrapper">
            <div className="accordion__item">
                <div className="accordion__item-header">
                    Item 1 header
                </div>
                <div className="accordion__item-body">
                    Item 1 body
                </div>
            </div>

            <div className="accordion__item">
                <div className="accordion__item-header">
                    Item 2 header
                </div>
                <div className="accordion__item-body">
                    Item 2 body
                </div>
            </div>
        </div>
    </div>
)

export default Accordion;