import React from 'react'

interface ICard{
    addClassName ?: string
}
export default class Card extends React.Component<ICard>{
    render() {
        return (
            <section {...this.props} className= {`bg-white rounded p-4 shadow ${this.props.addClassName}`}>
            </section>
        )
    }
}