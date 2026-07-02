import {TabContainer} from '../tabUi/TabContainer'
import { LogItem } from "./LogItem";
import {EmptyState} from '../tabUi/EmptyState'

export function LogTab({logs, setLogs}) {

  function handleDeleteLog(id) {
    setLogs((prevLogs) => prevLogs.filter((log) => log.id !== id));
  }

  function handleClearLogs() {
    const confirmed = window.confirm(
      "Are you sure you want to clear all conversion history?"
    );

    if (confirmed) {
      setLogs([]);
    }
  }
  return (
    logs.length === 0 ? (
      <EmptyState 
        header={'No conversions logged yet'} 
        message={'Every conversion is recorded here automatically when you tap LOG CONVERSION. Your log is private to this session and this browser.'}
      />
    ) : (
      <TabContainer>
        <div className="flex justify-between md:items-center max-md:flex-col gap[10px] w-full">
          <h3 className="text-white text-sm md:text-base font-meduim flex-1">
            CONVERSION LOG
          </h3>
          <div className="flex gap-[10px] items-center max-md:justify-between">
            <span className="text-[#9D9D9D] text-[10px] md:text-xs">{logs.length} LOGGED</span>
            <button className="px-[12px] p-[8px] bg-[#202022] border border-[#3D3D3D] text-[#9D9D9D] text-[10px] md:text-xs rounded-[10px] cursor-pointer hover:scale-102 transform transition-all duration-300 ease"
              onClick={handleClearLogs}
            >
              CLEAR ALL
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          {logs.map((log) => {
            return(           
              <LogItem log={log} key={log.id} handleDeleteLog={handleDeleteLog}/>
            )
          })}
        </div>
      </TabContainer>
    )
  );
}
