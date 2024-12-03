import globe from "../../assets/world-logo.jpg"

export const TravelHeader = () => {
  return (
    <div className="bg-orange-500">
      <header className="flex align-middle m-auto w-12 bg-orange-500">
        <img src={globe} alt="world logo" className="w-16 border-r-4" /><span className="mt-3">TravelJourney</span>
      </header>
    </div>
  )
}


