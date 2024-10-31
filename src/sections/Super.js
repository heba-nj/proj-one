
import Button from "../components/Button"

const Super = () => {
  return (
    <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
      <h2 className=" font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
      We provide you
      <span className="text-coral-red"> Super </span>
      <span className="text-coral-red"> Quality </span>
       Shoes
    </h2>
    <p className="mt-4 lg:max-w-lg info-text">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
    <p className="mt-6 lg:max-w-lg info-text">Discover stylish Nike arrivals, quality comfort, and innovation for your active life.</p>
    <div className="mt-11">
      <Button label="View details"/>
    </div>
      </div>
    </section>
  )
}

export default Super
