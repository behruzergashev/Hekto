import React, { useState } from "react"
import "./ProductDetails.css"

const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState("description")
  const [expandedItems, setExpandedItems] = useState([])

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Info" },
    { id: "reviews", label: "Reviews" },
    { id: "video", label: "Video" },
  ]

  const detailItems = [
    {
      id: 1,
      text: "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa vivver .",
    },
    {
      id: 2,
      text: "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa vivver .",
    },
    {
      id: 3,
      text: "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa vivver .",
    },
    {
      id: 4,
      text: "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa vivver .",
    },
  ]

  const toggleItem = (itemId) => {
    setExpandedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  const getTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <>
            <h3 className="tab-title">Varius tempor.</h3>
            <p className="tab-text">
              Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend
              habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur
              neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget
              faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo
              netus dis. Eu in fringilla vulputate nunc nec. Dui, massa vivver .
            </p>
            <div className="more-details">
              <h4>More details</h4>
              {detailItems.map((item) => (
                <div key={item.id} className="detail-item">
                  <button
                    className={`arrow-button ${expandedItems.includes(item.id) ? "expanded" : ""}`}
                    onClick={() => toggleItem(item.id)}
                  >
                    →
                  </button>
                  <p className={expandedItems.includes(item.id) ? "expanded" : ""}>{item.text}</p>
                </div>
              ))}
            </div>
          </>
        )
      case "additional":
        return <div>
            <h1 className="h1center">Additional Info</h1>
            <p className="pcenter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero minus delectus laudantium dicta voluptatem sunt voluptate aliquid? Perspiciatis nisi optio maxime, aliquam tempore rem amet corrupti nulla quod deserunt, fuga facilis vel dignissimos quasi sint eligendi quis dolor maiores, iste nostrum! Veritatis voluptates consectetur facere architecto odio saepe voluptate commodi aperiam eligendi iste cum sint eos tempora laudantium sed fugiat quam, nam vitae minima dolorem debitis suscipit voluptatibus. Aliquid repudiandae sed repellendus, harum voluptatum ratione delectus! Dolore perferendis necessitatibus tempora ratione tenetur, numquam provident quisquam. Ratione iste, expedita non ipsa hic voluptate veniam iure quisquam est. Fuga minima consectetur illum?</p>
        </div>
      case "reviews":
        return <div>
            <h1 className="h1center">Rewiev container</h1>
            <p className="pcenter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit dolore voluptas, cum vel doloremque saepe voluptatum voluptatibus molestias non debitis excepturi nostrum ullam quia! Quisquam amet nam tenetur fugiat numquam nesciunt tempore voluptas voluptates nobis nulla laudantium delectus quas perspiciatis deleniti, officia corrupti earum dolorum magnam quibusdam unde, nisi voluptate aliquid! Deleniti ex excepturi, laboriosam eius ipsa, perspiciatis odio, quisquam quis dolor nam repudiandae earum nemo veniam! Fugiat est perspiciatis aspernatur, eius quas tempore hic nihil aliquam, quos, voluptate quo culpa modi autem praesentium? Ab, beatae placeat nemo architecto quisquam distinctio, modi assumenda, laboriosam repudiandae et fugit velit earum!</p>
        </div>
      case "video":
        return <div>
            <h1 className="h1center">Video Container</h1>
            <p className="pcenter">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam odio quod distinctio eaque ipsam perspiciatis dolorum quasi quaerat qui saepe. Recusandae harum animi praesentium. Consequuntur facilis maiores rem itaque est, nihil repellat adipisci. Saepe reprehenderit sapiente maxime quod dolorum corporis laudantium suscipit esse magnam laborum aliquam quo error, aspernatur nisi quidem dicta debitis deserunt in corrupti ea magni ad quasi natus exercitationem. Ullam laborum quis itaque quasi libero laboriosam unde dolorum praesentium natus tempore fuga cumque vitae qui a mollitia necessitatibus, hic esse illo id magnam in distinctio, sapiente perspiciatis autem. At praesentium error nulla, quibusdam veritatis neque sapiente excepturi.</p>
        </div>
      default:
        return null
    }
  }

  return (
    <div className="product-details">
      <div className="tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{getTabContent()}</div>
    </div>
  )
}

export default ProductDetails

