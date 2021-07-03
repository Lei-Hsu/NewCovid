import { ReactComponent as Loading } from '../../Assets/Components/Loading/Loading.svg'

export function Pending() {
  return (
    <div className={`w-full h-full bg-black opacity-40 flex justify-center items-center`}
      style={{ zIndex: 9999 }}
    >
      <div className={`animate-spin w-16 h-16`}>
        <Loading />
      </div>
    </div>
  )
}