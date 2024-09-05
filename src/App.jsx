import Card from "./component/card/Card"
import Navbar from "./component/navbar/nav"
import Footer from "./component/footer/footer"

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
      <Card src="src/assets/iphone-12-364028_91435cf4-a70c-419e-bf4b-c4878df680eb.webp" title="iPhone 12 (PTA Approved)" pries="152,000.00" />
      <Card src="src/assets/REGEN-iPhone15proMax-BlueTitanium_f880685b-147e-4e3a-a19a-48442adbf1d9.webp" title="iPhone 15 Pro Max (PTA Approved)" pries="410,500.00" />
      <Card src="src/assets/REGEN-MacBook-Air-M1-frontview.webp" title="MacBook Air M1 - 8GB RAM (late 2020)" pries="205,000.00" />
      <Card src="src/assets/REGEN-iPad-Pro-12.9-2021-SG_6c54bab5-4c3d-4a32-b149-fe33e32d5d37.webp" title="iPad Pro 12.9 - 6th Gen (M2) - (2022)" pries="332,000.00" />
      <Card src="src/assets/REGEN-iPad-9th-gen-2021-SG.webp" title="iPad - 9th Gen (Wifi + Cellular) - (2021)" pries="112,000.00" />
      <Card src="src/assets/AppleWatch-Series7-StainlessSteel-cellular-REGEN-Pakistan_946527f2-7b32-402a-9409-d273cdc571cf.webp" title="Apple Watch 7 (2021) 45mm - GPS + Cellular - Stainless Steel)" pries="115,000.00" />
      </div>
      <Footer />
    </>
  )
}

export default App