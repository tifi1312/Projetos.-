import { ChevronDown } from "lucide-react"

const ScrollIndicator = () => {
  return (
    <div className="text-center pb-8">
      <div className="animate-bounce">
        <ChevronDown className="mx-auto text-purple-400" size={32} />
      </div>
    </div>
  )
}
export default ScrollIndicator
