import React from 'react'
interface IProp{
    addClasses ?: string
}
export default class PrimaryBtn extends React.PureComponent<IProp & React.ButtonHTMLAttributes<HTMLButtonElement>>{
    render() {
        return (
            <button {...this.props} className={`text-white text-xs bg-blue-700 hover:bg-blue-900  px-4 py-2 rounded ${this.props.addClasses}`}>
          </button>
        )
    }
}