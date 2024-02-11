import dummyGridData from "@/dummyGridData";
import ToopTipContainer from "@/components/tool-tip-container";
export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <div className='grid grid-cols-1 md:grid-cols-3  grid-flow-row-dense flex-1'>
        {
          dummyGridData.map((item, index) => {
            return (
              <div key={index} 
                style={{
                  backgroundColor: item.color
                }}
                className={`min-h-[150px] md:min-h-[50px] ${index === 1?'md:col-span-2':''} ${index === 2?'md:row-span-2 md:col-span-2':''}`}
              >
                <ToopTipContainer 
                  city={item.city}
                  population={item.population}
                  temperature={item.temperature}
                  airQuality={item.air_quality}
                  color={item.color}
                
                />
              </div>
            );
          })
        }
      </div>
    </main>
  );
}
