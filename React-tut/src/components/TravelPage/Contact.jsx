/* eslint-disable react/prop-types */

const Contact = (props) => {
   
    
  return (
    <div>
      <div className="p-5 border-2 border-blue-300 w-80 rounded-md m-4 shadow-2xl bg-slate-100">
        <img src={props.img} alt="dog1" className="w-72"/>
        <h2 className="text-2xl"> {props.name}</h2>
        <img src="/free-phone-icon.png" alt="phone" className="flex w-5"/><span> {props.phone}</span>
        <img src="/images.png" alt="mail" className="flex w-5"/><span> {props.mail}</span>
      </div>
    </div>
  )
}

export default Contact
